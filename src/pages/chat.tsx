import React, { useState } from "react";
import DefaultLayout from "@/layouts/default";
import axios from "axios";
import { Spinner } from "@heroui/react";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "" || loading) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "User", text: input }]);

    setInput("");
    setLoading(true);

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
          text: response.data.aiMessage || "No response received.",
        },
      ]);

      if (response.data.recommendations_detail) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "Chatbot",
            text:
              response.data.recommendations_detail || "No response received.",
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "Chatbot", text: "Error: Unable to connect to the server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">แชทกับคาซ่า</h1>
          <button
            className="text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setMessages([])}
          >
            Clear
          </button>
        </div>
        <div className="flex">
          <div
            className="flex items-center"
            style={{
              animation: "rotate1 1s ease-in-out infinite alternate",
            }}
          >
            <img src="https://i.ibb.co/Y7mhC4x2/image-2.png" />
            <style>
              {`
              @keyframes rotate1 {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(30deg); }
                100% { transform: rotate(0deg); }
              }
              `}
            </style>
          </div>
          <div className="w-full border rounded-lg shadow p-4 bg-white mx-4">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
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
              {loading && (
                <div className="mb-4 text-left">
                  <span className="inline-flex px-4 py-2 rounded-lg bg-gray-200 text-black">
                    <Spinner variant="dots" />
                  </span>
                </div>
              )}
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
          <div
            className="flex items-center"
            style={{
              animation: "rotate2 1s ease-in-out infinite alternate",
            }}
          >
            <img src="https://i.ibb.co/8DJKWQmb/image-1-1.png" />
            <style>
              {`
              @keyframes rotate2 {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(-30deg); }
                100% { transform: rotate(0deg); }
              }
              `}
            </style>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ChatPage;
