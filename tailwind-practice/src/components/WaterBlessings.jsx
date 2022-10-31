import React from 'react'
import SearchIcon from '../assets/search.svg'

const WaterBlessings = () => {
  return (
    <div className='md:px-72 px-4 mt-20 bg-[#ebf4eb] flex flex-col items-center justify-center text-center mb-9'>
        <div className='my-16 text-4xl sm:text-6xl md:text-8xl font-extrabold text-[#ddebd2] font-poppins'>
            <p>Blagodati vode</p>
        </div>

        <div className='font-poppins text-[#193f30] text:2xl sm:text-3xl tracking-wide font-semibold uppercase mb-10'>
            Uz svaki obrok
        </div>

        <div className='font-poppins tracking-wide text-md md:text-lg font-thin flex flex-col items-center gap-6'>
            <p className=''>
                Naše uživanje u hrani često je ograničeno brojanjem kalorija koje unosimo u organizam. Međutim, vrlo često zaboravljamo
                da dodatne kalorije unosimo i pićima koja konzumiramo uz obrok. Upravo zato prirodna mineralna voda idealan je izbor 
                jer...
                <span className='text-red-600 underline text-semibold'>
                    <a href="#"> Nastavi čitati</a>
                </span>
            </p>
            <p className=''>
                Jamnica je idealno piće uz svaki obrok, a sada vas može spojiti s idealnim receptima. Jede li vam se možda 
                <span className='text-red-600 underline text-semibold'>
                    <a href=""> GLAVNO JELO</a> 
                </span> ili 
                <span className='text-red-600 underline text-semibold'>
                    <a href=""> DESERT</a>
                </span>?
            </p>
            <p className=''>
                Jamnica ima upravo ono što vam treba. Samo…
            </p>
            <div className='bg-white flex pr-4 w-full ss:w-[70%] rounded-2xl mb-16 shadow-2xl'>
                <input type="text" className='w-full rounded-md p-4 m-3' />
                <img 
                    className='w-[24px] cursor-pointer' 
                    src={SearchIcon} 
                    alt="search_icon" 
                />
            </div>
        </div>
    </div>
  )
}

export default WaterBlessings