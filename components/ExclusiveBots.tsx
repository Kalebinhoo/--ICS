'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Bot } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % platforms.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const getVisiblePlatforms = () => {
    const prev = (currentIndex - 1 + platforms.length) % platforms.length
    const next = (currentIndex + 1) % platforms.length
    return [
      { ...platforms[prev], position: 'left' },
      { ...platforms[currentIndex], position: 'center' },
      { ...platforms[next], position: 'right' },
    ]
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-96 bg-gradient-radial-copper opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 glass-card rounded-full"
          >
            <Bot className="w-5 h-5 text-highlight" />
            <span className="text-sm font-medium text-muted tracking-wide">
              Plataformas Integradas
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Várias Plataformas <span className="text-gradient-copper">Exclusivas</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Acesso direto às melhores plataformas educacionais do Brasil, 
            tudo integrado no nosso servidor para facilitar seus estudos
          </p>
        </motion.div>

        <div className="relative h-[400px] flex items-center justify-center">
          <AnimatePresence mode="sync">
            {getVisiblePlatforms().map((platform, idx) => {
              const isCenter = platform.position === 'center'
              const isLeft = platform.position === 'left'
              const isRight = platform.position === 'right'

              return (
                <motion.div
                  key={`${platform.name}-${currentIndex}-${idx}`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5,
                    x: isLeft ? -300 : isRight ? 300 : 0,
                    y: 50,
                  }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.3,
                    scale: isCenter ? 1 : 0.7,
                    x: isLeft ? -280 : isRight ? 280 : 0,
                    y: isCenter ? 0 : 40,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.5,
                    y: -50,
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="absolute"
                  style={{ zIndex: isCenter ? 10 : 5 }}
                >
                  <div className="relative">
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/60 rounded-full blur-2xl" />
                    
                    <motion.div
                      animate={{ 
                        y: isCenter ? [0, -15, 0] : [0, -8, 0],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative"
                    >
                      <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <Image
                          src={platform.image}
                          alt={platform.name}
                          fill
                          className="object-contain"
                          priority={isCenter}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <motion.div
          key={platforms[currentIndex].name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center mt-12"
        >
          <h3 className="text-3xl font-bold text-gradient-copper">
            {platforms[currentIndex].name}
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
