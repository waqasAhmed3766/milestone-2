import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-row gap-28 justify-center items-center '>
    <div className="my-[50px] mx-[50px]">
            <h3 className='font-semibold'>Hi, IT's me</h3>
            <h1 className='font-bold text-2xl'>Waqas Ahmed</h1>
            <h3 className='mt-3 font-semibold text-xl'>Front-end Webdeveloper</h3>
            <p className="my-2">
                I'm a passionate developer specializing in web development with a focus on creating dynamic and responsive applications. I love bringing ideas to life with code!.
            </p>

            <div className="my-10 mx-10">
                <button className='bg-blue-950 rounded-xl text-white py-3 px-3 hover:text-violet-600 hover:bg-white hover:text-xl hover:font-bold'>
                    Contact me
                </button>
            </div>

</div>
        <div className="my-[50px] mx-[50px]" >
            <Image src={'/waqas.jpeg'} alt={'waqas Image'} height={400} width={400} className='rounded-[50%]'/>
        </div>

        
    </div>
  )
}
