"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="mx-auto text-primary mb-4" size={48} />
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">Registration Submitted!</h3>
        <p className="text-muted-foreground">We'll contact your school with confirmation details shortly.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="schoolName" className="block text-sm font-medium text-foreground mb-2">
            School Name *
          </label>
          <input
            type="text"
            id="schoolName"
            required
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Enter school name"
          />
        </div>
        <div>
          <label htmlFor="teamName" className="block text-sm font-medium text-foreground mb-2">
            Team Name (if different)
          </label>
          <input
            type="text"
            id="teamName"
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Optional team name"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="coachName" className="block text-sm font-medium text-foreground mb-2">
            Coach Name *
          </label>
          <input
            type="text"
            id="coachName"
            required
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Head coach name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Contact Phone *
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="+254 7XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          placeholder="school@example.com"
        />
      </div>

      <div>
        <label htmlFor="players" className="block text-sm font-medium text-foreground mb-2">
          Number of Players
        </label>
        <select
          id="players"
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:border-primary focus:outline-none"
        >
          <option value="16">16 Players (Minimum)</option>
          <option value="18">18 Players</option>
          <option value="20">20 Players (Maximum)</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          rows={3}
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
          placeholder="Any special requirements or information..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full font-display uppercase tracking-wider">
        Submit Registration
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Registration deadline: January 31, 2025. Fee: KES 5,000 per team.
      </p>
    </form>
  )
}
