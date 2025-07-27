"use client";

import { useRef, useState } from "react";

type VideoBlockProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
};

const VideoBlock = ({
  src,
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  className = '',
}: VideoBlockProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(autoPlay);
  const [ended, setEnded] = useState(false);

  const handlePlay = () => {
    if (videoRef.current && !started) {
      videoRef.current.play();
      setStarted(true);
      setEnded(false);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setEnded(false);
    }
  };

  return (
    <div className={`relative w-full max-w-4xl mx-auto px-4 ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        onEnded={() => setEnded(true)}
        className="w-full rounded-xl shadow-lg"
      />

      {!started && (
        <div
          onClick={handlePlay}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-center cursor-pointer rounded-xl"
        >
          <p className="text-xl md:text-2xl font-semibold mb-2">
            How Skån works in 30 seconds
          </p>
          <span className="text-4xl animate-bounce">↓</span>
        </div>
      )}

      {ended && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white text-center rounded-xl">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            Want to see it again?
          </p>
          <button
            onClick={handleReplay}
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Replay video
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBlock;
