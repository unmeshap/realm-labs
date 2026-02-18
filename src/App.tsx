import { Chatbot } from "./components/chatbot";
import { AnimationPanel } from "./components/AnimationPanel";

export default function App() {
//   return (
//     <div className="flex flex-row w-full h-screen overflow-hidden">
//       {/* Chatbot Section */}
//       <div className="w-5/12 h-full border-r border-gray-200">
//         <Chatbot />
//       </div>

//       {/* Animation Section */}
//       <div className="w-7/12 h-full bg-[#1a1d3a]">
//         <AnimationPanel />
//       </div>
//     </div>
//   );
// }

// function App() {
  return (
    /* flex forces children side-by-side. h-screen makes it full height. */
    <div className="flex w-full h-screen overflow-hidden">
      
      {/* Chatbot: Fixed width (e.g., 400px) or percentage (1/3) */}
      <div className="w-1/3 h-full border-r border-gray-200 bg-white">
        <Chatbot />
      </div>

      {/* Animation: Takes up the remaining space */}
      <div className="flex-1 h-full bg-[#1a1d3a]">
        <AnimationPanel />
      </div>
      
    </div>
  );
}