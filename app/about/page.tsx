import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1000px] mx-auto md:py-24 py-12'>
      <h1 className='md:text-5xl text-4xl font-bold Heading text-center pb-7'>
        Page Under Development!
      </h1>
      <p className='text-2xl text-center tracking-widest leading-10 mb-10'>
        We are working hard to bring you an amazing experience.<br/>Thank you for your patience!
      </p>

      <div className='w-full'>
        <Image 
          src={"/under-dev.webp"} 
          alt="Under Development Image" 
          height={1000} 
          width={1000} 
        />
      </div>
    </div>
  )
}

export default About
