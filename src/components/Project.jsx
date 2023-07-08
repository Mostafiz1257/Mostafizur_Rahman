import React from 'react';

const Project = () => {
    const projectOneLive = () => {
        window.open('https://easy-language-b28c4.web.app/', '_blank');
    }

    const projectOneClient = () => {
        window.open('https://github.com/Mostafiz1257/easy-language-client/', '_blank');
    };

    const projectOneServer = () => {
        window.open('https://github.com/Mostafiz1257/easy-language-server', '_blank');
    };
    const projectTwoLive = () => {
        window.open('https://educational-toy.web.app/', '_blank');
    }

    const projectTwoClient = () => {
        window.open('https://github.com/Mostafiz1257/educational-toys-client', '_blank');
    };

    const projectTwoServer = () => {
        window.open('https://github.com/Mostafiz1257/educational-toys-server', '_blank');
    };
    const projectThreeLive = () => {
        window.open('https://the-chef-client-5dc25.web.app/', '_blank');
    }

    const projectThreeClient = () => {
        window.open('https://github.com/Mostafiz1257/the-chef-client', '_blank');
    };

    const projectThreeServer = () => {
        window.open('https://github.com/Mostafiz1257/the-chef-server', '_blank');
    };

    return (
        <div id='project'>
            <h1 className=' text-4xl font-bold my-12 lg:mx-12 text-cyan-500'><span>My <span className=' underline-offset-4 underline'>Projects</span> </span> <span></span></h1>
            <div className=' grid md:grid-cols-3 gap-4 mx-12' >
                <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                    <img
                        src='https://i.ibb.co/hcBzYRL/p1.jpg'
                        alt='book cover'
                        className='object-cover w-full h-56 md:h-64 xl:h-80'
                    />

                    <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <button onClick={projectOneLive} className=' btn-non-color'>Live Link</button>
                        <br />
                        <button onClick={projectOneClient} className=' btn-non-color'>Client Code</button>
                        <br />
                        <button onClick={projectOneServer} className=' btn-non-color'>Server Code</button>
                    </div>
                </div>
                <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                    <img
                        src='https://i.ibb.co/9nVHBqG/p2.jpg'
                        alt='book cover'
                        className='object-cover w-full h-56 md:h-64 xl:h-80'
                    />

                    <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <button onClick={projectTwoLive} className=' btn-non-color'>Live Link</button>
                        <br />
                        <button onClick={projectTwoClient} className=' btn-non-color'>Client Code</button>
                        <br />
                        <button onClick={projectTwoServer} className=' btn-non-color'>Server Code</button>
                    </div>
                </div>
                <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <img
                        src='https://i.ibb.co/5kf7HLD/p3.jpg'
                        alt='book cover'
                        className='object-cover w-full h-56 md:h-64 xl:h-80'
                    />

                    <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <button onClick={projectThreeLive} className=' btn-non-color'>Live Link</button>
                        <br />
                        <button onClick={projectThreeLive} className=' btn-non-color'>Client Code</button>
                        <br />
                        <button onClick={projectThreeServer} className=' btn-non-color'>Server Code</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;