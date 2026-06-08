'use client'

import { useEffect, useState } from 'react'

export default function AmbientLights() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile: apenas gradientes estáticos, sem animação
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial-copper opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-copper opacity-10 blur-3xl" />
      </div>
    )
  }

  // Desktop: gradientes estáticos também (sem motion)
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial-copper opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-copper opacity-10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze opacity-5 blur-3xl rounded-full" />
    </div>
  )
}
