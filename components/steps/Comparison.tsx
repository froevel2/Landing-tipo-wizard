import React from 'react';
import { Button } from '../Button';
import { Clock, DollarSign } from 'lucide-react';

interface ComparisonProps {
  onNext: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onNext }) => {
  return (
    <div className="space-y-12 w-full max-w-md text-center animate-fade-in-up">
      {/* Other Schools Section */}
      <div className="space-y-6">
        <h3 className="text-gray-400 font-semibold uppercase text-xs tracking-[0.2em]">Otras Escuelas</h3>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center gap-3 text-gray-400">
             <Clock className="w-6 h-6 stroke-1" /> 
             <span className="text-xl font-light">Meses de teoría</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
             <DollarSign className="w-6 h-6 stroke-1" /> 
             <span className="text-xl font-light">Cientos de dólares</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100 relative">
         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-blue-600 font-bold text-sm">
            VS
         </span>
      </div>

      {/* Us Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-black">Domínalo en 2 horas</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
            Sin rellenos. Sin perder tiempo.<br/>Directo a la práctica.
        </p>
      </div>

      <div className="pt-4">
        <Button onClick={onNext}>
            ¡Me interesa saber cómo!
        </Button>
      </div>
    </div>
  );
};