import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiX } from 'react-icons/fi'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { certifications } from '@/data/profile'

const certImages = import.meta.glob('@/assets/certs/*.png', { eager: true, import: 'default' }) as Record<string, string>

function resolveImg(name: string) {
  const match = Object.entries(certImages).find(([path]) => path.endsWith(name))
  return match?.[1] ?? ''
}

export default function Certifications() {
  const [preview, setPreview] = useState<string | null>(null)

  return (
    <section id="certifications" className="relative py-28 sm:py-36 bg-[var(--color-bg-soft)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Certifications" title="Formal proof, alongside the shipped work." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="glass rounded-2xl overflow-hidden group h-full flex flex-col">
                <button
                  onClick={() => setPreview(resolveImg(cert.image))}
                  className="relative aspect-[4/3] overflow-hidden bg-white/5 focus-ring"
                  aria-label={`Preview ${cert.title} certificate`}
                >
                  <img
                    src={resolveImg(cert.image)}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono px-3 py-1.5 rounded-full glass">
                      View Certificate
                    </span>
                  </div>
                </button>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start gap-2">
                    <FiAward className="text-[var(--color-accent)] mt-0.5 shrink-0" size={16} />
                    <h3 className="font-display font-semibold text-sm leading-snug">{cert.title}</h3>
                  </div>
                  <div className="mt-2 text-xs text-[var(--color-muted)]">{cert.org}</div>
                  <div className="mt-1 font-mono text-[11px] text-[var(--color-muted)]">{cert.date}</div>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs text-[var(--color-accent)] hover:underline"
                    >
                      Verify <FiExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreview(null)}
                className="absolute -top-12 right-0 w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white focus-ring"
                aria-label="Close preview"
              >
                <FiX />
              </button>
              <img src={preview} alt="Certificate preview" className="w-full rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
