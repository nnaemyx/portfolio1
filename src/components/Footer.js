import React from 'react'
import Layouts from './Layouts'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg'>
      <Layouts className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <Link href="/">EdehJohnpaul</Link>
        <Link href="/">Say Hello</Link>
      </Layouts>

    </footer>
  ) 
    
}

export default Footer