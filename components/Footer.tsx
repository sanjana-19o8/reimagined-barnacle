/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

export const Footer = () => {
    return (
        <footer id='contact' className='w-full pb-10 mb-[100px] md:mb-[20px]'>
            <div className='w-full absolute left-0 -bottom-72 min-h-96 overflow-clip'>
                <img src='/footer-grid.svg' alt="sanjana-vajr" className='w-full h-full opacity-50' />
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Reach out to <span className='text-purple'>me</span>
                </h1>
                <a href='mailto:sanjana.vajrapu19o8@gmail.com'>
                    <MagicButton
                        title="Send me a message"
                        icon={<FaLocationArrow />}
                        position='right' />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light mt-6'>&copy;sanjana-vajr</p>

                <div className='flex items-center md:gap-3 gap-6 mt-3'>
                    {socialMedia.map(({ id, img, link }) => (
                        <a key={id} href={link} target='_blank'>
                            <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300 rounded-lg'>
                                <img src={img} alt={img} width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
