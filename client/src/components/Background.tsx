export default function Background() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url("${import.meta.env.VITE_BASE_URL || '/'}background.png")`,
          zIndex: -2
        }}
      />
      {/* Dark overlay for better text visibility */}
      <div 
        className="absolute inset-0 w-full h-full bg-black/60"
        style={{ zIndex: -1 }}
      />
    </div>
  );
}