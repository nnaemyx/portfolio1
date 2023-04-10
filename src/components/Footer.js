import React from 'react'
import Layouts from './Layouts'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full sm:text-base  border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg'>
      <Layouts className='py-8 lg:flex-col lg:py-6 flex items-center justify-between'>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className='flex items-center lg:py-2'>
          <Link href="/">EdehJohnpaul</Link>
          <Link href="/">Say Hello</Link>

        </div>
      </Layouts>

    </footer>
  ) 
    
}

export default Footer