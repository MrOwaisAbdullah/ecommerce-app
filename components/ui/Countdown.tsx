import React from 'react'
import {poppins, inter} from '../../app/fonts'

const Countdown = () => {
  return (
    <div className={`${inter.className} gap-4 flex items-end`}>
        <div>
            <h4 className={`${poppins.className} text-xs font-medium items-center justify-center `}>Days</h4>
            <h3 className={`${inter.className} text-4xl font-bold items-center justify-center`}>03</h3>
        </div>
        <h4 className='text-secondary text-4xl font-semibold mt-5'>:</h4>
        <div>
            <h4 className={`${poppins.className} text-xs font-medium items-center justify-center `}>Hour</h4>
            <h3 className={`${inter.className} text-4xl font-bold items-center justify-center`}>23</h3>
        </div>
        <h4 className='text-secondary text-4xl font-semibold mt-5'>:</h4>
        <div>
            <h4 className={`${poppins.className} text-xs font-medium items-center justify-center `}>Minutes</h4>
            <h3 className={`${inter.className} text-4xl font-bold items-center justify-center`}>19</h3>
        </div>
        <h4 className='text-secondary text-4xl font-semibold mt-5'>:</h4>
        <div>
            <h4 className={`${poppins.className} text-xs font-medium items-center justify-center `}>Seconds</h4>
            <h3 className={`${inter.className} text-4xl font-bold items-center justify-center`}>56</h3>
        </div>

        
    </div>
  )
}

export default Countdown