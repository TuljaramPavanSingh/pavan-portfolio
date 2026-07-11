import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--color-accent)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[var(--color-muted)] max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
