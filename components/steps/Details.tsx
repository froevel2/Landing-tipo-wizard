import React from 'react';
import { Button } from '../Button';
import { MASTERCLASS_DETAILS } from '../../constants';
import { Check } from 'lucide-react';

interface DetailsProps {
  onNext: () => void;
}

export const Details: React.FC<DetailsProps> = ({ onNext }) => {
  return (
    <div className="space-y-10 w-full max-w-md animate-fade-in-up">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-blue-600">Masterclass+</h2>
        <h3 className="text-xl text-gray-900 font-medium">Comunicación Efectiva</h3>
      </div>

      <div className="py-2">
        <ul className="space-y-6">
          {MASTERCLASS_DETAILS.map((detail, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="mt-1 shrink-0 text-blue-600">
                 <Check className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <span className="text-xl text-gray-800 font-light">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center space-y-8">
         <p className="text-gray-400 italic font-light border-l-2 border-blue-600 pl-4 text-left mx-4">
            "La habilidad #1 que acelera el éxito profesional y personal."
         </p>
         
         <Button onClick={onNext}>
            Me interesa
         </Button>
      </div>
    </div>
  );
};