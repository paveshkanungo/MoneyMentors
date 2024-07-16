import React from 'react';
import Instructor from "../../../assets/Images/Instructor.jpg";
import HighlightText from './HighlightText';
import CTAButton from "./Button";
import {FaArrowRight} from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className='mt-16'>
        <div className='flex flex-col lg:flex-row gap-20 items-center'>
            <div className='lg:w-[50%]'>
                <img src={Instructor} className='shadow-white shadow-[-20px_-20px_0_0]' alt='InstructorImage'/>
            </div>

            <div className='lg:w-[50%] flex gap-10 flex-col'>
                <div className='text-4xl font-semibold lg:w-[50%]'>
                    Become an
                    <HighlightText text={"Instructor"} />
                </div>

                <p className='font-medium text-[16px] text-justify w-[80%]text-richblack-300'>
                Financial experts from across the globe empower millions with financial literacy. We provide the tools and guidance to share your financial knowledge and passion.
                </p>

                <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
                </div>

            </div>

        </div>
    </div>
  )
}

export default InstructorSection