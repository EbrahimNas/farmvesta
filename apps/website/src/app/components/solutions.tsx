import { SolutionCard } from "../ui/SolutionCard"

export default function Solutions() {
    return (
        <div className="m-auto max-w-6xl px-6 max-sm:px-3">
            <div className="flex justify-center mb-8">
                <h3 className="text-2xl md:text-3xl font-medium border-l-4 border-[#6da446] pl-3">Our Solutions</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-8 max-sm:flex-col">
                <SolutionCard 
                  logo="/favicon.png" 
                  productName="Manager" 
                  illustration="/icons/manager icon.png" 
                  description="A smart farm management system that helps farmers track inventory, manage operations, and optimize productivity with ease." 
                  buttonText="Explore Manager" 
                  buttonLink="/">
                </SolutionCard>

                <SolutionCard 
                  logo="/favicon.png" 
                  productName="Hub" 
                  illustration="/icons/hub icon.png" 
                  description="A vibrant online community where farmers connect, share insights, and collaborate on industry trends and innovations." 
                  buttonText="Explore Hub" 
                  buttonLink="/">
                </SolutionCard>

                <SolutionCard 
                  logo="/favicon.png" 
                  productName="Market" 
                  illustration="/icons/market icon.png" 
                  description="A digital marketplace that links farmers directly to consumers, material suppliers, and service providers, ensuring seamless trade and access to essential resources." 
                  buttonText="Explore Market" 
                  buttonLink="/">
                </SolutionCard>
            </div>
        </div>
    )
};