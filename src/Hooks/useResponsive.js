import { useState, useEffect } from "react"

const useResponsive = () => {
  // Use same initial value on server and client to avoid hydration mismatch.
  // Update to real width only after mount (client-side).
  const [width, setWidth] = useState(1025)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    const rafId = requestAnimationFrame(() => setWidth(window.innerWidth))
    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return {
    isMobile: width <= 768,
    isTablet: width > 768 && width <= 1024,
    isDesktop: width > 1024,
  }
}

export default useResponsive