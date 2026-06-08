'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function PremiumHero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-radial-copper opacity-20 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-copper opacity-15 blur-3xl rounded-full" />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 glass-card rounded-full animate-fade-in">
          <Sparkles className="w-4 h-4 text-highlight" />
          <span className="text-sm font-medium text-muted tracking-wide">
            🇧🇷 A Maior Comunidade Brasileira de Scripts Escolares
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1.1] animate-fade-in-up">
          Nunca Mais Sofra com
          <br />
          <span className="text-gradient-copper">Lições de Casa</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in-up-delay">
          Mais de 74 mil estudantes já descobriram o segredo: scripts prontos, 
          comunidade ativa e ajuda 24/7 para todas suas tarefas escolares.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
          <a
            href="https://discord.gg/2UjMvncmQZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-copper rounded-2xl text-lg font-semibold shadow-premium-lg overflow-hidden w-full sm:w-auto transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2">
              Entrar Grátis Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#features"
            className="px-10 py-5 glass-card rounded-2xl text-lg font-semibold hover:bg-secondary/60 transition-all w-full sm:w-auto text-center"
          >
            Ver Recursos
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted animate-fade-in-up-delay-3">
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
        </div>
      </div>
    </section>
  )
}
