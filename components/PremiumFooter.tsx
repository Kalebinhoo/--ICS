'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PremiumFooter() {
  return (
    <footer className="relative py-20 px-6 border-t border-highlight/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-premium">
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-highlight/10 text-center text-muted"
        >
          © 2024 I Can Say - No Topo sempre!
        </motion.div>
      </div>
    </footer>
  )
}
