"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    </div>
  )
}
