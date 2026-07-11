import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { education } from '@/data/profile'

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Education" title="Foundation." />

        <div className="mt-14 space-y-5">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delay={i * 0.08}>
              <div className="glass rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center shrink-0">
                  <FiBookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">{ed.degree}</h3>
                  <p className="text-sm text-[var(--color-muted)] mt-1">{ed.school}</p>
                  <div className="mt-2 flex gap-4 font-mono text-xs text-[var(--color-accent)]">
                    <span>{ed.duration}</span>
                    <span>{ed.cgpa}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
