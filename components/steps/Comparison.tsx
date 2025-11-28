import React from 'react';
import { Button } from '../Button';
import { Clock, DollarSign, XCircle } from 'lucide-react';

interface ComparisonProps {
  onNext: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onNext }) => {
  return (
    <div className="space-y-10 w-full max-w-md text-center animate-fade-in-up">
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
          <h3 className="text-gray-500 font-semibold uppercase text-sm tracking-wider">Otras Escuelas</h3>
          <div className="flex items-center justify-center gap-2 text-gray-400">
             <Clock className="w-5 h-5" /> <span>Meses de teoría</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
             <DollarSign className="w-5 h-5" /> <span>Cientos de dólares</span>
          </div>
        </div>

        <div className="relative">
             <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-3 text-sm font-semibold text-blue-600">VS</span>
            </div>
        </div>

        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Domínalo en 2 horas intensivas</h2>
            <p className="text-gray-600">
                Sin rellenos. Sin perder tiempo. Directo a la práctica.
            </p>
        </div>
      </div>

      <Button onClick={onNext}>
        ¡Me interesa saber cómo!
      </Button>
    </div>
  );
};