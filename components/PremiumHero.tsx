'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function PremiumHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-radial-copper opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-copper opacity-15 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-8 glass-card rounded-full"
        >
          <Sparkles className="w-4 h-4 text-highlight" />
          <span className="text-sm font-medium text-muted tracking-wide">
            🇧🇷 A Maior Comunidade Brasileira de Scripts Escolares
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1.1]"
        >
          Nunca Mais Sofra com
          <br />
          <span className="text-gradient-copper">Lições de Casa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-muted leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Mais de 74 mil estudantes já descobriram o segredo: scripts prontos, 
          comunidade ativa e ajuda 24/7 para todas suas tarefas escolares.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://discord.gg/2UjMvncmQZ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-copper rounded-2xl text-lg font-semibold shadow-premium-lg overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2">
              Entrar Grátis Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 glass-card rounded-2xl text-lg font-semibold hover:bg-secondary/60 transition-all w-full sm:w-auto text-center"
          >
            Ver Recursos
          </motion.a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['👨‍🎓', '👩‍🎓', '🧑‍💻', '👨‍🔬'].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-copper flex items-center justify-center border-2 border-primary">
                  {emoji}
                </div>
              ))}
            </div>
            <span className="font-medium">+74 mil membros</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-medium">4.9/5 avaliação média</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-medium">100% grátis</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
