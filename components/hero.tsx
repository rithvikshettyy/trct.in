"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useInView, useSpring, useTransform, useScroll, useMotionValue } from "framer-motion"
import { MotionBackground, KineticTitle } from "./motion-graphics"

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const prefix = match ? match[1] : ""
  const targetNumber = match ? parseInt(match[2], 10) : parseInt(value, 10) || 0
  const suffix = match ? match[3] : ""

  const count = useMotionValue(0)
  const springCount = useSpring(count, {
    stiffness: 40,
    damping: 20,
  })

  const displayValue = useTransform(springCount, (latest) => 
    `${prefix}${Math.floor(latest)}${suffix}`
  )

  useEffect(() => {
    if (isInView) {
      count.set(targetNumber)
    }
  }, [isInView, targetNumber, count])

  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-primary text-primary-foreground overflow-hidden px-4 pt-38 md:pt-40 pb-20"
    >
      {/* Dynamic Background */}
      <MotionBackground />

      {/* Parallax Background Grid (using CSS + Motion) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.2,
              delayChildren: 0.3
            } 
          }
        }}
      >
        {/* Location badge */}
        <motion.div 
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          className="inline-block mb-8 px-4 sm:px-6 py-2 border-2 border-white max-w-[95vw]"
        >
          <span className="font-mono text-[10px] sm:text-sm md:text-base tracking-widest font-black">
            THANE'S BIGGEST RUNNING COMMUNITY
          </span>
        </motion.div>

        {/* Main heading with Kinetic Typography */}
        <KineticTitle text="TRCT.IN" />

        {/* Tagline */}
        <motion.div 
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1 }
          }}
          className="relative mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2"
        >
          <span className="text-base sm:text-xl md:text-3xl font-mono font-bold tracking-wider mt-1 opacity-80">NOT A CLUB —</span>
          <span className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            A CULT.
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div 
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="w-full sm:w-auto text-base sm:text-lg px-6 lg:px-8 py-6 sm:py-6 font-bold hover:shadow-[8px_8px_0_0_#fff] active:translate-y-0.5 active:translate-x-0.5 transition-all duration-300 border-2 border-white bg-white text-primary hover:bg-white/90 group relative overflow-hidden"
          >
            <motion.a 
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              JOIN THE MOVEMENT
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base sm:text-lg px-6 lg:px-8 py-6 sm:py-6 font-bold border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 bg-transparent hover:shadow-[8px_8px_0_0_#fff] active:translate-y-0.5 active:translate-x-0.5"
          >
            NEXT RUN: SUNDAY 7AM
          </Button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-20 mb-20 sm:mb-32 max-w-3xl mx-auto w-full px-2 sm:px-0">
          {[
            { number: "2000+", label: "CULT MEMBERS" },
            { number: "40+", label: "EVENTS RUN" },
            { number: "100%", label: "PURE ENERGY" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { scale: 0, rotate: -10 },
                visible: { scale: 1, rotate: 0 }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: i % 2 === 0 ? 1 : -1,
                backgroundColor: "#ffffff",
                color: "#dc2626"
              }}
              className="border-2 border-white p-6 md:p-6 transition-colors duration-300 group cursor-default bg-transparent"
            >
              <div className="text-4xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">
                <AnimatedNumber value={stat.number} />
              </div>
              <div className="text-xs md:text-sm font-mono tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Decorative Elements Removed */}

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

