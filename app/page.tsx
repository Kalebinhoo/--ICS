'use client'

import PremiumHero from '@/components/PremiumHero'
import ExclusiveBots from '@/components/ExclusiveBots'
import PremiumStats from '@/components/PremiumStats'
import PremiumFooter from '@/components/PremiumFooter'
import AmbientLights from '@/components/AmbientLights'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AmbientLights />
      <PremiumHero />
      <ExclusiveBots />
      <PremiumStats />
      <PremiumFooter />
    </main>
  )
}
