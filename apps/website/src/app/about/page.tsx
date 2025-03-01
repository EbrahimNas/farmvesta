import Footer from "../components/footer";
import { InfoCard } from "../ui/infoCard";
import { aboutPageData } from "../lib/placeholder-data";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div>
      <div className="my-24 m-auto max-w-6xl px-6 max-sm:px-3">
        <div className="flex justify-center mb-8">
          <h3 className="text-2xl md:text-3xl font-medium border-l-4 border-[#6da446] pl-3">About Us</h3>
        </div>

        {/* Dynamically generate InfoCards */}
        {aboutPageData.map((section, index) => (
          <InfoCard 
            key={index} 
            title={section.title} 
            content={section.content} 
            content2={section.content2} 
            content3={section.content3} 
            reverse={section.reverse} 
            italic={section.italic} 
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
