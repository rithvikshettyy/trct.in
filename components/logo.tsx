"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95, rotate: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`inline-block ${className}`}
    >
      <Image
        src="/trct_logo-bg.png"
        alt="The Run Club Thane Logo"
        width={200}
        height={67}
        className="object-contain"
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </motion.div>
  )
}
