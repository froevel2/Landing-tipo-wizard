import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type PaymentMethod = 'YAPE' | 'PLIN';

export const Payment: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [method, setMethod] = useState<PaymentMethod>('YAPE');
  const phoneNumber = "987 654 321";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 w-full max-w-md text-center animate-fade-in-up">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Inscripción</h2>
        <p className="text-gray-500 text-lg">Selecciona tu método de pago:</p>
      </div>

      {/* Payment Method Selector - Logos Side by Side */}
      <div className="flex justify-center items-center gap-6 sm:gap-10">
        {/* Yape Button */}
        <button
          onClick={() => setMethod('YAPE')}
          className={`group relative flex flex-col items-center gap-3 transition-all duration-300 outline-none ${
            method === 'YAPE' 
              ? 'transform scale-110 opacity-100 grayscale-0' 
              : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105'
          }`}
          aria-label="Pagar con Yape"
          aria-pressed={method === 'YAPE'}
        >
          <div className="w-24 h-24 rounded-3xl bg-[#742284] flex items-center justify-center shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
             <span className="text-white font-bold text-3xl italic">Yape</span>
          </div>
          
          {/* Active Indicator */}
          <div className={`w-2 h-2 rounded-full bg-[#742284] transition-opacity duration-300 ${method === 'YAPE' ? 'opacity-100' : 'opacity-0'}`} />

          {/* Tooltip */}
          <div className="absolute bottom-[calc(100%)] left-1/2 -translate-x-1/2 w-48 p-2 mb-2 bg-gray-800 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            Yape es una billetera digital del BCP.
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </button>

        {/* Plin Button */}
        <button
          onClick={() => setMethod('PLIN')}
          className={`group relative flex flex-col items-center gap-3 transition-all duration-300 outline-none ${
            method === 'PLIN' 
              ? 'transform scale-110 opacity-100 grayscale-0' 
              : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105'
          }`}
          aria-label="Pagar con Plin"
          aria-pressed={method === 'PLIN'}
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#00E0FF] to-[#0099FF] flex items-center justify-center shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
             <span className="text-white font-bold text-3xl tracking-tight">plin</span>
          </div>

          {/* Active Indicator */}
          <div className={`w-2 h-2 rounded-full bg-[#00C8FA] transition-opacity duration-300 ${method === 'PLIN' ? 'opacity-100' : 'opacity-0'}`} />

          {/* Tooltip */}
          <div className="absolute bottom-[calc(100%)] left-1/2 -translate-x-1/2 w-48 p-2 mb-2 bg-gray-800 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            Plin es una funcionalidad de pagos interbancarios.
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </button>
      </div>

      <div className="flex flex-col items-center gap-8 py-4">
        
        {/* Amount */}
        <div className="text-center space-y-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Total a pagar</p>
            <p className="text-5xl font-bold text-gray-900">S/ 60.00</p>
            <p className="text-sm text-gray-400">($15 USD aprox)</p>
        </div>

        {/* Account Details - Flat */}
        <div className="w-full space-y-6">
             <div className="flex flex-col items-center gap-2">
                <span className="text-gray-400 text-sm uppercase tracking-wide">Número de celular</span>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-3 text-2xl font-mono font-bold hover:text-blue-600 transition-colors relative"
                  aria-label="Copiar número de teléfono"
                >
                    {phoneNumber}
                    <div className="relative w-6 h-6">
                      <Check className={`w-6 h-6 text-green-500 absolute top-0 left-0 transition-all duration-300 transform ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                      <Copy className={`w-6 h-6 text-gray-300 absolute top-0 left-0 transition-all duration-300 transform ${copied ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
                    </div>
                </button>
            </div>
             <div className="flex flex-col items-center gap-1">
                <span className="text-gray-400 text-sm uppercase tracking-wide">Titular</span>
                <span className="text-xl font-medium text-gray-800">Juan Pérez</span>
            </div>
        </div>
      </div>

      <div className="space-y-4">
        <a 
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            block w-full text-white font-bold py-4 px-6 rounded-lg 
            transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-95
            text-lg shadow-sm
            ${method === 'YAPE' ? 'bg-[#742284] hover:bg-[#5e1b6b] active:bg-[#4a1554]' : 'bg-[#00C8FA] hover:bg-[#00a3cc] active:bg-[#007f9f]'}
          `}
        >
          {method === 'YAPE' ? 'Yapear ahora' : 'Plinear ahora'}
        </a>
        <p className="text-xs text-gray-400 px-8 leading-relaxed">
            Al hacer clic serás redirigido a WhatsApp para validar tu pago y recibir tu acceso.
        </p>
      </div>
    </div>
  );
};