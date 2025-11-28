import React, { useState } from 'react';
import { Step, MotivationType } from './types';
import { Motivation } from './components/steps/Motivation';
import { Benefits } from './components/steps/Benefits';
import { Comparison } from './components/steps/Comparison';
import { Details } from './components/steps/Details';
import { Loader } from './components/steps/Loader';
import { Offer } from './components/steps/Offer';
import { Payment } from './components/steps/Payment';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.MOTIVATION);
  const [motivation, setMotivation] = useState<MotivationType | null>(null);

  const handleMotivationSelect = (type: MotivationType) => {
    setMotivation(type);
    setCurrentStep(Step.BENEFITS);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case Step.MOTIVATION:
        return <Motivation onSelect={handleMotivationSelect} />;
      case Step.BENEFITS:
        return motivation ? <Benefits type={motivation} onNext={nextStep} /> : null;
      case Step.COMPARISON:
        return <Comparison onNext={nextStep} />;
      case Step.DETAILS:
        return <Details onNext={nextStep} />;
      case Step.LOADER:
        return <Loader onComplete={nextStep} />;
      case Step.OFFER:
        return <Offer onNext={nextStep} />;
      case Step.PAYMENT:
        return <Payment />;
      default:
        return <Motivation onSelect={handleMotivationSelect} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="w-full py-6 flex justify-center items-center border-b border-gray-100 fixed top-0 bg-white/90 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold tracking-tight text-black">
          Comunicación<span className="text-blue-600">+</span>
        </h1>
      </header>

      {/* Main Content Area - Centered Vertical/Horizontal */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 pt-24 pb-20 w-full max-w-lg mx-auto">
        {renderStep()}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-400 text-xs border-t border-gray-50 mt-auto">
        <p>© {new Date().getFullYear()} Comunicación+. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;