"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`inline-block ${className}`}
    >
      <Image
        src="/trct_logo.png"
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
