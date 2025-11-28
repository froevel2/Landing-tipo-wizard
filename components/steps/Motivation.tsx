import React from 'react';
import { OutlineButton } from '../Button';
import { MotivationType } from '../../types';

interface MotivationProps {
  onSelect: (type: MotivationType) => void;
}

export const Motivation: React.FC<MotivationProps> = ({ onSelect }) => {
  return (
    <div className="space-y-8 w-full max-w-md animate-fade-in-up">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">¡Felicitaciones por dar el primer paso!</h2>
        <p className="text-gray-600 text-lg">
          Para personalizar tu experiencia, cuéntanos:<br/>
          <span className="font-semibold text-black">¿Qué te motivó a entrar hoy?</span>
        </p>
      </div>

      <div className="space-y-4">
        <OutlineButton onClick={() => onSelect(MotivationType.WORK)}>
          Mejorar mi comunicación para el trabajo
        </OutlineButton>
        <OutlineButton onClick={() => onSelect(MotivationType.PERSONAL)}>
          Mejorar mi comunicación en mi vida personal
        </OutlineButton>
      </div>
    </div>
  );
};