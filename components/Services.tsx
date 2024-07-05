/* eslint-disable @next/next/no-img-element */
import { services, skills } from '@/data'
import React from 'react'
import { Button } from './ui/Button'

const Services = () => {
    return (
        <div id='services' className='py-20'>
            <h1 className='heading'>
                What Can I {' '}
                <span className='text-purple'>Offer</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {services.map(({ id, title, className, desc, thumbnail }) => (
                    <Button
                        key={id}
                        duration={Math.floor(Math.random() * 10000 + 10000)}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                        <div className='flex lg:flex-row flex-col  lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={thumbnail} alt='' className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:tet-2xl font-bold'>
                                    {title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
            <div className='flex flex-wrap w-full items-center justify-center mt-8 gap-4 md:gap-16'>
                {skills.map(({ id, name, img, nameImg }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5' />
                        {nameImg ? <img src={nameImg} alt={name} className='md:w-24 w-20' />
                        : <p className='text-white  lg:text-xl text-sm flex items-center'>{name}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services