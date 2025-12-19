"use server"

import { createClient } from "@/lib/supabase/server"

export async function registerForEvent(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const qrCodeData = `EVENT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  const registration = {
    user_id: user?.id || null,
    event_name: formData.get("eventName") as string,
    full_name: formData.get("fullName") as string,
    registration_number: formData.get("registrationNumber") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    event_date: formData.get("eventDate") as string,
    qr_code_data: qrCodeData,
  }

  const { error, data } = await supabase.from("event_registrations").insert(registration).select().single()

  if (error) {
    return { error: error.message }
  }

  return { success: true, data, qrCodeData }
}

export async function recordAttendance(qrCodeData: string, scannedBy: string) {
  const supabase = await createClient()

  // Find the registration
  const { data: registration, error: regError } = await supabase
    .from("event_registrations")
    .select("id")
    .eq("qr_code_data", qrCodeData)
    .single()

  if (regError || !registration) {
    return { error: "Invalid QR code or registration not found" }
  }

  // Check if already scanned
  const { data: existing } = await supabase
    .from("attendance")
    .select("id")
    .eq("registration_id", registration.id)
    .single()

  if (existing) {
    return { error: "Attendance already recorded for this registration" }
  }

  // Record attendance
  const { error } = await supabase.from("attendance").insert({
    registration_id: registration.id,
    scanned_by: scannedBy,
  })

  if (error) {
    return { error: error.message }
  }

  // Get full registration details
  const { data: fullReg } = await supabase.from("event_registrations").select("*").eq("id", registration.id).single()

  return { success: true, registration: fullReg }
}
