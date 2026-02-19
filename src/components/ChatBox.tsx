import { useState, useEffect, useRef } from "react";
import { Send, Bot, User } from "lucide-react";
import { getBotResponse } from "./AiBot";
import "../ChatBox.css";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const botText = await getBotResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "Oops! Something went wrong.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Hello! I'm your AI assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <Bot />
          <h2>AI Assistant</h2>
        </div>
        <button onClick={handleClearChat}>Clear Chat</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            <div className="avatar">
              {msg.sender === "user" ? <User /> : <Bot />}
            </div>
            <div className="text">{msg.text}</div>
          </div>
        ))}
        {isTyping && <div className="typing">Bot is typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} disabled={!inputValue.trim()}>
          <Send />
        </button>
      </div>
    </div>
  );
}
