import React from 'react';
import { Button } from '../Button';
import { MASTERCLASS_DETAILS } from '../../constants';
import { Check } from 'lucide-react';

interface DetailsProps {
  onNext: () => void;
}

export const Details: React.FC<DetailsProps> = ({ onNext }) => {
  return (
    <div className="space-y-8 w-full max-w-md animate-fade-in-up">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-blue-600">Masterclass Digital</h2>
        <h3 className="text-xl font-semibold text-black">Comunicación Efectiva</h3>
      </div>

      <div className="bg-blue-50 p-8 rounded-2xl">
        <ul className="space-y-4">
          {MASTERCLASS_DETAILS.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 bg-blue-600 rounded-full p-0.5 shrink-0">
                 <Check className="w-3 h-3 text-white" strokeWidth={4} />
              </div>
              <span className="text-gray-800 font-medium">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center px-4">
         <p className="text-sm text-gray-500 italic">
            "La habilidad #1 que acelera el éxito profesional y personal."
         </p>
      </div>

      <Button onClick={onNext}>
        Me interesa
      </Button>
    </div>
  );
};