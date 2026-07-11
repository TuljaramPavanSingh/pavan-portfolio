import { FiMessageSquare } from 'react-icons/fi'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { testimonials } from '@/data/profile'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36 bg-[var(--color-bg-soft)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What Collaborators Say"
          title="Feedback from the room."
          description="Placeholder quotes, styled the way real testimonials will look once collected — swap the copy in src/data/profile.ts."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="glass rounded-2xl p-7 h-full flex flex-col">
                <FiMessageSquare className="text-[var(--color-accent)]" size={20} />
                <p className="mt-4 text-sm text-white/85 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="font-mono text-xs text-[var(--color-muted)] mt-0.5">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
