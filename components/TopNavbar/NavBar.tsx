import React from 'react'
import Logo from './Logo';
import Link from 'next/link';

const NavBar = () => {
  const links = [
    { href: "/contributors", label: "Contribute" },
    { href: "/features", label: "Features" },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]
  return (
    <nav className="flex justify-between w-full p-8 align-middle fixed backdrop-opacity-90 backdrop-blur-sm bg-white/40">
      <Logo />
      <div className="flex space-x-8">
        {links.map(({ href, label }) => (
          <Link className='flex items-center' href={href} key={`${href}${label}`}>
            {label}
          </Link>
        )
        )}
      </div>
    </nav>
  )
}

export default NavBar