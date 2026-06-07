'use client'

import { motion } from 'framer-motion'
import { Mic, Calendar, Trophy, Users, Target, BookOpen } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Scripts Escolares',
    description: 'Acesse milhares de scripts prontos para trabalhos e lições de casa',
  },
  {
    icon: Calendar,
    title: 'Eventos da Comunidade',
    description: 'Participe de eventos, sorteios e atividades exclusivas do servidor',
  },
  {
    icon: Trophy,
    title: 'Sistema de Níveis',
    description: 'Ganhe XP, suba de nível e desbloqueie recompensas exclusivas',
  },
  {
    icon: Users,
    title: 'Suporte Ativo',
    description: 'Tire dúvidas e receba ajuda de membros experientes 24/7',
  },
  {
    icon: Target,
    title: 'Plataformas Integradas',
    description: 'Acesso direto a Alura, Khan Academy, Matific e muito mais',
  },
  {
    icon: BookOpen,
    title: 'Biblioteca de Conteúdo',
    description: 'Materiais de estudo, resumos e recursos educacionais organizados',
  },
]

export default function PremiumFeatures() {
  return (
    <section id="features" className="relative py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            O Que Nossa <span className="text-gradient-copper">Comunidade Oferece</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Recursos exclusivos criados pela comunidade para a comunidade
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 glass-card rounded-3xl hover:bg-secondary/60 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity glow-copper" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-4 mb-6 bg-gradient-copper rounded-2xl">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-highlight/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
