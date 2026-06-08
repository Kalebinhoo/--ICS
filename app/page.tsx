'use client'

import Navbar from '@/components/Navbar'
import PremiumHero from '@/components/PremiumHero'
import PremiumFeatures from '@/components/PremiumFeatures'
import ExclusiveBots from '@/components/ExclusiveBots'
import Testimonials from '@/components/Testimonials'
import PremiumStats from '@/components/PremiumStats'
import CTASection from '@/components/CTASection'
import FAQ from '@/components/FAQ'
import PremiumFooter from '@/components/PremiumFooter'
import AmbientLights from '@/components/AmbientLights'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <AmbientLights />
        <PremiumHero />
        <PremiumFeatures />
        <ExclusiveBots />
        <Testimonials />
        <PremiumStats />
        <CTASection />
        <FAQ />
        <PremiumFooter />
      </main>
    </>
  )
}
