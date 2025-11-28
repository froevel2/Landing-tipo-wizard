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
    <div className="space-y-8 w-full max-w-md text-center animate-fade-in-up">
      
      {/* Timer Badge */}
      <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold animate-pulse">
        <Timer className="w-5 h-5" />
        <span>La oferta expira en: {formatTime(timeLeft)}</span>
      </div>

      <div className="space-y-2">
        <p className="text-gray-400 text-xl font-medium line-through">Precio Regular: $49 USD</p>
        <div className="space-y-1">
             <h2 className="text-6xl font-black text-blue-600 tracking-tighter">
            $15 USD
            </h2>
            <p className="text-sm text-gray-500">Pago único. Acceso de por vida.</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <p className="text-gray-800 font-medium">
          Obtén el <span className="text-blue-600 font-bold">70% de descuento</span> solo por haber completado el test hoy.
        </p>
      </div>

      <Button onClick={onNext}>
        Me interesa la promo
      </Button>
    </div>
  );
};