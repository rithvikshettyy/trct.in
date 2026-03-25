"use client"

import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"

export function EventsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 bg-background overflow-hidden relative">
      {/* Decorative background text */}
      <motion.div 
        style={{ x: x1 }}
        className="absolute top-10 left-0 text-[20vw] font-black text-foreground/5 whitespace-nowrap pointer-events-none select-none"
      >
        SUNDAY SUNDAY SUNDAY
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 px-2 sm:px-0 text-center sm:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 text-balance tracking-tighter uppercase">
            EVERY SUNDAY.
            <br />
            <span className="text-primary relative inline-block">
              NO EXCUSES.
              <motion.span 
                className="absolute inset-0 bg-primary/20 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono italic">We run. We vibe. We conquer.</p>
        </motion.div>

        {/* Event details grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: Calendar,
              title: "WHEN",
              detail: "Every Sunday Morning",
              subdetail: "Rain or shine, we show up",
            },
            {
              icon: Clock,
              title: "TIME",
              detail: "7:00 AM Sharp",
              subdetail: "Early birds get the endorphins",
            },
            {
              icon: MapPin,
              title: "WHERE",
              detail: "Thane City",
              subdetail: "Meet point shared on WhatsApp",
            },
            {
              icon: Users,
              title: "WHO",
              detail: "Gen Z Runners",
              subdetail: "Teens running the show",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                backgroundColor: "#dc2626",
                color: "#ffffff",
                borderColor: "#ffffff",
                boxShadow: "10px 10px 0px 0px #000"
              }}
              className="border-4 border-foreground p-8 transition-all duration-300 group cursor-default"
            >
              <item.icon className="w-12 h-12 mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300" />
              <h3 className="text-sm font-mono font-bold mb-2 tracking-wider opacity-80 group-hover:opacity-100 transition-opacity uppercase">{item.title}</h3>
              <p className="text-3xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-300">{item.detail}</p>
              <p className="text-sm opacity-70 group-hover:opacity-90">{item.subdetail}</p>
            </motion.div>
          ))}
        </div>

        {/* Route info */}
        <motion.div 
          variants={itemVariants}
          className="bg-accent border-4 border-primary p-6 sm:p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-black mb-4 sm:mb-6 text-accent-foreground text-balance uppercase tracking-tight">
              THE ROUTE CHANGES.
              <br />
              THE ENERGY DOESN'T.
            </h3>
            <p className="text-lg md:text-xl text-accent-foreground/80 mb-6 max-w-2xl">
              We explore different routes every week—from peaceful trails to urban streets. 5K to 10K runs. Beginner
              friendly, but we don't slow down for excuses.
            </p>
            <div className="flex flex-wrap gap-3">
              {["5K RUNS", "10K ROUTES", "TRAIL RUNNING", "STREET SPRINTS", "HILL TRAINING"].map((tag, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-4 py-2 bg-primary text-primary-foreground font-mono text-sm font-bold skew-x-[-10deg]"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Animated decorative stripe */}
          <motion.div 
            className="absolute top-0 right-0 w-32 h-full bg-primary/10 -skew-x-12 translate-x-16 group-hover:bg-primary/20 transition-colors"
            animate={{ x: [64, 80, 64] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

