import { FiCode, FiCpu, FiLayers, FiTarget } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { profile, stats } from "@/data/profile";
import Counter from "@/components/ui/Counter";

const pillars = [
  {
    icon: FiCode,
    title: "Production-first",
    desc: "Every component I ship has been through real users, real bug triage, and a real Agile release cycle — not just a sandbox.",
  },
  {
    icon: FiLayers,
    title: "Systems, not screens",
    desc: "I design component libraries and design systems so a product stays consistent as it grows past its first ten screens.",
  },
  {
    icon: FiCpu,
    title: "AI-literate",
    desc: "Comfortable on both sides of the stack that matters now — the React app and the model behind it.",
  },
  {
    icon: FiTarget,
    title: "Detail-obsessed",
    desc: 'Sub-2-second loads and WCAG accessibility aren\u2019t nice-to-haves — they\u2019re part of what "done" means.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About"
          title="Building production-grade web applications with React, TypeScript, Node.js, and AI."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <Reveal delay={0.1}>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              {profile.summary}
            </p>
            <p className="mt-5 text-[var(--color-muted)] leading-relaxed">
              My path started in a B.Tech program in Information Technology, but
              the real learning happened building things that had to survive
              contact with actual users — a gaming homepage that had to hold
              60fps, a 3D real-estate showcase that had to match a Figma file
              pixel for pixel, and an AI trip planner that had to turn a
              language model's output into something a person could actually act
              on. Along the way I picked up a second track in computer vision
              and deep learning, which is why I'm equally comfortable shipping a
              React component or training a detection model.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {profile.quickFacts.map((f) => (
                <div key={f.label} className="glass rounded-xl p-4">
                  <div className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider">
                    {f.label}
                  </div>
                  <div className="mt-1 font-medium text-sm">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="glass rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                  <p.icon className="text-[var(--color-accent)]" size={22} />
                  <h3 className="mt-4 font-display font-semibold text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--color-border)] pt-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="text-4xl sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
