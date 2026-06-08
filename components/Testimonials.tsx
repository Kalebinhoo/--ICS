'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Lucas Silva',
    role: 'Estudante - 2º Ano EM',
    avatar: '👨‍🎓',
    content: 'Esse servidor mudou minha vida escolar! Nunca mais fiquei estressado com lições de casa. A comunidade é incrível e sempre tem alguém para ajudar.',
    rating: 5,
  },
  {
    name: 'Maria Oliveira',
    role: 'Estudante - 3º Ano EM',
    avatar: '👩‍🎓',
    content: 'Os scripts para Khan Academy e Alura são perfeitos! Economizei horas de trabalho e ainda aprendi muito com a comunidade. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Pedro Santos',
    role: 'Estudante - 1º Ano EM',
    avatar: '🧑‍💻',
    content: 'Melhor servidor do Discord! Além dos scripts, tem eventos legais, sistema de níveis e uma galera muito gente boa. 10/10',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Estudante - 2º Ano EM',
    avatar: '👩‍💼',
    content: 'Entrei faz 6 meses e já subi pro nível 25! A comunidade é super ativa, os mods são atenciosos e os recursos são sempre atualizados.',
    rating: 5,
  },
  {
    name: 'João Ferreira',
    role: 'Estudante - 3º Ano EM',
    avatar: '👨‍🔬',
    content: 'Achei que era mentira no começo, mas é real! Scripts funcionam perfeitamente e o suporte é rápido. Salvou meu ano letivo.',
    rating: 5,
  },
  {
    name: 'Camila Souza',
    role: 'Estudante - 1º Ano EM',
    avatar: '👩‍🎨',
    content: 'Comunidade mais organizada que já vi. Tem canal pra tudo, eventos toda semana e os bots exclusivos são show. Amei!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-96 bg-gradient-radial-copper opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            O Que Nossos <span className="text-gradient-copper">Membros Dizem</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Milhares de estudantes já transformaram sua rotina escolar com nossa comunidade
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 glass-card rounded-3xl hover:bg-secondary/60 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity glow-copper" />

              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-highlight/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-copper flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-highlight/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-muted mb-6">
            Junte-se a mais de 74 mil estudantes satisfeitos
          </p>
          <motion.a
            href="https://discord.gg/2UjMvncmQZ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-copper rounded-2xl text-lg font-semibold shadow-premium-lg"
          >
            Começar Agora Grátis
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
