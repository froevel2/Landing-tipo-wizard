import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, fullWidth = true, className = '', ...props }) => {
  return (
    <button
      className={`
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800 
        text-white font-semibold py-4 px-6 rounded-lg 
        transition-all duration-200 ease-in-out transform hover:scale-[1.02]
        shadow-sm text-lg
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export const OutlineButton: React.FC<ButtonProps> = ({ children, fullWidth = true, className = '', ...props }) => {
    return (
      <button
        className={`
          bg-white hover:bg-gray-50
          border-2 border-blue-600 text-blue-600 font-semibold py-4 px-6 rounded-lg 
          transition-all duration-200 ease-in-out
          text-lg
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  };