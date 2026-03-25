"use client"

import { Flame, Zap, Heart, Target } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"

export function CultSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  }

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 px-4 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/img1.jpeg"
          alt="Cult Section Background"
          fill
          className="object-cover opacity-[15%]"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20 px-2 sm:px-0">
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-6 text-balance tracking-tighter uppercase relative">
            WHY IT'S A
            <br />
            <span className="text-primary relative inline-block">
              CULT
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-mono max-w-3xl mx-auto text-balance opacity-80">
            Because once you join, you can't stop. The energy is addictive. The community is unmatched. The vibes?
            Immaculate.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Flame,
              title: "HIGH ENERGY",
              description: "No boring runs. Just pure adrenaline and good vibes every Sunday.",
            },
            {
              icon: Zap,
              title: "GEN Z VIBES",
              description: "Run by teens, for teens. We speak your language. We get it.",
            },
            {
              icon: Heart,
              title: "REAL COMMUNITY",
              description: "Not just running partners. These are your people. Your tribe.",
            },
            {
              icon: Target,
              title: "ZERO JUDGMENT",
              description: "First run or hundredth, we all start somewhere. Just show up.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: "#dc2626",
                color: "#ffffff",
                boxShadow: "12px 12px 0px 0px #000"
              }}
              className="border-2 border-primary p-6 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              <value.icon className="w-10 h-10 mb-4 text-primary group-hover:text-primary-foreground group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
              <h3 className="text-xl font-black mb-3 font-mono group-hover:translate-x-1 transition-transform duration-300 uppercase italic">
                {value.title}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                {value.description}
              </p>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/20 rotate-45 translate-x-4 -translate-y-4 group-hover:bg-black/20" />
            </motion.div>
          ))}
        </div>

        {/* Testimonial style section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "I've never felt more alive at 7 AM. This run club changed my life fr.",
              name: "SHUBHAM PATIL, 22",
              icon: "🏃‍♂️"
            },
            {
              quote: "Started as a challenge. Now it's my favorite part of the week. No cap.",
              name: "VATSAL NATHANI, 24",
              icon: "⚡"
            },
            {
              quote: "The energy here is INSANE. Best decision I made this year.",
              name: "OJAL SHETTY, 19",
              icon: "🔥"
            },
          ].map((testimonial, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-primary/5 border-2 border-dashed border-primary/40 p-6 relative group"
            >
              <div className="absolute -top-3 -right-3 text-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                {testimonial.icon}
              </div>
              <p className="text-lg font-bold mb-4 leading-relaxed text-balance italic">"{testimonial.quote}"</p>
              <p className="font-mono text-sm font-bold text-primary">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

