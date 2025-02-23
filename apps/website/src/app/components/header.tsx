import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-[#282828]/90 border-b-[1px] border-[#6da446] z-50">
            <div className="flex max-w-6xl m-auto my-1 sm:my-1.5 px-6 py-1 max-sm:px-3 items-center">
                {/* Desktop Logo */}
                <div className="hidden sm:block flex-grow">
                    <Link href="/">
                        <Image 
                            src="/FarmVesta logo1.png" 
                            alt="FarmVesta Logo"
                            width={150}
                            height={760}
                        />
                    </Link>
                </div>
                
                {/* Mobile Logo */}
                <div className="sm:hidden flex-grow">
                    <Link href="/">
                        <Image 
                            src="/favicon.png"
                            alt="FarmVesta Logo"
                            width={50}
                            height={760}
                        />
                    </Link>
                </div>
                
                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-7 text-sm max-sm:space-x-4 items-center">
                        <li className="hover:text-[#83c746]">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-[#83c746]">
                            <Link href="/about">About us</Link>
                        </li>
                        <li className="hover:text-[#83c746]">
                            <Link href="/">Blog</Link>
                        </li>
                        <li className="rounded-2xl bg-[#6da446] py-1 px-3 text-white hover:bg-[#83c746] transition-colors">
                            <Link href="/">
                               Contact us
                            </Link>
                        </li>
                        
                        {/*<li>
                            <Button className="rounded-2xl bg-[#6da446] py-1 px-3 text-white hover:bg-[#83c746] transition-colors" appName="FarmVesta">
                                Contact us
                            </Button>
                        </li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
}