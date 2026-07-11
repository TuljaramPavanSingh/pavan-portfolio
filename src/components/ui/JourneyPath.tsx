import { motion, useScroll, useSpring } from 'framer-motion'

const stops = [
  { id: 'hero', label: 'Start' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

export default function JourneyPath() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.3 })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top horizontal progress for mobile */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 lg:hidden"
        style={{
          scaleX: progress,
          background: 'linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)',
        }}
      />

      {/* Vertical journey rail for desktop */}
      <div
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-0"
        aria-hidden="true"
      >
        <div className="relative h-[340px] w-px">
          <div className="absolute inset-0 bg-[var(--color-border)]" />
          <motion.div
            className="absolute top-0 left-0 w-px origin-top"
            style={{
              height: '100%',
              scaleY: progress,
              background: 'linear-gradient(180deg, #6366f1, #a855f7, #22d3ee)',
            }}
          />
          {stops.map((stop, i) => (
            <button
              key={stop.id}
              onClick={() => scrollTo(stop.id)}
              className="absolute -left-[5px] w-[11px] h-[11px] rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] hover:border-[var(--color-accent)] hover:scale-125 transition-all focus-ring group"
              style={{ top: `${(i / (stops.length - 1)) * 100}%`, transform: 'translateY(-50%)' }}
              aria-label={`Jump to ${stop.label}`}
            >
              <span className="absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-mono text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                {stop.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
