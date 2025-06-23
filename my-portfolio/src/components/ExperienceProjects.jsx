import Experience from './Experience';
import Projects from './Projects';

export default function ExperienceProjects() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </section>
  );
}
