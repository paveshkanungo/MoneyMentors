import React from 'react'

// Icons Import
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"

// Component Imports
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
  return (
    <div>
        {/* {Section*1} */}
        <div className='relative mx-auto flex flex-col lg:w-11/12 md:w-full  items-center text-white justify-between gap-8 max-w-maxContent'>
            {/* Become a Instructor Button */}
            <Link to={"/signup"}>
                <div className='group mt-16 lg:p-1 md:p-0 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-25 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 w-fit hover:drop-shadow-none'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 sm:px-5 py-[5px] transition-all duration-200 group-hover:bg-richblack-800'>
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>

            {/* Heading */}
            <div className='text-center text-4xl p-1 font-semibold'>
                Empower Your Future with 
                <HighlightText text={"Financial Skills"}/>
            </div>

            {/* Sub Heading */}
            <div className='-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300 '>
            Master financial concepts at your own pace, from anywhere. Gain practical skills through real-world simulations, interactive quizzes, and personalized guidance from financial experts.
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>

            {/* Video */}
            <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 '>
                <video 
                className=""
                muted
                loop
                autoPlay
                >
                <source src={Banner} type="video/mp4" />
                </video>
            </div>

            {/* {CodeSection*1} */}
            <div>
                <CodeBlocks 
                    position={"sm:flex-row"} 
                    heading={
                        <div className='text-4xl font-semibold '>
                            Unlock Your 
                            <HighlightText text={"Financial Savvy"}/> with our online courses
                        </div>
                    }
                    subheading={
                        "Our courses are crafted and delivered by financial veterans with deep industry experience, passionate about empowering you with financial knowledge."
                    }
                    ctabtn1={
                        {
                            btnText: "Try it Yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }
                    }
                    codeColor={"text-yellow-25"}
                    codeblock={`Build a Brighter Future\nStart Learning Today\n Take control with our courses\nInvest in yourself\nLearn from experts\nGet clear, actionable steps\nBuild financial security\nEmpower your future\nLet's get started\nJoin Now`}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                />
            </div>

            {/* {CodeSection*2} */}
            <div>
                <CodeBlocks 
                    position={"sm:flex-row-reverse"} 
                    heading={
                        <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                            Master your 
                            <HighlightText text={"Finances in minutes"} />
                        </div>
                    }
                    subheading={
                        "No prior knowledge needed. Learn finance through real-world examples. Dive in and start learning! Apply financial concepts right away."
                    }
                    ctabtn1={
                        {
                            btnText: "Continue Lesson",
                            linkto: "/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/signup",
                            active: false,
                        }
                    }

                    codeColor={"text-white"}
                    codeblock={`Build a Brighter Future\nStart Learning Today\n Take control with our courses\nInvest in yourself\nLearn from experts\nGet clear, actionable steps\nBuild financial security\nEmpower your future\nLet's get started\nJoin Now`}
                    backgroundGradient={<div className="codeblock2 absolute"></div>}
                />
            </div>

            <ExploreMore />
        </div>


        {/* {Section*2} */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>

        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto '>
                    
                <div className='h-[150px]'></div>
                <div className='flex flex-row gap-7 text-white'>
                    <CTAButton active={true} linkto={"/>signup"}>
                    <div className='flex items-center gap-3'>
                        Explore Full Catalog
                        <FaArrowRight/>
                    </div>
                    </CTAButton>

                    <CTAButton active={false} linkto={"/>signup"}>
                    <div>
                        Learn More
                    </div>
                    </CTAButton>
                </div>

        </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-7 '>
                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold w-[50%]'>
                        Make smarter money decisions, gain 
                        <HighlightText text={"financial confidence"}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[50%] items-start'>
                    <div className='text-[16px]'>
                    The financial landscape is constantly evolving. Today's successful individuals prioritize financial literacy alongside professional skills.
                    </div>

                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn More
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                {/* Timeline Section - Section 2 */}
                <TimelineSection/>

                {/* Learning Language Section - Section 3 */}
                <LearningLanguageSection/>

            </div>

        </div>


        {/* {Section*3} */}
        <div className='lg:w-11/12 md:w-full mx-auto max-w-maxContent flex-col items-center gap-8 justify-between first-letter bg-richblack-800 text-white'>
            {/* Become a instructor section */}
            <InstructorSection />

            {/* Reviews from Other Learner */}
            <h1 className='text-center text-4xl font-semibold mt-10 '>
            Review from Other Learners
            </h1>

            {/* Review Slider Here */}
            <ReviewSlider/>
        </div>

        {/*{Footer} */}
        <Footer />
        
    </div>
  )
}

export default Home;
