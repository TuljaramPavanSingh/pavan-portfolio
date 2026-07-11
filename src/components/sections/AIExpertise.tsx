import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { aiExpertise } from '@/data/profile'

export default function AIExpertise() {
  return (
    <section id="ai-expertise" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="AI × MERN"
          title="Full-stack, with a model in the loop."
          description="I don't treat AI as a separate specialty bolted onto a web app — the API call, the UI that renders it, and the data layer underneath are designed together."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiExpertise.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <h3 className="font-display font-semibold text-lg relative">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed relative">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
