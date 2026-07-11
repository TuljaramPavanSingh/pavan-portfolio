import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { skills } from '@/data/profile'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-[var(--color-bg-soft)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit, honestly rated."
          description="Levels reflect production comfort, not just familiarity — the gap between the two is where most bugs live."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="font-display font-semibold text-lg mb-5">{group.category}</h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white/90">{item.name}</span>
                        <span className="font-mono text-xs text-[var(--color-muted)]">{item.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
