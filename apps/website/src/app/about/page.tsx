import Header from "../components/header";
import Footer from "../components/footer";
import { InfoCard } from "../ui/infoCard";

export default function Page() {
  return (
    <div className="">
      <div>
        <Header/>
      </div>
      <div className="my-24 m-auto max-w-6xl px-6 max-sm:px-3">
        <InfoCard 
          title="Who We Are at FarmVesta" 
          content="Farmvesta is more than just a platform, it’s a movement designed to transform the agricultural landscape. 
          We are dedicated to bridging the gap between farmers, consumers, and industry service providers through seamless digital solutions. 
          By leveraging technology, we empower farmers to efficiently manage their operations, collaborate with peers, and access new markets with ease."
          reverse>
        </InfoCard>
        <InfoCard 
          title="Our Mission" 
          content={`"To empower farmers by delivering innovative digital solutions that streamline farm management, 
          foster vibrant communities, and connect local producers directly with consumers and essential services."`}
          italic>
        </InfoCard>
        <InfoCard 
          title="Our Vision" 
          content="We envision a world where every farmer, whether managing crops, livestock, or mixed farming has the tools to succeed in a rapidly evolving agricultural industry. 
          A future where technology simplifies farm operations, strengthens communities, and creates a thriving ecosystem for food production and sustainability."
          reverse>
        </InfoCard>
        <InfoCard 
          title="Why Farmvesta?" 
          content="• Smart & Efficient Farming – With Farmvesta Manager, farmers can track inventory, monitor activities, and optimize productivity with a few clicks."
          content2='• A Stronger Farming Community – Through FV Hub, we’re building a network where farmers can share knowledge, collaborate, and support one another.'
          content3="• Direct Market Access – FV Market connects farmers directly with consumers, suppliers, and service providers, eliminating unnecessary middlemen and boosting profits.">
        </InfoCard>
        {/*<InfoCard 
          title="Our Commitment" 
          content="At Farmvesta, we are committed to making agriculture more efficient, profitable, and sustainable. Our platform is built with farmers in mind, 
          ensuring that technology serves them in the best possible way—by simplifying their work, increasing their earnings, and securing their future."
          reverse>
        </InfoCard>*/}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
