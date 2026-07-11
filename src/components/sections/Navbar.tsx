import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? 'glass' : ''
          }`}
        >
          <button
            onClick={() => goTo('hero')}
            className="font-display font-bold text-lg tracking-tight focus-ring rounded"
          >
            Pavan<span className="text-gradient">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="text-sm text-[var(--color-muted)] hover:text-white transition-colors focus-ring rounded"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="text-sm px-4 py-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors focus-ring"
            >
              Resume
            </a>
            <button
              onClick={() => goTo('contact')}
              className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] hover:opacity-90 transition-opacity focus-ring"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden text-2xl w-8 h-8 flex items-center justify-center focus-ring rounded"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative w-5 h-4 block">
              <span className={`absolute left-0 top-0 w-5 h-[1.5px] bg-white transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`absolute left-0 top-[7px] w-5 h-[1.5px] bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] w-5 h-[1.5px] bg-white transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </span>
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-2"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="text-left py-2 text-sm text-[var(--color-muted)] hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 text-center text-sm px-4 py-2 rounded-lg border border-[var(--color-border)]"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
