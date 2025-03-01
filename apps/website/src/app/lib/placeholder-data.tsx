import { Customer, Blog, AboutSection } from "./definitions";

export const customers: Customer[] = [
  {
    id: 1,
    name: 'Firdaus Integrated Farm',
    email: "",
    image_url: "/partners/firdausfarm1.png"
  },
  {
    id: 2,
    name: 'Broadview Farm',
    email: '',
    image_url: '/partners/broadview.png',
  },
  {
    id: 3,
    name: 'TSC Farm',
    email: '',
    image_url: '/partners/tsc.png',
  },
  {
    id: 4,
    name: 'Broadview Farm',
    email: '',
    image_url: '/partners/firdausfarm.png',
  },
];

export const aboutPageData: AboutSection[] = [
  {
    title: "Who We Are at FarmVesta",
    content:
      "Farmvesta is more than just a platform, it’s a movement designed to transform the agricultural landscape. We are dedicated to bridging the gap between farmers, consumers, and industry service providers through seamless digital solutions. By leveraging technology, we empower farmers to efficiently manage their operations, collaborate with peers, and access new markets with ease.",
    reverse: true,
  },
  {
    title: "Our Mission",
    content:
      '"To empower farmers by delivering innovative digital solutions that streamline farm management, foster vibrant communities, and connect local producers directly with consumers and essential services."',
    italic: true,
  },
  {
    title: "Our Vision",
    content:
      "We envision a world where every farmer, whether managing crops, livestock, or mixed farming, has the tools to succeed in a rapidly evolving agricultural industry. A future where technology simplifies farm operations, strengthens communities, and creates a thriving ecosystem for food production and sustainability.",
    reverse: true,
  },
  {
    title: "Why Farmvesta?",
    content:
      "• Smart & Efficient Farming – With Farmvesta Manager, farmers can track inventory, monitor activities, and optimize productivity with a few clicks.",
    content2:
      "• A Stronger Farming Community – Through FV Hub, we’re building a network where farmers can share knowledge, collaborate, and support one another.",
    content3:
      "• Direct Market Access – FV Market connects farmers directly with consumers, suppliers, and service providers, eliminating unnecessary middlemen and boosting profits.",
  },
];


export const placeholderBlogs: Blog[] = [
  {
    id: "1",
    title: "The Nigerian Government’s Push for Digital Technology in Agriculture",
    description: "The Nigerian government is pushing for digital innovation in agriculture, integrating smart technologies to improve both livestock and crop production.",
    author: "FarmVesta",
    date: "Feb 20, 2025",
    image: "/blog/blog1.png",
    slug: "digital-tech-in-agriculture",
    content: `The Nigerian government is actively encouraging the integration of digital technology in agriculture to boost productivity, enhance food security, and modernize farming practices. With the country’s population projected to exceed 400 million by 2050, the demand for animal-source food and crops is set to rise significantly. To meet this demand, digital solutions such as smart farm management systems, precision farming, and data-driven livestock tracking are being promoted.`,
    content2:`Key initiatives include investment in digital infrastructure for farmers, improved access to mobile-based extension services, and financial incentives for agritech startups. The use of real-time data analytics to monitor livestock health and crop performance has the potential to revolutionize Nigeria’s agricultural sector. As farmers embrace these technologies, Nigeria moves closer to achieving sustainable food production and economic growth.`,
  },
  {
    id: "2",
    title: "The Future of Sustainable Farming in Nigeria",
    description: "Sustainable farming is no longer an option but a necessity. This article explores how Nigeria is adapting modern solutions to ensure long-term agricultural productivity.",
    author: "FarmVesta",
    date: "Feb 18, 2025",
    image: "/blog/blog2.jpg",
    slug: "sustainable-farming",
    content: `Sustainable farming is at the heart of Nigeria’s agricultural transformation. The country’s livestock and crop sectors contribute significantly to food security, but challenges such as climate change, land degradation, and resource conflicts threaten productivity.`,
    content2:`To address these challenges, sustainable practices like rotational grazing, organic farming, and integrated crop-livestock systems are being encouraged. The government is also promoting the adoption of renewable energy in agriculture, including solar-powered irrigation and biogas production from animal waste.`,
    content3:`Public-private partnerships are playing a crucial role in financing sustainable agriculture projects, providing farmers with access to modern equipment, improved seeds, and alternative feed sources. As more farmers transition to sustainable practices, Nigeria is poised to create a resilient agricultural sector capable of feeding its growing population.`,
  },
  {
    id: "3",
    title: "Five Innovative Farming Technologies Transforming Agriculture in Nigeria",
    description: "Technology is reshaping how Nigerian farmers grow crops and raise livestock. Here are five game-changing innovations making an impact.",
    author: "FarmVesta",
    date: "Jan 31, 2025",
    image: "/blog/blog3.jpg",
    slug: "innovative-farming-tech",
    content: `Innovation is reshaping Nigeria’s agricultural landscape. With rapid advancements in technology, farmers are now equipped with tools that enhance productivity and efficiency. Here are five cutting-edge technologies making a difference:`,
    content2:`1. Precision Agriculture: GPS mapping and soil sensors allow farmers to optimize planting strategies, reduce waste, and increase yields.`,
    content3:`2. Smart Livestock Monitoring: Wearable devices and AI-driven analytics help track animal health, detect diseases early, and improve breeding programs.`,
    content4:` 3. Vertical Farming: Urban farmers are utilizing vertical farms to grow crops in controlled environments, reducing dependency on arable land.`,
    content5:`4. Drones for Agriculture: Drones are used for aerial surveying, pest control, and crop monitoring, saving time and resources.`,
    content6:`5. Blockchain for Supply Chain Transparency: Blockchain technology is improving traceability in the agricultural supply chain, ensuring fair pricing and reducing fraud.`,
    content7:`As these technologies become more accessible, Nigeria’s farmers stand to benefit from increased efficiency, reduced costs, and improved food security.`,
  },
  {
    id: "4",
    title: "Livestock and Crop Integration: The Key to a Thriving Agricultural Economy",
    description: "Sustainable farming is no longer an option but a necessity. This article explores how Nigeria is adapting modern solutions to ensure long-term agricultural productivity.",
    author: "FarmVesta",
    date: "May 31, 2024",
    image: "/blog/blog4.png",
    slug: "livestock-crop-integration",
    content: `For decades, Nigeria’s agriculture has been divided into separate livestock and crop farming systems. However, integrating these sectors can unlock significant benefits, including improved soil fertility, higher productivity, and better resource management.`,
    content2:`In integrated farms, crop residues are used as animal feed, while livestock manure enhances soil health. This cyclical approach reduces waste and maximizes farm outputs. Additionally, agroforestry—where trees, crops, and livestock coexist—has gained popularity as a sustainable farming model.`,
    content3:` Government policies are now focusing on supporting integrated agriculture by providing farmers with incentives to adopt mixed farming systems. As more farmers embrace this approach, Nigeria’s agricultural sector will become more resilient, ensuring long-term food security and economic stability.`,
  },
];


