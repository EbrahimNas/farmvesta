import Image from "next/image";
import Link from "next/link";
import Header from "./ui/header";
import Banner from "./ui/banner";

export default function Page() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="mt-3">
        <Banner />
      </div>
    </div>
  );
}
