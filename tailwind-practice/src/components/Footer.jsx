import React from 'react'
import JamnicaCorpLogo from '../assets/JamnicaCorpLogo.webp'
import './footer.css'

const Footer = () => {
  return (
    <div className='bg-[#193f30] pb-4'>
        <div className='p-4 bg-[#d5e7d4] pb-10'>
            <div className='flex justify-center items-center relative'>
                <img className='relative z-[5]' src={JamnicaCorpLogo} alt="jamnica_corp_logo" />
                <div className='absolute z-[3] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-white to-white blur-[30px]' />
            </div>
            <div className='flex justify-center border-b-2'>
                <p className='text-center font-poppins font-medium text-2xl border-b-1 border-[#a0b1ab] pb-6 text-[#124734]'>
                    Jamnica je besprijekorno čisto osvježavajuće piće pogodno za svakodnevnu upotrebu
                </p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-32 pt-6'>
                <div className='flex flex-col sm:flex-row pt-14 sm:pt-0  gap-6 items-center font-poppins font-medium text-[#124734]'>
                    <p>Vijesti iz Jamnice</p>
                    <p>Kontakti</p>
                    <p>Izjava o privatnosti</p>
                    <p>Opći uvjeti</p>
                </div>
                <div className='flex items-center text-base text-[#124734]'>
                    <p className='text-center'>
                        © 2022. Jamnica plus d.o.o. Sva prava pridržana.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer