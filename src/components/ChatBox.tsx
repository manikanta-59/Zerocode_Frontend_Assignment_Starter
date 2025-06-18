import React from "react"
import { useChat } from "../hooks/useChat"
import MessageBubble from "./MessageBubble"
import Loader from "./Loader"

export default function ChatBox() {
  const { messages, input, setInput, sendMessage, loading, chatRef } = useChat()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage()
  }

  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert("Your browser does not support voice input.")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = "en-US"
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInput(transcript)
      }
      
      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error)
      }
      

    recognition.start()
  }

  const handleExport = () => {
    const content = messages.map((m) => `${m.role}: ${m.text}`).join("\n")
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "chat_history.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-xl mx-auto h-[80vh] flex flex-col border rounded shadow bg-white dark:bg-gray-900 dark:text-white transition-colors">


      <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-1">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {loading && <Loader />}
      </div>

      <div className="p-4 border-t space-y-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="w-full p-2 border rounded"
        />

        <div className="flex gap-2">
          <button
            onClick={handleVoiceInput}
            className="flex-1 bg-purple-600 text-white px-4 py-2 rounded"
          >
            🎙️ Speak
          </button>

          <button
            onClick={handleExport}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded"
          >
            📤 Export Chat
          </button>
        </div>
      </div>
    </div>
  )
}
