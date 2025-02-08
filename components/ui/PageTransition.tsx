'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface ChildrenProps {
  children: ReactNode
}

const PageTransition: React.FC<ChildrenProps> = ({
  children,
}: {
  children: ReactNode
}) => {
  const pathName = usePathname()
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          className="h-screen w-screen fixed top-0 pointer-events-none primary-background-color"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
