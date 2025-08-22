"use client"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { motion } from "framer-motion"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-8 text-white drop-shadow-lg"
      >
        Welcome Back
      </motion.h1>

      <motion.button
        onClick={() => signIn("google")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <FcGoogle size={24} />
        Sign in with Google
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-white/80"
      >
        Secure login with your Google account
      </motion.p>
    </div>
  )
}
