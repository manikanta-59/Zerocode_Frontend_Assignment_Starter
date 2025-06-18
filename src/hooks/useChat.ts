import { useEffect, useRef, useState } from "react"
import axios from "axios"

export interface Message {
  id: number
  role: "user" | "bot"
  text: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const chatRef = useRef<HTMLDivElement>(null)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text: input.trim()
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const response = await axios.get("https://dummyjson.com/quotes/random")
      const quote = response.data.quote

      const botMsg: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: quote
      }

      setMessages((prev) => [...prev, botMsg])
    } catch (err) {
      console.error("Bot error:", err)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          role: "bot",
          text: "⚠️ Could not fetch a quote."
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [messages, loading])

  return {
    messages,
    input,
    setInput,
    sendMessage,
    loading,
    chatRef
  }
}
