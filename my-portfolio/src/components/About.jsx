export default function About() {
  return (
    <section id="about" className="w-full py-12 bg-white dark:bg-gray-950">
      <div className="max-w-4xl px-4 md:px-8 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">About Me</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 text-base">
          <li>
            <strong>Ranked top 7%</strong> (Bronze) in Kaggle’s LLM Science Exam and <strong>top 9%</strong> (Bronze) in PII Detection — with RAG, FAISS, and DeBERTa ensemble pipelines.
          </li>
          <li>
            Delivered production-grade GenAI tools at <strong>J.P. Morgan</strong> and during my internship at <strong>Samsung R&D</strong>.
          </li>
          <li>
            Finalist at <strong>ICPC 2023</strong> (Kanpur & Chennai), placing <strong>125th in India</strong> in regionals — also scored <strong>1800+</strong> on LeetCode.
          </li>
          <li>
            Full-stack builder fluent in <strong>PyTorch, CUDA, Numpy, Python, React, Node.js, MongoDB, AWS</strong> — crafting fast, scalable software from backend APIs to frontend UIs.
          </li>
          <li>
            Off the keyboard: I’m sparring in MMA, learning Japanese, jamming metal music on my acoustic guitar, studying options trading, and occasionally going go-karting 🏎️.
          </li>
        </ul>
      </div>
    </section>
  );
}
