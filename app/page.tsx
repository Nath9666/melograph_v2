import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}
