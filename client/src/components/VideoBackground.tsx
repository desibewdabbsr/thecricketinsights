export default function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/background.png")',
          zIndex: -2
        }}
      >
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/background.png" />
        <link rel="preload" as="image" href="/logo.png" />
      </div>
      {/* Dark overlay for better text visibility */}
      <div 
        className="absolute inset-0 w-full h-full bg-black/60"
        style={{ zIndex: -1 }}
      />
    </div>
  );
}