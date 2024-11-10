import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='bg-blue-900 h-[200px] w-full flex justify-center'>

            <ul className='flex gap-x-10 items-center text-white font-bold cursor-pointer 
            flex-col gap-y-5 lg:flex-row mt-5'>

                  <Link href={"https://www.linkedin.com/in/waqas-ahmed-7977aa280/"} className='hover:text-blue-300'>LinkedIn</Link>

                  <Link href={"https://github.com/waqasAhmed3766"}
                  className='hover:text-blue-300'>GitHub</Link>
                  
                  <Link href={"https://www.facebook.com/"} className='hover:text-blue-300'>Facebook</Link>
            </ul>

        </footer>
    </div>
  )
}

export default Footer