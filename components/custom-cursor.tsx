"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, AnimatePresence, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorType, setCursorType] = useState<"default" | "button" | "text">("default")

  // Core motion values to avoid Re-renders on every mouse move
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring versions for smooth movement
  const springX = useSpring(mouseX, { stiffness: 800, damping: 50 })
  const springY = useSpring(mouseY, { stiffness: 800, damping: 50 })
  
  const outerX = useSpring(mouseX, { stiffness: 400, damping: 40 })
  const outerY = useSpring(mouseY, { stiffness: 400, damping: 40 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isSelectable = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("group")

      const isText = 
        target.tagName === "P" || 
        target.tagName === "SPAN" || 
        target.tagName === "H1" || 
        target.tagName === "H2" || 
        target.tagName === "H3"

      if (isSelectable) {
        setCursorType("button")
        setIsHovering(true)
      } else if (isText) {
        setCursorType("text")
        setIsHovering(false)
      } else {
        setCursorType("default")
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Inner Core */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white z-[10000] mix-blend-difference will-change-transform"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.7 : 1,
          rotate: isHovering ? 45 : 0,
        }}
      />
      
      {/* Outer Technical Frame */}
      <motion.div
        className="fixed top-0 left-0 border border-white/50 z-[9999] mix-blend-difference will-change-transform"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 50 : (cursorType === "text" ? 2 : 26),
          height: isHovering ? 50 : (cursorType === "text" ? 34 : 26),
          rotate: isHovering ? 90 : 0,
          borderWidth: isHovering ? "2px" : "1px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {cursorType !== "text" && (
          <>
            <div className="absolute top-0 left-1/2 -track-x-1/2 w-[2px] h-1 bg-white/60" />
            <div className="absolute bottom-0 left-1/2 -track-x-1/2 w-[2px] h-1 bg-white/60" />
            <div className="absolute left-0 top-1/2 -track-y-1/2 h-[2px] w-1 bg-white/60" />
            <div className="absolute right-0 top-1/2 -track-y-1/2 h-[2px] w-1 bg-white/60" />
          </>
        )}
      </motion.div>

      {/* Simplified Trail */}
      <TrailingElement index={0} mouseX={mouseX} mouseY={mouseY} isHovering={isHovering} />
      <TrailingElement index={1} mouseX={mouseX} mouseY={mouseY} isHovering={isHovering} />

      {/* Click Feedback */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            initial={{ width: 0, height: 0, opacity: 1, rotate: 0 }}
            animate={{ width: 80, height: 80, opacity: 0, rotate: 45 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 border border-white/80 z-[9998] mix-blend-difference"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

function TrailingElement({ index, mouseX, mouseY, isHovering }: { index: number; mouseX: any; mouseY: any, isHovering: boolean }) {
  const x = useSpring(mouseX, { stiffness: 60 / (index + 2), damping: 25 })
  const y = useSpring(mouseY, { stiffness: 60 / (index + 2), damping: 25 })

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-1 bg-white/20 z-[9998] mix-blend-difference will-change-transform"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: isHovering ? 0 : 0.4,
      }}
    />
  )
}
