import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import { FaQuoteLeft } from "react-icons/fa";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";


const About = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            We're at the forefront of financial education, shaping a brighter future.  We offer innovative courses, leverage cutting-edge technology, and cultivate a thriving community to empower you on your financial journey.
            </p>
          </header>
          <div className="flex gap-x-3 mx-auto">
            <img src={BannerImage1} alt="no" />
            <img src={BannerImage2} alt="no" />
            <img src={BannerImage3} alt="no" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-250">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between text-richblack-250 gap-10">
          {/* Founding Story wala div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            {/* Founding Story ka left box */}
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%] text-justify">
              Our passion for financial literacy fueled the creation of this platform. We, a collective of financial experts and lifelong learners, saw the need for accessible, flexible, and high-quality financial education in today's dynamic world. Traditional methods often fall short, restricting knowledge by location and format. We envisioned a platform that empowers everyone to unlock their financial potential, regardless of background.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%] text-justify">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* Founding Story Right box */}
            <div>
              <img
                src={FoundingStory}
                alt="no"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>

          {/* Vision and Mission wala Parent div */}
          <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
            {/* Left Box */}
            <div className="mb-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%] text-justify">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* Right Box */}
            <div className="mb-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%] text-justify">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Section 4 */}
      <section>
        <StatsComponent />
      </section>

      {/* Section 5 */}
      <section className="mx-auto mt-24 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Section 6 */}
        <section>
            <div className="text-white">
              <h1 className='text-center text-4xl font-semibold mt-10 '>
              Review from Other Learners
              </h1>
                <ReviewSlider/>
            </div>
        </section>

        <Footer />
    </div>
  );
};

export default About;
