import React from "react"
import { Message } from "../hooks/useChat"

interface Props {
  message: Message
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user"
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs transition-colors duration-200 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
        }`}
      >
        {message.text}
      </div>
    </div>
  )
}
