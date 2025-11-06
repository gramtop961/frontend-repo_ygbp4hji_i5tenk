export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} NGTechStack. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#privacy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            Privacy
          </a>
          <a href="#imprint" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            Imprint
          </a>
        </nav>
      </div>
    </footer>
  )
}
