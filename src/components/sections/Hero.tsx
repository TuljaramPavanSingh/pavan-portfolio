import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { profile } from '@/data/profile'
import { useTypewriter } from '@/hooks/useTypewriter'
import profileImg from '@/assets/images/profile.jpg'

const ParticleField = lazy(() => import('@/components/ui/ParticleField'))

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />
      <div className="absolute inset-0 -z-20 noise" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {profile.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold leading-[1.02] text-5xl sm:text-6xl lg:text-7xl tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-9 font-display text-xl sm:text-2xl text-gradient font-semibold"
          >
            {typed}
            <span className="inline-block w-[2px] h-6 bg-[var(--color-accent)] ml-1 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-[var(--color-muted)] text-lg max-w-xl leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-muted)]"
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiMail /> {profile.email}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-shadow focus-ring"
            >
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" /> Download Resume
            </a>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors focus-ring"
            >
              View Work
            </button>
            <div className="flex items-center gap-2 ml-1">
              <a href={profile.github} target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors focus-ring" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors focus-ring" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-accent)] opacity-30 blur-2xl" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass glow-border">
              <img
                src={profileImg}
                alt={`${profile.name} — portrait`}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-6 glass rounded-xl px-4 py-3"
            >
              <div className="font-mono text-xs text-[var(--color-muted)]">Currently</div>
              <div className="text-sm font-medium">Full-Stack Dev @ Ctruh</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-6 glass rounded-xl px-4 py-3"
            >
              <div className="text-sm font-medium">1+ yr production</div>
              <div className="font-mono text-xs text-[var(--color-muted)]">MERN · AI</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-muted)] hover:text-white transition-colors focus-ring rounded-full p-2"
        aria-label="Scroll to About"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}
