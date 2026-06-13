'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(8px)',
    transition: {
      duration: 0.3,
      ease: [0.55, 0, 1, 0.45],
    },
  },
}

const glowVariants = {
  initial: { opacity: 0.3, scale: 0.8 },
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

function GlowBackground() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      variants={glowVariants}
      initial="initial"
      animate="animate"
    >
      <div className="w-full h-96 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial-copper opacity-5 blur-3xl" />
      </div>
    </motion.div>
  )
}

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
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % platforms.length)
    }, isMobile ? 3500 : 2500)

    return () => clearInterval(interval)
  }, [isMobile])

  const currentPlatform = platforms[currentIndex]

  return (
    <section id="platforms" className="relative py-32 px-6 overflow-hidden">
      <GlowBackground />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 glass-card rounded-full">
            <Bot className="w-5 h-5 text-highlight" />
            <span className="text-sm font-medium text-muted tracking-wide">
              Soluções contruida pela comunidade.
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Várias Plataformas <span className="text-gradient-copper">Exclusivas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Acesso direto os melhores bots com as seguintes plataformas.
          </p>
        </motion.div>

        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlatform.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-40 h-40 md:w-64 md:h-64"
            >
              <Image
                src={currentPlatform.image}
                alt={currentPlatform.name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div variants={itemVariants} className="text-center mt-8">
          <AnimatePresence mode="wait">
            <motion.h3
              key={`name-${currentPlatform.id}`}
              className="text-2xl md:text-3xl font-bold text-gradient-copper"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentPlatform.name}
            </motion.h3>
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-2 mt-8">
          {platforms.map((platform, idx) => (
            <motion.button
              key={platform.id}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-highlight w-8 h-2'
                  : 'bg-muted/30 hover:bg-muted/50 w-2 h-2'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ver ${platform.name}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
