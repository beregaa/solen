import { useEffect, useRef, useState } from 'react'

export default function Counter({ target, duration = 2500, suffix = '', color = '#000' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true

          let start = 0
          const increment = target / (duration / 16)

          const update = () => {
            start += increment
            if (start < target) {
              setCount(Math.floor(start))
              requestAnimationFrame(update)
            } else {
              setCount(target)
            }
          }

          update()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} style={{ color }}>
      {count}
      {suffix}
    </span>
  )
}