import Link from "next/link";
import { FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full border-t-[1px] border-[#6da446]">
            <div className="flex max-w-6xl m-auto my-1 sm:my-1.5 px-6 py-1 max-sm:px-3 items-center">
              <Link href="/" className="flex-grow hover:text-[#6da446]">© FarmVesta 2025</Link>

              <div className="flex space-x-4  max-sm:space-x-2">
                 <Link href='/'><FaXTwitter className="w-6 h-6 hover:text-[#6da446]" /></Link>
                 <Link href='/'><FaLinkedin  className="w-6 h-6 hover:text-[#6da446]" /></Link>
                 <Link href='/'><FaInstagram className="w-6 h-6 hover:text-[#6da446]" /></Link>
              </div>
            </div>
           

           
        </footer>
    )
}