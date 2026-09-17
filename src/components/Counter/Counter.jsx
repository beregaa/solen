import { useEffect, useRef } from 'react'

// The real number is rendered in the HTML (never "0" for visitors or Google).
// If the counter is below the fold, it animates from 0 when scrolled into view.
export default function Counter({ target, duration = 1800, suffix = '', className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    const render = (n) => { el.textContent = `${n}${suffix}` }
    render(0)

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        // start when visible — or if the user already scrolled past it
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          render(Math.round((1 - Math.pow(1 - p, 3)) * target))
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      render(target)
    }
  }, [target, duration, suffix])

  return (
    <span ref={ref} className={className}>
      {`${target}${suffix}`}
    </span>
  )
}
