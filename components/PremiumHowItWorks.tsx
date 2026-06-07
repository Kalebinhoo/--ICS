'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Entre no Discord',
    description: 'Clique no botão e junte-se à nossa comunidade instantaneamente',
  },
  {
    number: '02',
    title: 'Apresente-se',
    description: 'Conte sobre você e quais ferramentas mais te interessam',
  },
  {
    number: '03',
    title: 'Explore os Recursos',
    description: 'Acesse scripts, plataformas educacionais e ajuda com trabalhos',
  },
  {
    number: '04',
    title: 'Cresça Conosco',
    description: 'Contribua com a comunidade e ajude outros membros',
  },
]

export default function PremiumHowItWorks() {
  return (
    <section className="relative py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Faça Parte da <span className="text-gradient-copper">Comunidade</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Quatro passos simples para se juntar à maior comunidade de scripts escolares
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group flex items-center gap-12 glass-card rounded-3xl p-12 hover:bg-secondary/60 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-copper rounded-2xl flex items-center justify-center font-display font-bold text-3xl shadow-premium">
                {step.number}
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-3">{step.title}</h3>
                <p className="text-xl text-muted leading-relaxed">{step.description}</p>
              </div>

              <ArrowRight className="flex-shrink-0 w-8 h-8 text-copper opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
