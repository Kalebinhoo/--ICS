'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'O que é o I Can Say?',
    answer: 'O I Can Say é a maior comunidade brasileira de scripts escolares no Discord, com mais de 74 mil membros. Oferecemos scripts prontos, ajuda com trabalhos, acesso a plataformas educacionais e uma comunidade ativa.',
  },
  {
    question: 'O servidor é gratuito?',
    answer: 'Sim! O acesso ao servidor é 100% gratuito. Você pode entrar e ter acesso a milhares de recursos, scripts e uma comunidade incrível sem pagar nada.',
  },
  {
    question: 'Como funcionam os scripts escolares?',
    answer: 'Disponibilizamos scripts prontos para diversas plataformas educacionais brasileiras como Alura, Khan Academy, Matific, Leia SP, Tarefa SP e muito mais. Os scripts são compartilhados pela comunidade e atualizados regularmente.',
  },
  {
    question: 'Quais plataformas vocês suportam?',
    answer: 'Suportamos as principais plataformas educacionais brasileiras: Alura, Khan Academy, Matific, Leia SP, Redação SP, Tarefa SP, Expansão Noturno, Speak e outras. Nossa lista está sempre crescendo!',
  },
  {
    question: 'Como funciona o sistema de níveis?',
    answer: 'Quanto mais você participa do servidor (conversando, ajudando outros membros, participando de eventos), mais XP você ganha. Ao subir de nível, você desbloqueia recompensas exclusivas e cargos especiais.',
  },
  {
    question: 'Posso contribuir com scripts?',
    answer: 'Sim! A comunidade é feita por todos nós. Se você tem um script útil ou conhecimento para compartilhar, será muito bem-vindo. Temos canais específicos para contribuições.',
  },
  {
    question: 'Como obtenho suporte?',
    answer: 'Temos uma equipe de moderadores e membros experientes disponíveis 24/7. Basta entrar no servidor e usar os canais de suporte. A comunidade é muito ativa e está sempre pronta para ajudar!',
  },
  {
    question: 'O uso dos scripts é seguro?',
    answer: 'Todos os scripts compartilhados são verificados pela nossa equipe e comunidade. No entanto, sempre recomendamos que você revise o código antes de usar e use por sua conta e risco.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Perguntas <span className="text-gradient-copper">Frequentes</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Tire suas dúvidas sobre o servidor e a comunidade
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/40 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-highlight" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-6">Ainda tem dúvidas?</p>
          <motion.a
            href="https://discord.gg/2UjMvncmQZ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-copper rounded-xl font-semibold shadow-premium"
          >
            Entre e Pergunte na Comunidade
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
