"use server"

import { createClient } from "@/lib/supabase/server"

export async function saveDietPlan(data: any) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "You must be logged in to save a diet plan" }
  }

  const { error } = await supabase.from("diet_plans").insert({
    user_id: user.id,
    ...data,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

export async function logMeal(formData: FormData) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "You must be logged in to log meals" }
  }

  const mealLog = {
    user_id: user.id,
    meal_time: formData.get("mealTime") as string,
    food_item: formData.get("foodItem") as string,
    calories: Number.parseInt(formData.get("calories") as string),
    protein: Number.parseInt(formData.get("protein") as string),
    carbs: Number.parseInt(formData.get("carbs") as string),
    fat: Number.parseInt(formData.get("fat") as string),
    log_date: formData.get("logDate") as string,
  }

  const { error } = await supabase.from("diet_logs").insert(mealLog)

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

export async function getDietLogs(date: string) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "You must be logged in" }
  }

  const { data, error } = await supabase
    .from("diet_logs")
    .select("*")
    .eq("user_id", user.id)
    .eq("log_date", date)
    .order("logged_at", { ascending: false })

  if (error) {
    return { error: error.message }
  }

  return { success: true, logs: data }
}
