"use client"
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import Lottie from "react-lottie"
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo as GridGlobe } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  const leftLists = ['Next.Js', "React.js", "Web3.js"]
  const rightLists = ['Solidity', "Python", "Javascript"]

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('sanjanavajrapu19@gmail.com')

    setCopied(true)
  }
  // console.log("BentoGrid ClassName: ", className)
  return (
    <div
      className={cn(className,
        "row-span-1 relative rounded-3xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white/[0.1]"
      )}
      style={{
        background: 'rgb(2,0,36) ',
        backgroundColor: 'linear-gradient (90deg, rgba(2,0,36, 1) 0%, rgba (59,59,68,1) 26%, rgba (93,108,111,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex jusify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img &&
            <img src={img} alt={img}
              className={cn(imgClassName, 'object-cover object-center')} />
          }
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg &&
            <img src={spareImg} alt={spareImg}
              className='object-cover object-center w-full h-full' />
          }
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-80 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-80 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  }
                }} />
              </div>

              <MagicButton 
               title={copied ? 'Email copied' : 'Copy my email'} 
               icon={<IoCopyOutline />} 
               position='left' 
               otherClasses="!bg-[#161a31]"
               handleClick={handleCopy} 
               />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
