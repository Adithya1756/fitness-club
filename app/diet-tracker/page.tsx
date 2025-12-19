"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, PlusCircle, Trash2, TrendingUp, Target, Flame, Calendar, CheckCircle2, Apple } from "lucide-react"

export default function DietTrackerPage() {
  const [dailyGoals] = useState({
    calories: 2400,
    protein: 150,
    carbs: 280,
    fats: 65,
  })

  const [loggedMeals, setLoggedMeals] = useState([
    {
      id: 1,
      name: "Breakfast - Idli & Sambar",
      time: "8:30 AM",
      calories: 480,
      protein: 16,
      carbs: 84,
      fats: 8,
    },
    {
      id: 2,
      name: "Mid-Morning - Banana",
      time: "10:45 AM",
      calories: 105,
      protein: 1,
      carbs: 27,
      fats: 0,
    },
    {
      id: 3,
      name: "Lunch - Chicken Rice Bowl",
      time: "1:15 PM",
      calories: 720,
      protein: 58,
      carbs: 78,
      fats: 16,
    },
  ])

  const [newMeal, setNewMeal] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fats: "",
  })

  const currentTotals = loggedMeals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fats: acc.fats + meal.fats,
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 },
  )

  const getProgressColor = (current: number, goal: number) => {
    const percentage = (current / goal) * 100
    if (percentage >= 90 && percentage <= 110) return "bg-primary"
    if (percentage < 90) return "bg-yellow-500"
    return "bg-red-500"
  }

  const handleAddMeal = (e: React.FormEvent) => {
    e.preventDefault()
    const meal = {
      id: Date.now(),
      name: newMeal.name,
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      calories: Number.parseInt(newMeal.calories),
      protein: Number.parseInt(newMeal.protein),
      carbs: Number.parseInt(newMeal.carbs),
      fats: Number.parseInt(newMeal.fats),
    }
    setLoggedMeals([...loggedMeals, meal])
    setNewMeal({ name: "", calories: "", protein: "", carbs: "", fats: "" })
  }

  const handleDeleteMeal = (id: number) => {
    setLoggedMeals(loggedMeals.filter((meal) => meal.id !== id))
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Activity className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Diet <span className="text-primary">Tracker</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your daily nutrition and hit your macro targets
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-primary" />
                        Today's Progress
                      </CardTitle>
                      <CardDescription>
                        {new Date().toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      {Math.round((currentTotals.calories / dailyGoals.calories) * 100)}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Flame className="h-4 w-4 text-primary" />
                          <span className="font-semibold">Calories</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {currentTotals.calories} / {dailyGoals.calories} kcal
                        </span>
                      </div>
                      <Progress
                        value={(currentTotals.calories / dailyGoals.calories) * 100}
                        className={getProgressColor(currentTotals.calories, dailyGoals.calories)}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Apple className="h-4 w-4 text-primary" />
                          <span className="font-semibold">Protein</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {currentTotals.protein}g / {dailyGoals.protein}g
                        </span>
                      </div>
                      <Progress
                        value={(currentTotals.protein / dailyGoals.protein) * 100}
                        className={getProgressColor(currentTotals.protein, dailyGoals.protein)}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          <span className="font-semibold">Carbs</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {currentTotals.carbs}g / {dailyGoals.carbs}g
                        </span>
                      </div>
                      <Progress
                        value={(currentTotals.carbs / dailyGoals.carbs) * 100}
                        className={getProgressColor(currentTotals.carbs, dailyGoals.carbs)}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="font-semibold">Fats</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {currentTotals.fats}g / {dailyGoals.fats}g
                        </span>
                      </div>
                      <Progress
                        value={(currentTotals.fats / dailyGoals.fats) * 100}
                        className={getProgressColor(currentTotals.fats, dailyGoals.fats)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl">Logged Meals</CardTitle>
                  <CardDescription>Your meals for today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {loggedMeals.map((meal) => (
                    <div
                      key={meal.id}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border"
                    >
                      <div className="space-y-1">
                        <p className="font-semibold">{meal.name}</p>
                        <p className="text-sm text-muted-foreground">{meal.time}</p>
                        <div className="flex gap-3 text-xs text-muted-foreground mt-2">
                          <span>{meal.calories} cal</span>
                          <span>P: {meal.protein}g</span>
                          <span>C: {meal.carbs}g</span>
                          <span>F: {meal.fats}g</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteMeal(meal.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {loggedMeals.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">No meals logged yet today</p>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <PlusCircle className="h-5 w-5 text-primary" />
                    Log a Meal
                  </CardTitle>
                  <CardDescription>Add what you ate</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddMeal} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mealName">Meal Name</Label>
                      <Input
                        id="mealName"
                        placeholder="e.g., Chicken Rice Bowl"
                        value={newMeal.name}
                        onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="calories">Calories</Label>
                        <Input
                          id="calories"
                          type="number"
                          placeholder="500"
                          value={newMeal.calories}
                          onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="protein">Protein (g)</Label>
                        <Input
                          id="protein"
                          type="number"
                          placeholder="30"
                          value={newMeal.protein}
                          onChange={(e) => setNewMeal({ ...newMeal, protein: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="carbs">Carbs (g)</Label>
                        <Input
                          id="carbs"
                          type="number"
                          placeholder="60"
                          value={newMeal.carbs}
                          onChange={(e) => setNewMeal({ ...newMeal, carbs: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fats">Fats (g)</Label>
                        <Input
                          id="fats"
                          type="number"
                          placeholder="15"
                          value={newMeal.fats}
                          onChange={(e) => setNewMeal({ ...newMeal, fats: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full glow-effect">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Log Meal
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Meals Logged</span>
                    <span className="text-2xl font-bold">{loggedMeals.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Remaining Calories</span>
                    <span className="text-2xl font-bold text-primary">
                      {Math.max(0, dailyGoals.calories - currentTotals.calories)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Protein Left</span>
                    <span className="text-2xl font-bold text-primary">
                      {Math.max(0, dailyGoals.protein - currentTotals.protein)}g
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
