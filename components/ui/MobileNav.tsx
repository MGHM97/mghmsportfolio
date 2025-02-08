'use client'

import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

const MobileNav = () => {
  const pathName = usePathname()

  const [visibleRight, setVisibleRight] = useState<boolean>(false)

  return (
    <div>
      <Button icon="pi pi-bars" onClick={() => setVisibleRight(true)} />
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        style={{
          backgroundColor: '#1c1c22',
          fontFamily: 'ubuntu',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        <div className="mt-32 mb-40 text-center text-3xl">
          <Link href="/">
            <h1>
              Mateus
              <span className="header-name-dot-color"> .</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {routes.map((route, index) => {
            return (
              <Link
                key={index}
                href={route.path}
                className={`${route.path === pathName && 'header-name-dot-color border-b-2'} nav-item capitalize font-medium`}
              >
                {route.name}
              </Link>
            )
          })}
        </nav>
      </Sidebar>
    </div>
  )
}

export default MobileNav
