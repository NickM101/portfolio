import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
   <header
   className='w-full px-32 py-8 font-medium flex items-center justify-between'
   >
    <nav>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
    </nav>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
    </nav>
   </header>
  )
}

export default NavBar