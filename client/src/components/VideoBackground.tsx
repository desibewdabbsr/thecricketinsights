export default function VideoBackground() {
  return (
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("/background.png")',
        zIndex: -1 
      }}
    />
  );
}