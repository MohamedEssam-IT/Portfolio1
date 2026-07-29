import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { BackToTop } from '@/components/layout/BackToTop';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { PrintResume } from '@/components/PrintResume';
import { useTheme } from '@/hooks/useTheme';

export default function App() {
  const theme = useTheme();

  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />

      <div className="no-print">
        <Navbar theme={theme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>

      <PrintResume />
    </div>
  );
}
