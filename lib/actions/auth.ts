"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const fullName = formData.get("fullName") as string
  const registrationNumber = formData.get("registrationNumber") as string
  const phone = formData.get("phone") as string
  const role = (formData.get("role") as string) || "student"

  // Sign up the user
  const { error, data: authData } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/home`,
    },
  })

  if (error) {
    console.log("[v0] Signup error:", error)
    return { error: error.message }
  }

  // Create profile in profiles table
  if (authData.user) {
    const { error: profileError } = await supabase.from("profiles").insert({
      id: authData.user.id,
      full_name: fullName,
      registration_number: registrationNumber,
      email: email,
      phone: phone || null,
      role: role,
    })

    if (profileError) {
      console.log("[v0] Profile creation error:", profileError)
      return { error: profileError.message }
    }
  }

  revalidatePath("/", "layout")
  return { success: true, message: "Account created successfully!" }
}

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.log("[v0] Login error:", error)
    return { error: error.message }
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", data.user.id).single()

  revalidatePath("/", "layout")

  // Redirect based on role
  if (profile?.role === "admin") {
    redirect("/admin")
  } else {
    redirect("/home")
  }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath("/", "layout")
  redirect("/")
}
