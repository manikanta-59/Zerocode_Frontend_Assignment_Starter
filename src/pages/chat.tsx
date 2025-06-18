import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../context/AuthContext"
import ChatBox from "../components/ChatBox"
import DarkModeToggle from "../components/DarkModeToggle"

export default function Chat() {
  const { token } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push("/login")
    }
  }, [token])

  if (!token) return null

  return (
    <div className="min-h-screen bg-gray-900 text-black dark:bg-black dark:text-white transition-all duration-300 p-4 relative">
      <DarkModeToggle />
      <h1 className="text-3xl font-bold text-center mb-4">Chat with Bot</h1>
      <ChatBox />
    </div>
  )
  
}
