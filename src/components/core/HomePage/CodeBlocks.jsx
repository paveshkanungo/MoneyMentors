import React from 'react';
import CTAButton from './Button';
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor 
}) => {
  return (
    <div className={`flex ${position} my-20 sm:my-10 flex-col justify-between gap-10 ml-3 mr-3`}>

    {/* {Section*1} */}
    <div className='w-[100%] lg:w-[50%] flex flex-col gap-8'>
        {heading}

        {/* Sub Heading */}
        <div className='text-richblack-300 font-bold text-base w-[95%] sm:w-[85%] -mt-3'>
            {subheading} 
        </div>

        {/* Button Group */}
        <div className='flex gap-3 sm:gap-7 mt-4 sm:mt-7'>
        <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className='flex gap-2 items-center'>
                {ctabtn1.btnText}
                <FaArrowRight/>
            </div>
        </CTAButton>

        <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                {ctabtn2.btnText}
        </CTAButton>

        </div>
    </div>

    {/* {Section*2} */}
    <div className='h-fit code-border flex flex-row text-[10px] w-[100%] py-3 sm:text-sm leading-[18px] sm:leading-6 relative lg:w-[470px] first-letter:isolate rounded-xl bg-white/10 shadow-lg px-8'>
        {backgroundGradient}

        {/* Codes */}
        <div className={`w-[90%] flex flex-col gap-2 font-semibold font-mono text-lg ${codeColor} pr-1`}>
            <TypeAnimation 
                sequence={[codeblock, 2000, ""]}
                repeat={Infinity}
                cursor={true}
                style={
                    {
                        whiteSpace: "pre-line",
                        display: "block",

                    }
                }
                omitDeletionAnimation={true}
            />
        </div>

    </div>

    </div>
  )
}

export default CodeBlocks;
