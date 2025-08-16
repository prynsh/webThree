export default function StartGameButton() {
  return (
    <div className="relative h-10 w-42">
      {/* Outline polygon */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
      >
        <polygon
          points="15,0 200,0 200,25 185,40 0,40 0,15"
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          
        />
      </svg>
      <button
        className="relative w-full h-full flex items-center justify-center border-2 bg-transparent font-normal text-xs uppercase tracking-wider text-yellow-400 transition-all duration-200 hover:px-8 overflow-hidden"
        style={{
          clipPath:
            "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
        }}
      >
        START GAME
        {/* Decorative lines */}
        <div className="absolute top-2.5 left-0.5 w-4 h-0.5 bg-white transform -rotate-50"></div>
        <div className="absolute bottom-2.5 right-0.5 w-4 h-0.5 bg-white transform -rotate-50"></div>
      </button>
    </div>
  )
}
