'use client'

import ProfilePic from '@/components/ui/ProfilePic'
import Social from '@/components/ui/Social'
import Stats from '@/components/ui/Stats'
import { Button } from 'primereact/button'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  }, [])
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Front-end Developer</span>
            <h1 className="main-h1 mb-6">
              Hello I&apos;m <br />
              <span className="header-name-dot-color">Mateus Vieira</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Front-end developer with 3 years of experience in React, Vue.js,
              and API integrations. Skilled in JavaScript, TypeScript, and agile
              methodologies, with a Full Stack certification and fluency in
              English.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                type="button"
                label="DOWNLOAD CV"
                icon="pi pi-download"
                className={`transition-opacity duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                } outlined-button`}
              />
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfilePic />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
