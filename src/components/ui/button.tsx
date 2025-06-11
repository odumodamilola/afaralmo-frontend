import React from 'react';
import type { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  iconLeft?: IconType;
  iconRight?: IconType;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center rounded-xl font-medium px-5 py-2 text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantStyles = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400',
  outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-400',
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  iconLeft: IconLeft,
  iconRight: IconRight,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {IconLeft && <IconLeft className="mr-2 text-base" />}
      {label}
      {IconRight && <IconRight className="ml-2 text-base" />}
    </button>
  );
};


