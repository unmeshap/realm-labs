import { ChatBot } from "./components/ChatBox";
import { AnimationPanel } from "./components/AnimationPanel";
import "./App.css"; // plain CSS

export default function App() {
  return (
    <div className="app-container">
      <div className="chatbot-section">
        <ChatBot />
      </div>
      <div className="animation-section">
        <AnimationPanel />
      </div>
    </div>
  );
}
