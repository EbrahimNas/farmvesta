import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Banner() {
    return (
        <div className=" m-auto max-w-6xl px-6 max-sm:px-0">
            <div className="rounded-xl bg-[url('/bannerbg1.png')] flex items-end bg-cover bg-center h-[500px] lg:h-[700px]">
                <div>
                  <div className="p-6 sm:p-10 flex justify-between">
                      <div className="md:max-w-[70%]">
                          <div className="backdrop-blur-sm bg-black/30 border border-gray-400 rounded-xl shadow-md inline-block px-4 py-1 mb-2 sm:mb-6">
                          <p className=" text-white text-sm">
                             Sustainable Farming Tech
                          </p>
                          </div>
                          

                          <h2 className="text-white text-2xl font-medium sm:text-4xl mb-0 sm:mb-6">
                             Empowering farmers with <br /> innovation & community
                          </h2>

                          <div className=" max-w-[70%] max-sm:hidden">
                          <p className=" text-white text-sm">
                            From smart farm management to sustainable practices. Join us in transforming agriculture for a more sustainable and smarter future!
                          </p>
                          </div>

                          <Link
                             href="/"
                             className="inline-flex items-center p-1 gap-2 rounded-3xl border border-gray-400 bg-[#6da446] text-sm font-medium text-white transition-colors hover:bg-[#83c746] mt-3 sm:mt-6"
                            >
                             <span className="px-3">Get Started</span> 
                             <div className="bg-black rounded-full p-1">
                               <ArrowRightIcon className="w-5 md:w-5" />
                             </div>
                           </Link>
                       </div>

                       <div className=" self-end max-w-[30%] max-lg:hidden">
                       <div className="backdrop-blur-sm bg-black/30 border border-gray-400 text-white text-sm p-4 rounded-2xl">
                          <p className="pb-2">
                             • Our Mission
                          </p>
                          <p className="">
                             To empower farmers by delivering innovative digital solutions that streamline farm management, foster vibrant communities, and connect local producers directly with consumers and essential services...
                          </p>
                          <Link
                             href="/"
                             className="inline-flex items-center py-1 gap-2 border-b-2 border-white border-opacity-50"
                            >
                             <span className="">Learn More</span> 
                             <ArrowRightIcon className="w-5 md:w-5" />
                           </Link>
                       </div>
                       </div>
                       
                  </div>
                </div>
            </div>
        </div>
    );
}