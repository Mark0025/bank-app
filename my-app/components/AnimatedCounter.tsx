'use client';
import React from 'react'
import CountUp from 'react-countup';
const AnimatedCounter = ({amount}: {amount: number}) => {
    return (
        <div className='w-full'>
        $<CountUp
        decimal="."
        decimals={2}
        duration={2.75}
        separator=","
        start={0}
       
        end={amount} />
         </div>
    )
}

export default AnimatedCounter