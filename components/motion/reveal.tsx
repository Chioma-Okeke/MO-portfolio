"use client"

import { motion, MotionConfig, type Variants } from "motion/react"

const ease = [0.22, 1, 0.36, 1] as const

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // Honour the OS "reduce motion" setting everywhere
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

/** Fades + lifts its children in once they scroll into view. */
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

/** Reveals each <StaggerItem> child one after another. */
export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}

/** Slow image reveal - a soft clip from the bottom with a slight settle. */
export function ImageReveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 1.4, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
