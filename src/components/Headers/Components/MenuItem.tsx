import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Menu item
const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
}

function MenuItem({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  )
}

export default MenuItem
