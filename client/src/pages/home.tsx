import { useEffect, useState } from "react";
import VideoBackground from "@/components/VideoBackground";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleCountdownComplete = () => {
    setIsRedirecting(true);
    window.location.href = "https://t.me/TheCricketInsights02";
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <VideoBackground />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        <div className="text-center px-4">
          <img 
            src="./logo.png" 
            alt="Cricket Insights Logo" 
            className="w-48 h-48 mx-auto mb-8 animate-bounce"
          />

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            The Cricket Insights 🏏
          </h1>

          <p className="text-2xl md:text-3xl text-white mb-8 animate-fade-in-delay">
            Wolrd Ka Sabse Popular Banda!💯
          </p>

          <div className="mb-8">
            <CountdownTimer 
              initialSeconds={3} 
              onComplete={handleCountdownComplete}
              isRedirecting={isRedirecting}
            />
          </div>

          <p className="text-xl text-green-400 mb-4">
            BBL 72/66 Matches Pass..🏆
          </p>

          <p className="text-xl text-white mb-8">
            💚Robust Sports Analyst 🤫💚💚
          </p>

          <a
            href="https://t.me/TheCricketInsights02"
            className={`inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 ${
              isRedirecting ? "animate-pulse" : ""
            }`}
          >
            JOIN THE CHANNEL NOW
          </a>

          <p className="text-2xl text-yellow-400 mt-8 animate-bounce">
            💵💰JALDI JUDO AUR LAKHON KAMAO💵💰
          </p>
        </div>
      </div>
    </div>
  );
}