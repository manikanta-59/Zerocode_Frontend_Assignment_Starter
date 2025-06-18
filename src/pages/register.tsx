import React, { useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "../services/api"; // Keep "@/services/api" if path alias works

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      alert("Registered successfully");
      router.push("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
