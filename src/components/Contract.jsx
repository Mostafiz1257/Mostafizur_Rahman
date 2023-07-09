import React from 'react';
import { FaGithub, FaWhatsapp, FaRocket,FaFacebook } from "react-icons/fa";
import Swal from 'sweetalert2';


const Contract = () => {
    const handleMessage = (event) => {
        event.preventDefault();
        Swal.fire('Message Sent Successfully')
        event.target.reset();
    }

    const handleFacebookClick = () => {
        window.open('https://web.facebook.com/mostafiz.mostafiz.9216', '_blank');
    }

    const handleLinkdin = () => {
        window.open('https://www.linkedin.com/in/mostafizur-rahman-56a659125/', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/your-linkedin-page', '_blank');
    };

    return (
        <>
            <div id='contract'>
                <h1 className=' text-4xl font-bold my-12 lg:mx-12 text-cyan-500'><span>Get in <span className=' underline-offset-4 underline'>Touch</span> </span> <span></span></h1>
                <div className='grid lg:grid-cols-2 lg:mx-12 gap-8 text-xl font-bold' data-aos="fade-up"
                    data-aos-anchor-placement="center-center">
                    <form onSubmit={handleMessage}>
                        <div className='grid '>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered input-accent w-full " required /> <br />
                            <input type="email" placeholder="Email" name='email' className="input input-bordered input-accent w-full" required /> <br />
                            <input type="message" placeholder="Message" name='message' className="input input-bordered input-accent w-full h-[100px] " required /> <br />
                            <button className=' btn-color'> Send </button>
                        </div>
                    </form>
                    <div className=' space-y-5' data-aos="fade-up"
                        data-aos-anchor-placement="center-center">

                        <p className=' w-3/4'>Here is a good spot for a message to your readers to let them know how best to reach out to you.</p>

                        <div className=' grid space-y-4'>
                            <div  className=' flex  hover:text-cyan-500 cursor-pointer'>
                                <span><FaRocket className=' text-3xl mr-3'></FaRocket></span>
                                <span>mostafiz.cse.1257@gmail.com</span>
                            </div>
                            <div className=' flex hover:text-cyan-500 cursor-pointer'> <span><FaWhatsapp className=' text-3xl mr-3'></FaWhatsapp></span> <span>+8801672589498</span></div>
                            <div onClick={handleFacebookClick} className=' flex my-auto  hover:text-cyan-500 cursor-pointer'><span className=' text-3xl mr-3'><FaFacebook></FaFacebook> </span> mostafiz1257</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contract;