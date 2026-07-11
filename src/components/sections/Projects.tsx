import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { projects, type Project } from '@/data/profile'

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div className="group relative glass rounded-2xl p-7 h-full flex flex-col hover:-translate-y-1.5 transition-transform duration-300">
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center font-display font-bold text-sm`}>
        {project.title.slice(0, 2).toUpperCase()}
      </div>
      <h3 className="mt-5 font-display font-semibold text-xl">{project.title}</h3>
      <div className="font-mono text-xs text-[var(--color-muted)] mt-1">{project.period}</div>
      <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((t) => (
          <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 text-white/70">
            {t}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 text-white/50">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
        <button onClick={onOpen} className="text-sm font-medium text-[var(--color-accent)] hover:underline focus-ring rounded">
          Case Study →
        </button>
        <div className="ml-auto flex gap-2">
          <a href={project.links.github} className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors focus-ring" aria-label={`${project.title} GitHub`}>
            <FiGithub size={14} />
          </a>
          <a href={project.links.demo} className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors focus-ring" aria-label={`${project.title} live demo`}>
            <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
      >
        <button onClick={onClose} className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors focus-ring" aria-label="Close case study">
          <FiX />
        </button>

        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accent} mb-5`} />
        <h3 className="font-display font-bold text-2xl">{project.title}</h3>
        <div className="font-mono text-xs text-[var(--color-accent)] mt-1">{project.period}</div>
        <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{project.description}</p>

        <div className="mt-6">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)]">Features</h4>
          <ul className="mt-3 space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="text-sm text-white/85 flex gap-2">
                <span className="text-[var(--color-accent)]">▹</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)]">Challenge</h4>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)]">Architecture</h4>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">{project.architecture}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/70">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex gap-3">
          <a href={project.links.github} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors text-sm focus-ring">
            <FiGithub /> View Code
          </a>
          <a href={project.links.demo} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] text-sm focus-ring">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-[var(--color-bg-soft)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects that shipped, not just prototypes."
          description="A mix of AI SaaS, animated product UI, and computer vision — the range I actually work across."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <ProjectCard project={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
