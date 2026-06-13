'use client'

import { Mic, Calendar, Trophy, Users, Target, BookOpen, Bot } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Scripts Escolares',
    description: 'Acesse de forma rápida o nossos bots para concluir as suas atividades',
  },
  {
    icon: Users,
    title: 'Suporte Ativo',
    description: 'Tire dúvidas e receba ajuda de suportes de forma rápida'
  },
  {
    icon: Target,
    title: 'Plataformas Integradas',
    description: 'Acesso direto a Tarefas Automaticas, Redação, Speak, Expansão entre outros...',
  },
  {
    icon: BookOpen,
    title: 'Apostilas liberada grátis',
    description: 'Temos todas as apostilas de todas as séries e bimestre para você avançar as atividades das páginas e parar de perder seu tempo usando a cabeça para achar respostas!',
  },
]

export default function PremiumFeatures() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            O Que Nossa <span className="text-gradient-copper">Comunidade Oferece</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Recursos exclusivos criados pela comunidade para a comunidade
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 glass-card rounded-3xl hover:bg-secondary/60 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity glow-copper" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-4 mb-6 bg-gradient-copper rounded-2xl">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-highlight/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
