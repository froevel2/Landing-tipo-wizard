import React from 'react';
import { Button } from '../Button';
import { MotivationType } from '../../types';
import { BENEFITS_DATA } from '../../constants';
import { CheckCircle2 } from 'lucide-react';

interface BenefitsProps {
  type: MotivationType;
  onNext: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ type, onNext }) => {
  const benefits = BENEFITS_DATA[type];

  return (
    <div className="space-y-8 w-full max-w-md animate-fade-in-up">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Lo que vas a lograr:</h2>
        <p className="text-gray-500">Diseñado específicamente para ti</p>
      </div>

      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4 p-2">
            <div className="shrink-0 mt-1">{benefit.icon}</div>
            <p className="text-lg font-medium text-gray-800 leading-snug">{benefit.text}</p>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button onClick={onNext}>
          ¡Me interesa!
        </Button>
      </div>
    </div>
  );
};