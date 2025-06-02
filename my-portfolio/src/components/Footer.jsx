export default function Footer() {
  return (
    <footer id="contact" className="py-6 text-center border-t border-gray-300 dark:border-gray-700 mt-12">
      <p className="text-sm">© {new Date().getFullYear()} Shivam Taneja</p>
      <div className="mt-2 flex justify-center gap-4 text-sm">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:youremail@example.com" className="hover:underline">
          Email
        </a>
      </div>
    </footer>
  )
}
