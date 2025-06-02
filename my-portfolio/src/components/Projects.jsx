import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.stack.map((tech, j) => (
                <span key={j} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
