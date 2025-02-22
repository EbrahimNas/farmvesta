import Header from "./components/header";
import Banner from "./components/banner";
import Solutions from "./components/solutions";
import Partners from "./components/partners";

export default function Page() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="pt-[75px] sm:pt-[60px]">
        <Banner />
      </div>
      <div className="my-8">
        <Solutions />
      </div>
      <div className="my-8">
        <Partners />
      </div>
    </div>
  );
}
