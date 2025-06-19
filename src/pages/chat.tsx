import React, { useState } from "react";
import DefaultLayout from "@/layouts/default";
import axios from "axios";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "User", text: input }]);

    setInput("");

    try {
      const response = await axios.post(
        "https://kazanotourapi-production.up.railway.app/ask-ai/",
        {
          userMessage: input,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "Chatbot",
          text: response.data || "No response received.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "Chatbot", text: "Error: Unable to connect to the server." },
      ]);
    }
  };

  return (
    <DefaultLayout>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Chat</h1>
          <button
            className="text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setMessages([])}
          >
            Clear
          </button>
        </div>
        <div className="border rounded-lg shadow p-4 bg-white">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "User" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.sender === "User"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 border rounded-lg px-4 py-2 mr-2"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ChatPage;
