import React, { } from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
const Banner = () => {
    const handleFacebookClick = () => {
        window.open('https://web.facebook.com/mostafiz.mostafiz.9216', '_blank');
    }

    const handleGithubClick = () => {
        window.open('https://www.linkedin.com/in/mostafizur-rahman-56a659125/', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/your-linkedin-page', '_blank');
    };

    const handleResumeClick = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/16r5ynowc992cCRlIrywXkVbVN-cgLzPD/view?usp=drive_link';
        link.download = 'Resume.pdf';
        link.click();
    };
    return (
        <div className=' w-1/2 mt-12 lg:px-12 sm:mx-5 flex flex-col space-y-6'>
            <h1 className=' text-5xl font-bold'>Hey, I am <span className=' text-cyan-500'> Mostafizur</span> Rahman.</h1>
            <h3 className=' text-3xl font-bold text-cyan-500'>I am a MERN stack Developer</h3>
            <p className=' text-xl font-bold w-full'>I've been working with React and relevant technologies with a passion for developing interactive, dynamic web applications, and I'm particularly skilled at using React to produce engaging user interfaces.</p>
            <div className='flex '>
                <div>
                    <span>  <FaFacebook onClick={handleFacebookClick} className=' hover:text-cyan-500 cursor-pointer text-3xl mr-3 hover:cursor-pointer'></FaFacebook>
                    </span>

                </div>
                <span>   <FaGithub onClick={handleGithubClick} className=' hover:text-cyan-500 cursor-pointer text-3xl mr-3 hover:cursor-pointer'></FaGithub></span>
                <span>   <FaLinkedinIn onClick={handleLinkedInClick} className=' hover:text-cyan-500 cursor-pointer text-3xl hover:cursor-pointer'></FaLinkedinIn></span>
            </div>
            <div>
                <button className=' btn-non-color mr-3'>Contract</button>
                <button  onClick={handleResumeClick} className='btn-non-color'>Resume</button>
            </div>
        </div>
    );
};

export default Banner;