import { motion, useScroll, useTransform, useMotionValue, useSpring as useFramerSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export function MotionBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Use springs on the motion values for smooth following without Re-renders
  const springX = useFramerSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useFramerSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250)
      mouseY.set(e.clientY - 250)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Dynamic light blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-white/5 blur-[80px] will-change-transform"
        style={{
          x: springX,
          y: springY,
        }}
      />
      
      {/* Grainy Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  )
}

export function KineticTitle({ text }: { text: string }) {
  const chars = text.split("")
  
  return (
    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6 tracking-tighter uppercase text-[#F2EFE8] flex flex-wrap justify-center overflow-hidden">
      {chars.map((char, i) => (char === " " ? (
        <span key={i} className="w-[1ch]">&nbsp;</span>
      ) : (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.05,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          whileHover={{ 
            scale: 1.1, 
            color: "#fff",
            rotate: Math.random() * 10 - 5,
            transition: { duration: 0.2 }
          }}
          className="inline-block cursor-default select-none"
        >
          {char}
        </motion.span>
      )))}
    </h1>
  )
}
