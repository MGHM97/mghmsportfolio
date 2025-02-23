'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ProfilePic = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
        className="w-full h-full flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
        >
          <Image
            src="/assets/profile-pic.png"
            priority
            quality={100}
            fill
            alt="Profile Picture"
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute"
          viewBox="0 0 506 506"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00f2de"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['25 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default ProfilePic
