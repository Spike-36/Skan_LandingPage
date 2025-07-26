// components/VideoBlock.tsx

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
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  className = '',
}: VideoBlockProps) => {
  return (
    <div className={`w-full max-w-4xl mx-auto px-4 ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        className="w-full rounded-xl shadow-lg"
      />
    </div>
  );
};

export default VideoBlock;
