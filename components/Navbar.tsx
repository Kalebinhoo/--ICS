'use client'

import { Menu, X, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Recursos', href: '#features' },
    { name: 'Plataformas', href: '#platforms' },
    { name: 'Comunidade', href: '#community' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in ${
        scrolled ? 'glass-card shadow-premium' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-premium ring-2 ring-highlight/20 group-hover:ring-highlight/40 transition-all">
              <Image
                src="/ics.png"
                alt="I Can Say"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-display font-bold hidden sm:block">
              I Can Say
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted hover:text-highlight transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-copper group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://discord.gg/2UjMvncmQZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-copper rounded-xl font-semibold shadow-premium text-sm transition-transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            Entrar Agora
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-card transition-transform active:scale-95"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden overflow-hidden animate-fade-in-up">
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted hover:text-highlight transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://discord.gg/2UjMvncmQZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-copper rounded-xl font-semibold shadow-premium mt-4"
              >
                <Sparkles className="w-4 h-4" />
                Entrar Agora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
