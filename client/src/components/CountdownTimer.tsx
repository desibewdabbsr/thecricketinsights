import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialSeconds: number;
  onComplete: () => void;
  isRedirecting: boolean;
}

export default function CountdownTimer({ 
  initialSeconds, 
  onComplete,
  isRedirecting 
}: CountdownTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0 && !isRedirecting) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (seconds === 0 && !isRedirecting) {
      onComplete();
    }
  }, [seconds, isRedirecting, onComplete]);

  return (
    <div className="flex justify-center items-center">
      <div className="text-8xl md:text-9xl font-bold text-white animate-pulse">
        {isRedirecting ? "👉" : seconds}
      </div>
    </div>
  );
}
