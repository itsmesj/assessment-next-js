import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Travel from "./Travel";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Travel/>
    </div>
  );
}
