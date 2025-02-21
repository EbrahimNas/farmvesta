"use client";

import Link from "next/link";
import { ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ButtonraProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string; // Optional link to handle React Router navigation
}

export const Buttonra = ({ children, onClick, className, href }: ButtonraProps) => {
  const baseStyles =
    'inline-flex items-center p-1 gap-2 rounded-3xl bg-[#6da446]/50 text-sm font-medium text-white transition-all hover:bg-[#83c746] hover:gap-5 mt-3 sm:mt-6 ' +
    (className || '');

  const content = (
    <>
      <span className="px-3">{children}</span>
      <div className="bg-black rounded-full p-1">
        <ArrowRightIcon className="w-5 md:w-5" />
      </div>
    </>
  );

  return href ? (
    <Link href={href} className={baseStyles}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
};
