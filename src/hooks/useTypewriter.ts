import { useEffect, useState } from 'react'

export function useTypewriter(words: string[], typingSpeed = 65, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: number

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      timeout = window.setTimeout(() => setText(next), deleting ? typingSpeed / 2 : typingSpeed)
    }

    return () => window.clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, pause])

  return text
}
