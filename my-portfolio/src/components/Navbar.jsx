export default function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 p-4 border border-gray-300 rounded-2xl shadow-md backdrop-blur-md bg-white/80 dark:bg-gray-900/80 flex justify-between items-center">
      <h1 className="text-sm sm:text-lg font-bold">Shivam Taneja</h1>

      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 md:mt-0 text-xs md:text-md text-grey-700">
        <li><a href="mailto:23shivamtaneja@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-700">Email</a></li>
        <li><a href="https://www.linkedin.com/in/shivam-taneja200" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-700">LinkedIn</a></li>
        <li><a href="https://github.com/ramen-7" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-700">GitHub</a></li>
        <li><a href="https://codeforces.com/profile/ramentaneja" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-700">Codeforces</a></li>
        <li><a href="https://www.kaggle.com/shivamtaneja2304" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-700">Kaggle</a></li>
        <li><a href="https://leetcode.com/u/shivam_taneja/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-700">LeetCode</a></li>
        {/* <li>
          <button
            onClick={toggleTheme}
            className="ml-2 text-lg px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
