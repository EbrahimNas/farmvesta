import { customers } from "../lib/placeholder-data";
import Image from "next/image";

export default function Partners() {
    return (
        <div className="bg-[#fafafa] dark:bg-[#2e2e2e]">
            <div className="m-auto max-w-6xl p-6 max-sm:px-3">
            <div className="flex justify-center mb-6">
              <h3 className="text-2xl md:text-3xl font-medium border-r-4 border-[#6da446] pr-3">Our Partners</h3>
            </div>

            <div className="flex flex-wrap items-center p-4 lg:p-8 bg-[#ffffff] dark:bg-[#282828] rounded-3xl justify-center gap-4 lg:gap-8">
                {customers.map((partner) => (
                    <Image 
                    key={partner.id}
                    src={partner.image_url} 
                    alt={`${partner.name} Logo`}
                    width={150}
                    height={200}
                    className="rounded-2xl"
                    />

                
                ))}
            </div>
            </div>
           
        </div>
    )
}