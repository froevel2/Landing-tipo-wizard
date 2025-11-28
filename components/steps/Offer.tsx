import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Timer } from 'lucide-react';

interface OfferProps {
  onNext: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onNext }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-10 w-full max-w-md text-center animate-fade-in-up">
      
      {/* Timer Badge */}
      <div className="flex justify-center">
        <div 
          role="timer" 
          aria-live="polite"
          className="inline-flex items-center gap-2 text-red-500 font-mono text-lg font-bold"
        >
          <Timer className="w-5 h-5" />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-400 text-xl font-medium line-through decoration-1">
          Normal: $49 USD
        </p>
        <div className="space-y-2">
             <h2 className="text-7xl font-black text-blue-600 tracking-tighter">
            $15
            <span className="text-2xl text-gray-500 font-normal ml-2 tracking-normal">USD</span>
            </h2>
        </div>
      </div>

      <div className="border-t border-b border-gray-100 py-6">
        <p className="text-gray-800 text-lg leading-relaxed">
          Acceso de por vida con <br/>
          <span className="font-bold text-blue-600">70% de descuento</span> hoy.
        </p>
      </div>

      <Button onClick={onNext}>
        Me interesa la promo
      </Button>
    </div>
  );
};