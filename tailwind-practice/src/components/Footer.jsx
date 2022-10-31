import React from 'react'
import JamnicaCorpLogo from '../assets/JamnicaCorpLogo.webp'
import FooterBootleImage from '../assets/footer-bottle.webp'

const Footer = () => {
  return (
    <div className='bg-[#193f30] pb-4'>
        <div className='p-4 bg-[#d5e7d4] pb-10'>
            <div className='flex justify-center items-center relative'>
                <img className='relative' src={JamnicaCorpLogo} alt="jamnica_corp_logo" />
            </div>
            <div className='flex justify-center border-b-2'>
                <p className='text-center font-poppins font-medium text-2xl border-b-1 border-[#124734] pb-6 text-[#124734]'>
                    Jamnica je besprijekorno čisto osvježavajuće piće pogodno za svakodnevnu upotrebu
                </p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-32'>
                <div className='flex flex-col sm:flex-row  gap-6 items-center font-poppins font-medium text-[#124734]'>
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