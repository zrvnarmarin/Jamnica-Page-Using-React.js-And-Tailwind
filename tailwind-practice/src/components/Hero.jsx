import React from 'react'
import ImageSlider from './ImageSlider'
import { slides } from '../constants/index'

const Hero = () => {
    return (
        <div>
            <div className='w-full h-[750px] my-0 mx-auto'>
                <ImageSlider slides={slides} />
            </div>

            <div className='w-full bg-teal-100 flex justify-around items-center px-32 py-8'>
                <p className='uppercase text-3xl font-bold tracking-normal text-teal-900'>
                    Zadnje vijesti iz Jamnice
                </p>
                <button 
                    className='rounded-[12px] text-teal-900 uppercase text-xl font-semibold border-2 border-teal-900 p-4 hover:text-red-600'
                >
                    <span className='px-2 text-red-600'>&#10230;</span>
                    Otvori sve vijesti
                </button>
            </div>
        </div>
  )
}

export default Hero