import { inter } from '@/app/fonts'
import React from 'react'

interface Headings {
    subheading: string,
    heading: string
}

const Headings: React.FC<Headings> = ({subheading, heading}) => {
  return (
    <div className=''>
        <div className='flex items-center gap-5'>
            <div className='bg-secondary w-5 h-10 rounded'></div>
            <h3 className='font-semibold text-secondary'>{subheading}</h3>
        </div>
        <h2 className={`${inter.className} font-semibold text-4xl mt-6`}>{heading}</h2>
    </div>
  )
}

export default Headings