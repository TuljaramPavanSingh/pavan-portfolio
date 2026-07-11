import { useState, type FormEvent } from 'react'
import { FiCheck, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { profile } from '@/data/profile'

const contactPoints = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: undefined },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'View repositories', href: profile.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping."
          description="Open to full-time Full-Stack, React, and AI/ML roles. The fastest way to reach me is email."
          align="center"
        />

        <div className="mt-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-7 h-full">
              <h3 className="font-display font-semibold text-lg mb-6">Direct contact</h3>
              <div className="space-y-4">
                {contactPoints.map((c) => {
                  const content = (
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors shrink-0">
                        <c.icon size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[var(--color-muted)]">{c.label}</div>
                        <div className="text-sm mt-0.5">{c.value}</div>
                      </div>
                    </div>
                  )
                  return c.href ? (
                    <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block focus-ring rounded-xl -m-1 p-1">
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wider">Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wider">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-shadow focus-ring"
              >
                {sent ? <><FiCheck /> Opening your mail app…</> : <><FiSend /> Send Message</>}
              </button>
              <p className="text-xs text-[var(--color-muted)] text-center">
                This opens your email client with the message pre-filled — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
