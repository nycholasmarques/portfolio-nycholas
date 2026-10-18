import { useEffect } from 'react'

// Revela elementos com [data-reveal] quando entram na tela
export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
