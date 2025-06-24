// src/components/SignupForm.tsx
'use client'

import { useState } from 'react'

export default function SignupForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("Thanks! You’re on the list.")
    setEmail("")
  }

  return (
    <section id="signup" className="bg-gray-50 py-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Get Updates</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border w-full md:w-2/3 rounded"
        />
        <button type="submit" className="bg-black text-white px-6 py-3 rounded">
          Subscribe
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </section>
  )
}
