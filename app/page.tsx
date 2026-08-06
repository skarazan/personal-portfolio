import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectSection from "@/components/ProjectSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main id="top" className="relative flex-1">
      <Nav />
      <Hero />
      <Experience />

      <div id="projects" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Projects
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {projects.map((project, i) => (
            <ProjectSection key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>

      <About />
      <Contact />
    </main>
  );
}
