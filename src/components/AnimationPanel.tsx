import brainGif from "../assets/brain.gif";
import "./../AnimationPanel.css";

export function AnimationPanel() {
  return (
    <div className="animation-container">
      <img src={brainGif} alt="Brain animation" />
    </div>
  );
}
