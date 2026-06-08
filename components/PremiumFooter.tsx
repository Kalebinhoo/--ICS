'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'

export default function PremiumFooter() {
  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', href: '#home' },
        { name: 'Recursos', href: '#features' },
        { name: 'Plataformas', href: '#platforms' },
        { name: 'Comunidade', href: '#community' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { name: 'FAQ', href: '#faq' },
        { name: 'Discord', href: 'https://discord.gg/2UjMvncmQZ' },
        { name: 'Reportar Bug', href: 'https://discord.gg/2UjMvncmQZ' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Termos de Uso', href: '#' },
        { name: 'Política de Privacidade', href: '#' },
        { name: 'Código de Conduta', href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative py-20 px-6 border-t border-highlight/10">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-96 bg-gradient-radial-copper opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-premium ring-2 ring-highlight/20">
                <Image
                  src="/ics.png"
                  alt="I Can Say"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-display font-bold">I Can Say</span>
            </motion.div>
            <p className="text-muted mb-6 leading-relaxed max-w-sm">
              A maior comunidade brasileira de scripts escolares. Mais de 74 mil estudantes 
              transformando sua rotina escolar.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://discord.gg/2UjMvncmQZ"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary/60 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary/60 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary/60 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary/60 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-highlight transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-highlight/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted"
        >
          <p className="flex items-center gap-1">
            © 2024 I Can Say - Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> pela comunidade
          </p>
          <p>
            🇧🇷 No Topo Sempre! 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
