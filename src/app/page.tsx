import About from "@/components/About";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FAQ";
import Services from "@/components/Services";
import Start from "@/components/Start";
import Teams from "@/components/Teams";
import Image from "next/image";

export default function Home() {
  return (
    <>

     <Start/>
    <About/>
    <Services/>
    <Teams/>
        <FaqSection/>
        <Contact/>
    </>
   
  );
}
