import React from 'react';
import { QrCode, Copy } from 'lucide-react';

export const Payment: React.FC = () => {
  return (
    <div className="space-y-8 w-full max-w-md text-center animate-fade-in-up">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Completa tu inscripción</h2>
        <p className="text-gray-500">Envía el comprobante para recibir tu acceso inmediato.</p>
      </div>

      <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 flex flex-col items-center gap-6">
        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform -rotate-6">
            Yape
        </div>
        
        <div className="space-y-1">
            <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Monto a pagar</p>
            <p className="text-4xl font-bold text-gray-900">S/ 60.00</p>
            <p className="text-xs text-gray-400">($15 USD aprox)</p>
        </div>

        <div className="w-full h-px bg-purple-200"></div>

        <div className="w-full space-y-4">
             <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                <span className="text-gray-500 text-sm">Número</span>
                <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-lg">987 654 321</span>
                    <Copy className="w-4 h-4 text-purple-600 cursor-pointer" />
                </div>
            </div>
             <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                <span className="text-gray-500 text-sm">Titular</span>
                <span className="font-semibold text-gray-800">Juan Pérez</span>
            </div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        Una vez realizado el pago, envía la captura al WhatsApp.
      </div>

      <a 
        href="#"
        className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg"
      >
        Enviar Comprobante
      </a>
    </div>
  );
};