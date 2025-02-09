'use client'

import Link from 'next/link'

const socials = [
  {
    icon: 'pi-linkedin',
    path: 'https://www.linkedin.com/in/mateusoliveira469/',
  },
  { icon: 'pi-github', path: 'https://github.com/MGHM97' },
  { icon: 'pi-instagram', path: 'https://www.instagram.com/mateusghmaster/' },
  { icon: 'pi-whatsapp', path: 'https://wa.me/5592988284486' },
]

const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link target="_blank" key={index} href={item.path}>
            <i className={`pi ${item.icon} outlined-button`}></i>
          </Link>
        )
      })}
    </div>
  )
}

export default Social
