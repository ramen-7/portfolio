export default function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="p-4 flex justify-between items-center shadow-md bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl font-bold">Shivam Taneja</h1>
      <ul className="flex gap-6 items-center text-sm">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li>
          <button
            onClick={toggleTheme}
            className="ml-2 text-lg px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  )
}
