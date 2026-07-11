import { FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { experience } from '@/data/profile'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Experience" title="Where the work happened." />

        <div className="mt-16 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-purple)] to-transparent" />

          {experience.map((job, i) => (
            <Reveal key={job.company + i} delay={i * 0.1} className="relative pl-14 pb-4">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full glass flex items-center justify-center border border-[var(--color-primary)]/40">
                <FiBriefcase className="text-[var(--color-accent)]" size={16} />
              </div>

              <div className="glass rounded-2xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-xl">{job.role}</h3>
                  <span className="font-mono text-xs text-[var(--color-accent)]">{job.duration}</span>
                </div>
                <div className="mt-1 text-[var(--color-muted)] text-sm">
                  {job.company} · {job.location}
                </div>

                <ul className="mt-5 space-y-3">
                  {job.points.map((p, pi) => (
                    <li key={pi} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={15} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
