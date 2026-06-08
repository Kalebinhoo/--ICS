'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Bot } from 'lucide-react'

const platforms = [
  { id: 1, name: 'Alura', image: '/platforms/alura.png' },
  { id: 2, name: 'Khan Academy', image: '/platforms/khan_academy.png' },
  { id: 3, name: 'Leia SP', image: '/platforms/leiasp.png' },
  { id: 4, name: 'Matific', image: '/platforms/matific.png' },
  { id: 5, name: 'Redação SP', image: '/platforms/redacaosp.png' },
  { id: 6, name: 'Tarefa SP', image: '/platforms/tarefasp.png' },
  { id: 7, name: 'Expansão Noturno', image: '/platforms/expansao.png' },
  { id: 8, name: 'Speak', image: '/platforms/speak.png' },
]

export default function ExclusiveBots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Rotação mais lenta no mobile
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % platforms.length)
    }, isMobile ? 3500 : 2500)

    return () => clearInterval(interval)
  }, [isMobile])

  const currentPlatform = platforms[currentIndex]

  return (
    <section id="platforms" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-96 bg-gradient-radial-copper opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 glass-card rounded-full">
            <Bot className="w-5 h-5 text-highlight" />
            <span className="text-sm font-medium text-muted tracking-wide">
              Plataformas Integradas
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Várias Plataformas <span className="text-gradient-copper">Exclusivas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Acesso direto às melhores plataformas educacionais do Brasil
          </p>
        </div>

        {/* Plataforma Atual - Versão Leve */}
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
          <div 
            key={currentPlatform.id}
            className="transition-opacity duration-500"
          >
            <div className="relative w-40 h-40 md:w-64 md:h-64 mx-auto">
              <Image
                src={currentPlatform.image}
                alt={currentPlatform.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Nome da Plataforma */}
        <div className="text-center mt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-copper transition-all duration-500">
            {currentPlatform.name}
          </h3>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {platforms.map((platform, idx) => (
            <button
              key={platform.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-highlight w-8' 
                  : 'bg-muted/30 hover:bg-muted/50'
              }`}
              aria-label={`Ver ${platform.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
