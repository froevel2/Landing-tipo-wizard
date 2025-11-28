import React from 'react';
import { Button } from '../Button';
import { MotivationType } from '../../types';
import { BENEFITS_DATA } from '../../constants';

interface BenefitsProps {
  type: MotivationType;
  onNext: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ type, onNext }) => {
  const benefits = BENEFITS_DATA[type];

  return (
    <div className="space-y-10 w-full max-w-md animate-fade-in-up">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Lo que vas a lograr:</h2>
        <p className="text-gray-500 text-lg">Diseñado específicamente para ti</p>
      </div>

      <div className="space-y-8 py-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{benefit.icon}</div>
            <p className="text-xl font-light text-gray-800 leading-snug">{benefit.text}</p>
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