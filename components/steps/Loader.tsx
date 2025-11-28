import React, { useEffect } from 'react';
import { Search } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md animate-pulse">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gray-100 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-blue-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
        <Search className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <h3 className="text-xl font-semibold text-gray-700">
        Buscando promociones disponibles...
      </h3>
    </div>
  );
};