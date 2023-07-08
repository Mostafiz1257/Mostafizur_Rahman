import React from 'react';
import { FaGithub  ,FaWhatsapp, FaRocket} from "react-icons/fa";


const Contract = () => {
  
    
    return (
        <>
            <div id='contract'>
            <h1 className=' text-4xl font-bold my-12 lg:mx-12 text-cyan-500'><span>Get in <span className=' underline-offset-4 underline'>Touch</span> </span> <span></span></h1>
            <div className='grid lg:grid-cols-2 lg:mx-12 gap-8 text-xl font-bold'>
                <div className='grid '>
                    <input type="text" placeholder="Name" className="input input-bordered input-accent w-full " required /> <br />
                    <input type="email" placeholder="Email" className="input input-bordered input-accent w-full" required /> <br />
                    <input type="message" placeholder="Message" className="input input-bordered input-accent w-full h-[100px] " required /> <br />
                    <button className=' btn-color'> Send </button>
                </div>
                <div className=' space-y-5'>

                    <p className=' w-3/4'>Here is a good spot for a message to your readers to let them know how best to reach out to you.</p>

                    <div className=' grid space-y-4'>
                       <div className=' flex  hover:text-cyan-500 cursor-pointer'>
                        <span><FaRocket className=' text-3xl mr-3'></FaRocket></span>
                       <span>mostafiz.cse.1257@gmail.com</span>
                       </div>
                       <div className=' flex hover:text-cyan-500 cursor-pointer'> <span><FaWhatsapp className=' text-3xl mr-3'></FaWhatsapp></span> <span>+8801672589498</span></div>
                        <div className=' flex my-auto  hover:text-cyan-500 cursor-pointer'><span className=' text-3xl mr-3'><FaGithub></FaGithub> </span> mostafiz1257</div>
                    </div>

                </div>
            </div>
            </div>
        </>
    );
};

export default Contract;