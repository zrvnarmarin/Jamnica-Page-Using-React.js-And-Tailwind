import React from 'react'
import { navbarLinks } from '../constants'
import jamnicaLogo from '../assets/jamnicaLogo.webp'
import youtubeIcon from '../assets/youtube.svg'
import instagramIcon from '../assets/instagram.svg'
import facebookIcon from '../assets/facebook.svg'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between px-12 items-center bg-white'>
        <a href="#">
          <img
            className='h-[100px] '
            src={jamnicaLogo}
            alt="jamnica_logo"
        />
        </a>
        <div className='flex gap-8 justify-center items-center'>
          <ul className='list-none gap-10 flex tracking-wider'>
            {navbarLinks.map((link, i) =>
              <li
                key={i}
                className='font-poppins font-semibold text-teal-900 uppercase hover:underline'
              >
                <a href="#">{link.link}</a>
              </li>
            )}
          </ul>

          <div className='flex gap-8'>
            <a href="https://www.facebook.com">
              <img className='w-[24px] h-[24px] hover:scale-125' src={facebookIcon} alt="facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img className='w-[24px] h-[24px] hover:scale-125' src={instagramIcon} alt="instagram" />
            </a>
            <a href="https://www.youtube.com">
              <img className='w-[24px] h-[24px] hover:scale-125' src={youtubeIcon} alt="youtube" />
            </a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar