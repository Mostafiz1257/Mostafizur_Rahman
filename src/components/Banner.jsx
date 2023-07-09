import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook, FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
const Banner = () => {


    const [scrollDown, setScrollDown] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScrollDown(true)
            }
            else {
                setScrollDown(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const handleFacebookClick = () => {
        window.open('https://web.facebook.com/mostafiz.mostafiz.9216', '_blank');
    }

    const handleGithubClick = () => {
        window.open('https://www.linkedin.com/in/mostafizur-rahman-56a659125/', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/your-linkedin-page', '_blank');
    };

   
    return (
        <div id='banner' className=' w-1/2 mt-12 lg:px-12 sm:mx-5 flex flex-col space-y-6'>
            {
                scrollDown && (
                    <button onClick={scrollUp} className=' text-4xl text-cyan-500 fixed bottom-[200px] right-[50px] '><FaUpload></FaUpload> </button>
                )
            }


            <h1 className=' text-5xl font-bold' data-aos="fade-up"
                data-aos-anchor-placement="center-center">Hey, I am <span className=' text-cyan-500'> Mostafizur</span> Rahman.</h1>
            <div className=' text-3xl text-cyan-500' data-aos="fade-up"
                data-aos-anchor-placement="center-center">
                <Typewriter options={{
                    autoStart: true, loop: true, delay: 40, strings: [
                        "I am a Software Engineer...!",
                        "I am a Web Developer...!",
                        "I am a Full stack Developer...!",
                        "I am a Front End Developer...!"
                    ]
                }}>

                </Typewriter>
            </div>
            <p className=' text-xl font-bold w-full' data-aos="fade-up"
                data-aos-anchor-placement="center-center">I've been working with React and relevant technologies with a passion for developing interactive, dynamic web applications, and I'm particularly skilled at using React to produce engaging user interfaces.</p>
            <div className='flex '>
                <div>
                    <span>  <FaFacebook onClick={handleFacebookClick} className=' hover:text-cyan-500 cursor-pointer text-3xl mr-3 hover:cursor-pointer'></FaFacebook>
                    </span>

                </div>
                <span>   <FaGithub onClick={handleGithubClick} className=' hover:text-cyan-500 cursor-pointer text-3xl mr-3 hover:cursor-pointer'></FaGithub></span>
                <span>   <FaLinkedinIn onClick={handleLinkedInClick} className=' hover:text-cyan-500 cursor-pointer text-3xl hover:cursor-pointer'></FaLinkedinIn></span>
            </div>
            <div>
                {/* <button  className=' btn-non-color mr-3'>Contract</button> */}
                <button> <a className=' btn-non-color mr-3' href='#contract'>Contract</a></button>
               <Link className='btn-non-color' to='/resume.pdf' target='_blank' download> Resume</Link>
            </div>
        </div>
    );
};

export default Banner;