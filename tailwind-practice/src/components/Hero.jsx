import React from 'react'
import ImageSlider from './ImageSlider'
import ImageOne from '../assets/image-1.jpg'
import ImageTwo from '../assets/image-2.jpg'

const Hero = () => {
    const slides = [
        {url: ImageOne, title: 'beach'},
        {url: ImageTwo, title: 'boat'},
    ]
    
    return (
        <div>
            <div className='w-full h-[750px] my-0 mx-auto'>
                <ImageSlider slides={slides} />
            </div>

            <div className='w-full bg-teal-100 flex justify-around items-center px-32 py-12'>
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