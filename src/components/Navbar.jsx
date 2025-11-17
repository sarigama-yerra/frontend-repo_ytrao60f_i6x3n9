import { useState } from 'react'
import { Menu, X, Code, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <motion.span
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 shadow-md"
              >
                <Code className="h-5 w-5 text-white" />
              </motion.span>
              <Sparkles className="absolute -right-2 -bottom-1 h-4 w-4 text-amber-400" />
            </div>
            <span className="font-semibold tracking-wide text-slate-900">
              Aegean Dev
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-medium px-4 py-2 shadow hover:shadow-lg transition-shadow">
              Start a Project
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-black/5">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gold/20 bg-white/80 backdrop-blur"
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-slate-800">
                    {n.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="block rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 text-center text-slate-900 font-medium px-4 py-2 shadow">
                  Start a Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
