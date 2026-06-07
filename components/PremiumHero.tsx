'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-radial-copper opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-copper opacity-15 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-12 glass-card rounded-full"
        >
          <Sparkles className="w-4 h-4 text-highlight" />
          <span className="text-sm font-medium text-muted tracking-wide">
            A Comunidade Brasileira de Scripts Escolares
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight leading-[1.1]"
        >
          I Can Say
          <br />
          <span className="text-gradient-copper">O Melhor Servidor de Scripts Escolar!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted leading-relaxed mb-16 max-w-4xl mx-auto"
        >
          Entre no nosso servidor e nos ajude a se tornar uma comunidade conhecida por todas 
          as pessoas do Brasil! Aproveite scripts exclusivos, ajuda com trabalhos escolares, 
          ferramentas incríveis e uma comunidade ativa pronta para ajudar você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="https://discord.gg/2UjMvncmQZ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-gradient-copper rounded-2xl text-lg font-semibold shadow-premium-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Entrar no Servidor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
