import React from 'react'
import Special from '../assets/specials.webp'
import StopwatchIcon from '../assets/stopwatch.svg'
import SettingsIcon from '../assets/settings.svg'
import BaconIcon from '../assets/bacon.svg'

const Specials = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around p-4 gap-4'>
        <div className='flex flex-col sm:flex-row py-12 gap-6'>

            <div className='rounded-2xl'>
                <img className='rounded-2xl w-full' src={Special} alt="specials" />
            </div>

            <div className='flex flex-col items-start justify-between gap-6'>
                <p className='text-2xl font-semibold text-red-600 uppercase font-poppins'>
                    Izdvojili smo ...
                </p>
                <a href="#">
                    <p className='font-poppins font-medium text-4xl text-[#124734]'>
                        <span className='font-semibold'>Mini košarice </span> 
                        od čokolade i <br /> kikiriki maslaca
                    </p>
                </a>
                <div className='flex flex-wrap border-2 gp-6 rounded-2xl w-full xs:justify-around md:justify-start lg:justify-around items-center py-4 px-3 font-poppins font-semibold text-sm'>
                    <span>
                        <span className='italic'>Ja </span>
                        Kreiram
                    </span>
                    <span className='flex items-center gap-2'>
                        <img className='w-[24px]' src={StopwatchIcon} alt="stopwatch"/> 
                        Preko 1h
                    </span>
                    <span className='flex items-center gap-2'>
                        <img className='w-[24px]' src={BaconIcon} alt="bacon" /> 
                        Desert
                    </span>
                    <span className='flex items-center gap-2'>
                        <img className='w-[24px]' src={SettingsIcon} alt="settings" /> 
                        Jednostavno
                    </span>
                </div>
                <p className='font-poppins text-xl text-[#2b2b2b] tracking-wider'>
                    Samo pet sastojaka, mikrovalna pećnica i zamrzivač – <br/> to je sve što trebate za ove ukusne male košarice.
                </p>
                <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                    <button className='w-full sm:w-[40%] rounded-2xl font-poppins text-base sm:text-xl font-semibold bg-green-900 text-white uppercase lg:px-2 px-4 py-2 sm:px-6 sm:py-4'>
                        Idi na recept
                    </button>
                    <p className='text-base flex items-center'>
                        <a href="#">
                            <span className='text-2xl px-2 text-red-600'>&#10230;</span>
                            Pogledaj sve recepte
                        </a>
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Specials