"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitApplication(formData: FormData) {
  const supabase = await createClient()

  const application = {
    full_name: formData.get("fullName") as string,
    registration_number: formData.get("registrationNumber") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    branch: formData.get("branch") as string,
    year: formData.get("year") as string,
    fitness_goal: formData.get("fitnessGoal") as string,
    experience: formData.get("experience") as string,
    why_join: formData.get("whyJoin") as string,
    availability: formData.getAll("availability") as string[],
  }

  const { error } = await supabase.from("team_applications").insert(application)

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}
