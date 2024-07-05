/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3DPin'
import { title } from 'process'
import { FaLocationArrow } from 'react-icons/fa'

const Projects = () => {
    return (
        <div id='projects' className='py-20'>
            <h1 className='heading'>
                Check out my {' '}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24">
                {projects.map((project) => (
                    <div key={project.id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer
                            title={project.title}
                            href={project.link}
                        >
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:[40vh] h-[32vh] mb-10 overflow-hidden'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162e]'>
                                    <img src='/bg.png' alt='' />
                                    <img src={project.img} alt={project.title} className='z-10 absolute top-0' />
                                </div>
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {project.title}
                            </h1>
                            <p className='lg:text-l lg:font-normal font-light text-sm line-clamp-2'>
                                {project.des}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center justify-center'>
                                    {project.iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className='border borderwhite/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{
                                                transform: `translateX(-${10 * index}px)`,
                                            }}>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex items-center justify-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Link</p>
                                    <FaLocationArrow className='ms-3' color='#cbacf9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects