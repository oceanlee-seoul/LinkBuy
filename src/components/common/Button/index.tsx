import React from 'react';
import { buttonBaseStyle, buttonVariants } from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'destructive';
  width?: number | string;
  height?: number | string;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    disabled,
    variant = 'primary',
    width = '100%',
    height = '100%',
    ...buttonProps
  } = props;

  return (
    <button
      className={`${buttonBaseStyle} ${buttonVariants[variant]}`}
      disabled={disabled}
      {...buttonProps}
      style={{ width, height }}
    >
      {children}
    </button>
  );
}
