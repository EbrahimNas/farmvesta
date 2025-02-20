import Header from "./ui/header";
import Banner from "./ui/banner";

export default function Page() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="pt-[75px] sm:pt-[60px]">
        <Banner />
      </div>
    </div>
  );
}
