import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Nav />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
