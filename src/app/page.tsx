import About from "@/components/About";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FAQ";
import Services from "@/components/Services";
import Start from "@/components/Start";
import Team from "@/components/Team";
import WhyChoseUs from "@/components/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>

     <Start/>
    <About/>
    <Services limit={6}/>
    <WhyChoseUs/>
    <Team limit={6}/>
        <FaqSection/>
        <Contact/>
    </>
   
  );
}
