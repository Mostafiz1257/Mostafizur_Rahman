import React from 'react';
import { FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=' mx-auto mt-12 bg-cyan-600 text-white p-12'>
            <div className=' flex '>
                <div className=' flex mx-auto'>
                <span><FaGithub className=' text-3xl mr-2 cursor-pointer'></FaGithub></span>
                <span><FaWhatsapp className=' text-3xl mr-2 cursor-pointer'></FaWhatsapp></span>
                <span><FaFacebook className=' text-3xl cursor-pointer'></FaFacebook></span>
                </div>
            </div>
            <p className=' text-center mt-3'>© Copyright 2023 Mostafizur Rahman</p>
        </div>
    );
};

export default Footer;