import React from 'react'
import FirstGridImage from '../assets/gridImage.webp'
import SecondGridImage from '../assets/gridImageTwo.webp'

const OffersGrid = () => {
  return (
    <div className='flex flex-col gap-32 mt-16'>

      <div className='flex flex-wrap md:flex-column gap-6 sm:justify-start lg:justify-center px-4'>
        <div className='rounded-2xl'>
          <img className='rounded-2xl' src={FirstGridImage} alt="trip" />
        </div>

        <div className='flex flex-col gap-4 pt-4 items-start justify-start'>
          <p className='text-red-600 font-semibold font-poppins text-md'>
            29.08.2022.
          </p>
          <a href="#" className='text-green-900 font-poppins text-4xl font-semibold'>
            Osvoji put u Katar
          </a>
          <button className='sm:w-full lg:w-[70%] rounded-2xl font-poppins text-xl font-semibold bg-green-900 text-white uppercase lg:px-2 px-6 py-4'>
            Pročitaj više
          </button>
        </div>
      </div>

      <div className='flex flex-wrap md:flex-column gap-6 sm:justify-start lg:justify-center px-4'>
        <div className='rounded-2xl'>
          <img className='rounded-2xl' src={SecondGridImage} alt="trip" />
        </div>

        <div className='flex flex-col gap-4 pt-4 items-start justify-start'>
          <p className='text-red-600 font-semibold font-poppins text-md'>
            30.03.2022.
          </p>
          <a href="#" className='text-green-900 font-poppins text-4xl font-semibold'>
            Nezamjenjiva za <br/> uskrsnim stolom!
          </a>
          <button className='sm:w-full lg:w-[70%] rounded-2xl font-poppins text-xl font-semibold bg-green-900 text-white uppercase lg:px-2 px-6 py-4'>
            Pročitaj više
          </button>
        </div>
      </div>

    </div>
  )
}

export default OffersGrid