'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    content: 'This community transformed my English speaking skills. The daily practice sessions are incredibly effective and the support is unmatched.',
    avatar: 'SJ',
  },
  {
    name: 'Carlos Martinez',
    role: 'Marketing Manager',
    content: 'I went from being nervous to confident in conversations. The native speakers provide invaluable feedback that you can\'t get anywhere else.',
    avatar: 'CM',
  },
  {
    name: 'Yuki Tanaka',
    role: 'PhD Student',
    content: 'The personalized learning paths helped me focus on academic English. Now I present my research confidently at international conferences.',
    avatar: 'YT',
  },
]

export default function PremiumTestimonials() {
  return (
    <section className="relative py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Trusted by <span className="text-gradient-copper">Learners Worldwide</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            See how our community has helped people achieve fluency
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card rounded-3xl p-10 hover:bg-secondary/60 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-copper mb-6" />
              
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-copper rounded-full flex items-center justify-center font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-muted">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
