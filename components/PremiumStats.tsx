'use client'

import { motion } from 'framer-motion'
import { Users, Circle } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ServerData {
  onlineMembers: string
  totalMembers: string
  bannerUrl: string | null
  iconUrl: string | null
  loading: boolean
}

export default function PremiumStats() {
  const [serverData, setServerData] = useState<ServerData>({
    onlineMembers: '2.508',
    totalMembers: '74.755',
    bannerUrl: null,
    iconUrl: null,
    loading: true
  })

  useEffect(() => {
    const serverId = '1307176076300255292'
    
    // Busca dados do widget para membros online
    fetch(`https://discord.com/api/guilds/${serverId}/widget.json`)
      .then(res => res.json())
      .then(data => {
        console.log('📊 Widget Data:', data)
        
        setServerData(prev => ({
          ...prev,
          onlineMembers: data.presence_count?.toLocaleString('pt-BR') || '2.508',
          // Constrói URLs diretas da CDN usando dados do widget
          bannerUrl: `https://cdn.discordapp.com/banners/${serverId}/${data.instant_invite?.split('/').pop()}.png?size=512`,
          iconUrl: `https://cdn.discordapp.com/icons/${serverId}/${data.id}.png?size=128`,
          loading: false
        }))
      })
      .catch((error) => {
        console.error('❌ Erro ao buscar widget:', error)
      })

    // Busca informações adicionais via embed/invite (melhor para banner/icon)
    fetch(`https://discord.com/api/v10/invites/2UjMvncmQZ?with_counts=true&with_expiration=true`)
      .then(res => res.json())
      .then(data => {
        console.log('🎨 Invite Data:', data)
        
        const guild = data.guild
        if (guild) {
          setServerData(prev => ({
            ...prev,
            totalMembers: data.approximate_member_count?.toLocaleString('pt-BR') || prev.totalMembers,
            onlineMembers: data.approximate_presence_count?.toLocaleString('pt-BR') || prev.onlineMembers,
            bannerUrl: guild.banner ? `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=512` : prev.bannerUrl,
            iconUrl: guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128` : prev.iconUrl,
            loading: false
          }))
        }
      })
      .catch((error) => {
        console.error('❌ Erro ao buscar invite:', error)
        setServerData(prev => ({ ...prev, loading: false }))
      })
  }, [])

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Junte-se à Nossa <span className="text-gradient-copper">Comunidade</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Mais de 74 mil membros já fazem parte da maior comunidade de scripts escolares do Brasil
          </p>
        </motion.div>

        {/* Discord Embed Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="relative glass-card rounded-3xl overflow-hidden shadow-premium-lg">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-30 glow-copper -z-10" />
            
            {/* Banner */}
            <div className="relative h-24 overflow-hidden bg-black">
              <Image
                src="/ics_banner.png"
                alt="I Can Say Banner"
                width={600}
                height={240}
                className="w-full h-auto object-cover object-top"
                style={{ marginTop: '-10px' }}
                priority
              />
            </div>

            {/* Content */}
            <div className="relative px-6 pb-6 bg-secondary/80 backdrop-blur-xl">
              {/* Server Icon */}
              <div className="relative -mt-12 mb-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-secondary shadow-premium">
                  <Image
                    src="/ics_avatar.png"
                    alt="I Can Say"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Server Name & Badge */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl font-bold">I Can Say™</h3>
                <div className="w-6 h-6 rounded-full bg-gradient-copper flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <Circle className="w-3 h-3 fill-green-500 text-green-500" />
                  <span className="text-gray-300 font-medium">{serverData.onlineMembers} online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-3 h-3 fill-gray-500 text-gray-500" />
                  <span className="text-gray-400">{serverData.totalMembers} membros</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Já pensou em nunca mais ter que fazer lição de casa? 
                Aqui esse sonho se torna realidade!
              </p>

              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 rounded-full bg-copper" />
                <span className="text-xs text-gray-400 uppercase tracking-wider">ICS</span>
              </div>

              {/* Join Button */}
              <motion.a
                href="https://discord.gg/your-invite"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl text-center font-semibold transition-colors shadow-lg"
              >
                Ir para o Servidor
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
