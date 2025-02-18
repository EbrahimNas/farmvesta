"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string; // Optional, for flexibility
  onClick?: () => void; // Allow parent to define behavior
}

export const Button = ({ children, className, appName, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick ? onClick : () => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
