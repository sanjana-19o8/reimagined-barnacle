import { navItems } from "@/data";
import Hero from "@/components/hero";
import { Grid } from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar"
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
