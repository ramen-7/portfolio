import { experience } from '../data/experience';

export default function Experience() {
  return (
     <>
      <h3 className="text-3xl font-semibold mb-6">Experience</h3>
      <div className="grid gap-6">
        {experience.map((exp, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h4 className="text-xl font-bold">{exp.title}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.period} • {exp.location}
              </span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.stack.map((tech, j) => (
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

