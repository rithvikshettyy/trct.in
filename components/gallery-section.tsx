"use client"

import Image from "next/image"
import { ArrowRight, ImageIcon } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"

import { allWeeks } from "@/lib/vault-data"

export function GallerySection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])
  
  // Automatically take the latest 6 weeks from the centralized data
  const recentWeeks = allWeeks.slice(0, 6)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-32 px-4 bg-white text-foreground overflow-hidden relative">
      {/* Background decoration */}
      <motion.div 
        style={{ y }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 px-2 sm:px-0"
        >
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 text-balance text-primary uppercase tracking-tighter">
              THE VAULT
            </h2>
            <div className="w-12 h-3 bg-primary mb-6"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono">
              Relive the energy. Week by week.
            </p>
          </div>
          <Link
            href="/vault"
            className="group flex items-center font-mono font-bold text-sm md:text-base border-b-2 border-primary pb-1 hover:text-primary transition-colors"
          >
            VIEW ENTIRE GOOGLE DRIVE
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {recentWeeks.map((item) => (
            <motion.a
              key={item.week}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                rotate: 1,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="group block border-4 border-foreground bg-secondary/5 hover:bg-primary hover:border-primary transition-all duration-300 relative overflow-hidden hover:shadow-[12px_12px_0_0_#000]"
            >
              {/* Thumbnail Area */}
              <div className="aspect-[4/3] w-full bg-foreground/10 flex items-center justify-center relative overflow-hidden border-b-4 border-foreground group-hover:border-primary/50 transition-colors duration-300">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={`Week ${item.week}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <ImageIcon className="w-12 h-12 opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-primary font-black px-4 py-2 text-sm uppercase skew-x-[-10deg]">VIEW MEMORIES</span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    WEEK {item.week}
                  </h3>
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <ArrowRight className="w-5 h-5 md:-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                <p className="font-mono text-sm opacity-70 mt-2 group-hover:text-white transition-colors duration-300 uppercase">
                  [ GOOGLE DRIVE FOLDER ]
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

