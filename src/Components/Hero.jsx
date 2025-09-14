import React from 'react'
import heroImg from '../assets/profile.png'
import  SplitText  from '../effects/SplitText'
import TextType from '../effects/TextType'
import ScrollVelocity from '../effects/ScrollVelocity'
import About from './About'
import heroImg1 from '../assets/port.png'
import CountUp from '../effects/CountUp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin ,faSquareGit} from "@fortawesome/free-brands-svg-icons";
import { AiOutlineGithub } from "react-icons/ai"
import {IoLogoInstagram} from "react-icons/io5"
import Background from './Background'


function Hero() {
  return (
    <div className="relative mt-4 flex flex-col mb-0 space-x-6  justify-around text-center sm:px-0 overflow-hidden">
      
        <div className="absolute mt-32 bottom-0 top-12 ml-32 z-10">
          <img src={heroImg} alt="Hero" className="w-[360px] h-[500px]" />
        </div>
        <div className='flex flex-col justify-center space-y-8 items-center mt-64 ml-64'>
          <SplitText text="Hi, I'm Yukesh" className='text-8xl font-bold font-oswald'/>
          <TextType 
            text={["Full Stack Developer", "Graphic Designer", "Tech Enthusiast"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className='text-3xl font-medium text-[#ff0000] font-CourierPrime'
          />
          

          

        </div>
        <div className='absolute top-[500px]'>
          <ScrollVelocity
          texts={['Learn Collaborate Growth', 'Design Develop Deploy']}  
          className="custom-scroll-text mb-0"
          />
        </div>
        <div className=' w-screen h-[700px] bg-black mt-64'>
          <h1 className='text-6xl mt-10 font-oswald font-bold text-white'>About Me!</h1>
          <div className='flex flex-row justify-center items-center mt-10'>
            <div className="space-y-6 max-w-3xl text-left mb-24">
              <p className="text-lg font-CourierPrime text-white leading-relaxed">
                I’m a passionate <span className='text-[#ff0000]'>full-stack developer</span> with experience in building scalable web applications 
                using <span className='text-[#ff0000]'>React</span>, Flask, Node.js, and MongoDB/MySQL. I enjoy turning ideas into <span className='text-[#ff0000]'>real-world 
                projects</span> ranging from freelancing platforms to AI-powered applications. Currently, 
                I’m exploring <span className='text-[#ff0000]'>AI</span> integration, DevOps, and microservices to create smarter and more 
                efficient solutions.
              </p>

                    <p className="text-lg font-CourierPrime text-white leading-relaxed">
                      I regularly solve challenges on <span className=" text-[#ff0000]">LeetCode</span> to sharpen my coding skills. 
                      So far, I’ve tackled <span className="text-lg text-[#ff0000]">{<CountUp
                    from={0}
                    to={300}
                    separator=","
                    direction="up"
                    duration={30}
                    className="count-up-text"
                  />} </span> problems and improved my proficiency in 
                                  C++ and Python, focusing on efficient solutions and optimizing time/space complexity.
                    </p>

                    <div className="flex flex-row justify-center items-center space-x-12">
                        <a
                          href="https://github.com/Yukesh-30"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-red-500 text-3xl cursor-pointer"
                        >
                          <AiOutlineGithub />
                        </a>
                        <a
                          href="www.linkedin.com/in/yukesh-d-293235305"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-red-500 text-3xl cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                          href="#"
                          rel="noopener noreferrer"
                          className="text-white hover:text-red-500 text-3xl cursor-pointer"
                        >
                          <IoLogoInstagram />
                        </a>
                     </div>


            </div>
            <img src={heroImg1} alt="Hero" className="w-[450px] h-[650px] " />
          </div>
          
        </div>

        
        
        
          
          



       
     
      

    </div>
  )
}

export default Hero
