export default function Hero() {
  return (
    <section className="w-full py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl px-4 md:px-8 mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Side – Avatar */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <img
            src="/Shivam.png"
            alt="Shivam Taneja"
            className="rounded-full shadow-xl object-cover w-36 h-36 lg:w-52 lg:h-52 mx-auto lg:mx-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="text-sm mt-3 text-gray-500 dark:text-gray-400 italic">
            Probably debugging something right now
          </div>
        </div>

        {/* Right Side – Text */}
        <div className="max-w-xl text-center lg:text-left">
          <div className="inline-block bg-gray-200 dark:bg-gray-800 text-sm px-4 py-1 rounded-full text-gray-700 dark:text-gray-300 mb-4 tracking-wide font-semibold">
            AI/ML Full Stack Engineer
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I build things that work — and sometimes think.
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            I love working with LLMs — from building RAGs and neural networks from scratch, to running models locally on my old gaming PC, or making this website with more help from ChatGPT than I care to admit.
          </p>
        </div>
      </div>
    </section>
  )
}
