import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <h3 className="text-3xl font-semibold mb-6 underline">Projects</h3>
      <div className="grid gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 shadow hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h4 className="text-xl font-bold">{proj.title}</h4>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-300 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-200"
                >
                  View
                </a>
              )}
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {proj.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {proj.stack.map((tech, j) => (
                <span
                  key={j}
                  className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
