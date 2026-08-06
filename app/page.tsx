import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main id="top" className="relative flex-1">
      <Nav />
      <Hero />

      {projects.map((project, i) => (
        <ProjectSection key={project.slug} project={project} index={i} />
      ))}

      <About />
      <Contact />
    </main>
  );
}
