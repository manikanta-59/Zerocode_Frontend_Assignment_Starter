import React, { useState } from "react"
import { useRouter } from "next/router"
import { loginUser } from "../services/api" // or "@/services/api" if alias works
import { useAuth } from "../context/AuthContext" // or "@/context/AuthContext"


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await loginUser(email, password)
      login(res.token)
      router.push("/chat")
    } catch (err) {
      alert("Login failed")
    }
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}
