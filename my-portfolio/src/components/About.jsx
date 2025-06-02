export default function About() {
  return (
    <section id="about" className="w-full py-12 bg-white dark:bg-gray-950">
      <div className="max-w-4xl px-4 md:px-8 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">About Me</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 text-base">
          <li>
            Full-stack engineer with a focus on AI/ML — experienced with PyTorch, Numpy, Pandas, Node.js, React, and AWS.
          </li>
          <li>
            Earned top <strong>7% (Bronze Medal)</strong> in Kaggle’s LLM Science Exam and top <strong>9%</strong> in PII Detection Challenge.
          </li>
          <li>
            <strong>ICPC 2023 Finalist</strong> — Kanpur & Chennai regionals, ranked <strong>125</strong> in India prelims.
          </li>
          <li>
            Built Gen AI solutions at J.P. Morgan and led NLP-focused research at Samsung R&D.
          </li>
          <li className="whitespace-nowrap">
            Outside of tech, I’m into MMA, learning Japanese, playing music, exploring options trading, and going go-karting 🏎️.
          </li>
        </ul>
      </div>
    </section>

  )
}
