"use client"

import { useState } from "react";
import { X } from "lucide-react";

const FloatingButtonsWithChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: input },
        { from: "ai", text: "I'm just a demo AI 🤖" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">
        {/* Voice with AI */}
        <div className="group relative">
          <button
            className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all"
            title="Voice with AI"
          >
            🎤
          </button>
          <span className="absolute right-full mr-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Voice with AI
          </span>
        </div>

        {/* Chat with AI */}
        <div className="group relative">
          <button
            onClick={() => setShowChat(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            title="Chat with AI"
          >
            💬
          </button>
          <span className="absolute right-full mr-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Chat with AI
          </span>
        </div>
      </div>

      {/* Chat Popup */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border rounded-lg shadow-xl z-50 flex flex-col h-96">
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="font-semibold text-gray-800">AI Assistant</h2>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.from === "ai"
                    ? "bg-gray-100 text-left"
                    : "bg-blue-100 text-right"
                } px-3 py-2 rounded-lg`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="border-t p-2 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded px-3 py-1 text-sm focus:outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtonsWithChat;
