import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* Ambient background layer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
