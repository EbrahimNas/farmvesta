import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/button";

export default function Header() {
    return (
        <header className="border-b-[1px] border-[#6da446]">
            <div>
                <div className="flex max-w-6xl m-auto mt-3 px-6 py-1 place-items-center max-sm:px-3">
                    <div className=" hidden grow sm:block">
                        <Image 
                        src={"/FarmVesta logo1.png"} 
                        alt={"FarmVesta Logo"}
                        width={150}
                        height={760}
                        className="" 
                        />
                    </div>

                    <div className="grow sm:hidden">
                        <Image 
                        src="/favicon.png"
                        alt="FarmVesta Logo"
                        width={50}
                        height={760}
                        className="" 
                        />
                    </div>

                    <div >
                        <ul className="flex space-x-7 text-sm items-center max-sm:space-x-4">
                            <li>
                              <Link href={'/'}>
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link href={'/'}>
                                About us
                              </Link>
                            </li>
                            <li>
                              <Link href={'/'}>
                                Blog
                              </Link>
                            </li>
                            <li>
                              <Button className="rounded-2xl bg-[#6da446] py-1 px-3 text-white hover:bg-[#83c746] transition-colors" appName={"FarmVesta"}>Contact us</Button>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}