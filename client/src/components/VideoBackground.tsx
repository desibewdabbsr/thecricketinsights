export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: -1 }}
    >
      <source src="/Background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
