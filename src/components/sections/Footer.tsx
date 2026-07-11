import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '@/data/profile'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-[var(--color-border)] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="font-display font-bold text-lg">
              Pavan<span className="text-gradient">.</span>
            </div>
            <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">
              Full-Stack MERN Developer building production web apps with an AI edge, from Hyderabad.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={profile.github} className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors focus-ring" aria-label="GitHub"><FiGithub size={14} /></a>
              <a href={profile.linkedin} className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors focus-ring" aria-label="LinkedIn"><FiLinkedin size={14} /></a>
              <a href={`mailto:${profile.email}`} className="w-9 h-9 rounded-lg border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors focus-ring" aria-label="Email"><FiMail size={14} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 content-start">
            {links.map((l) => (
              <button key={l.id} onClick={() => goTo(l.id)} className="text-left text-sm text-[var(--color-muted)] hover:text-white transition-colors focus-ring rounded">
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)] font-mono">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-muted)] hover:text-white transition-colors focus-ring rounded"
          >
            Back to top <FiArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
