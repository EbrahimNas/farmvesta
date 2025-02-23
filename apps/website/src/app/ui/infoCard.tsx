"use client";

interface InfoCardProps {
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  reverse?: boolean;
  italic?: boolean // If true, reverses the order
}

export const InfoCard = ({ title, content,content2, content3, reverse = false, italic= false }: InfoCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-8 mb-10 md:gap-16 p-6 
          rounded-3xl w-full max-w-6xl
        ${reverse ? "md:flex-row-reverse bg-[#ebebeb] dark:bg-[#363636]" : "md:flex-row"}`}
    >
      {/* Title Section */}
      <div className={`md:w-1/3 text-center md:text-left self-start border-l-4 border-[#6da446] pl-3
            ${reverse ? "md:text-right md:border-l-0 md:border-r-4 md:pr-4" : ""}`}>
        {title}
      </div>

      {/* Content Section */}
      <div className={`text-gray-600 dark:text-gray-300 text-lg md:w-2/3
            ${italic ? "italic" : ""}`}>
                <ul className="space-y-3">
                    <li>
                      {content}
                    </li>
                    <li>
                      {content2}
                    </li>
                    <li>
                      {content3}
                    </li>
                </ul>
      </div>
    </div>
  );
};
