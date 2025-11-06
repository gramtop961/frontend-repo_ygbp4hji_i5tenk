import { useState, useEffect } from 'react'
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react'

function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-md border border-transparent p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <li>
        <a className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" href="#services">
          Services
        </a>
      </li>
      <li>
        <a className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/70">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:dark:bg-gray-900 focus:text-blue-600 dark:focus:text-cyan-400 px-3 py-1 rounded">
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold">
          <Rocket className="h-5 w-5 text-cyan-600" />
          <span className="text-gray-900 dark:text-gray-100">NGTechStack</span>
        </a>
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-3 lg:hidden">
          <NavLinks />
        </div>
      )}
    </header>
  )
}
