import brainGif from './../assets/brain.gif';

export function AnimationPanel() {
  return (
    <div className="h-full relative overflow-hidden bg-[#1a1d3a]">
      {/* Brain image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={brainGif}
          alt="Animation of the brain"
          className="w-full h-full object-contain object-right"
        />
      </div>
      <div>Animated Image</div>
    </div>
  );
}