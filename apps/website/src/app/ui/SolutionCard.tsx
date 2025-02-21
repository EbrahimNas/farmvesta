"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { Buttonra } from "../ui/buttonra";

interface SolutionCardProps {
  logo: string;
  productName: string;
  illustration: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  children?: ReactNode; // For adding custom content
  className?: string;
}

export const SolutionCard = ({
  logo,
  productName,
  illustration,
  description,
  buttonText,
  buttonLink,
  children,
  className,
}: SolutionCardProps) => {
  return (
    <div
      className={`flex flex-row md:flex-col items-center bg-[#fafafa] dark:bg-[#2e2e2e] border border-[#6da446]/20  hover:shadow-[#87ae6b65] hover:shadow-lg rounded-3xl p-4 md:p-6 text-center w-full max-w-6xl md:max-w-sm ${className}`}
    >
      
      <div className="">
          {/* Logo + Product Name */}
          <div className="flex flex-col md:flex-row items-center md:space-x-3">
              <Image src={logo} alt={`${productName} Logo`} width={40} height={40} />
              <p className="text-xl font-medium md:self-end">{productName}</p>
          </div>

          {/* Product Illustration */}
          <div className="mt-4">
             <Image
                 src={illustration}
                 alt={`${productName} Illustration`}
                 width={100}
                 height={200}
                 className="rounded-lg dark:invert mx-auto"
                />
           </div>
      </div>

      <div className="max-md:pl-10">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 md:mt-4">{description}</p>

          {/* Optional Extra Content */}
          {children && <div className="mt-2">{children}</div>}

          {/* CTA Button */}
          <div className="md:mt-6">
             <Buttonra href={buttonLink}>{buttonText}</Buttonra>
          </div>
      </div>
      
    </div>
  );
};
