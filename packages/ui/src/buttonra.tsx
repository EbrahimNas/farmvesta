"use client";

import { Link } from 'react-router-dom'; // might not work.....
import { ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ButtonraProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  to?: string; // Optional link to handle React Router navigation
}

export const Buttonra = ({ children, onClick, className, to }: ButtonraProps) => {
  const baseStyles =
    'inline-flex items-center p-1 gap-2 rounded-3xl border border-gray-400 bg-[#6da446] text-sm font-medium text-white transition-all hover:bg-[#83c746] hover:gap-5 mt-3 sm:mt-6 ' +
    (className || '');

  const content = (
    <>
      <span className="px-3">{children}</span>
      <div className="bg-black rounded-full p-1">
        <ArrowRightIcon className="w-5 md:w-5" />
      </div>
    </>
  );

  return to ? (
    <Link to={to} className={baseStyles}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
};
