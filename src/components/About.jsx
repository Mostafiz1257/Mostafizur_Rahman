import React from 'react';

const About = () => {
  return (
    <>
     <div id ='about'>
     <p className=' text-4xl font-bold text-cyan-500 mx-12  my-12'>About <span className=' underline-offset-4 underline'>Me</span></p>
      <div className=' flex lg:px-12'>
        <div className=' w-1/2' data-aos="fade-right">
          <h1 className=' my-auto text-xl font-bold '> <span className=' text-4xl font bold text-cyan-500'>H</span>i there! I'm Mostafizur Rahman, currently I am studying computer science of Engineering in Green University of Bangladesh  and also I'm working with MERN technology with a solid foundation in full stack development and a deep understanding of javascript and React principles. My objective is to contribute to an innovative software development team, leveraging my skills to create engaging and user-friendly web applications.

            <br /> <br />
           More then 1 year I am exploring this web technology and I am working on this.I have completed a lot of full stack project and I includes some of in my project section. 🔗</h1>
        </div>
        <div className=' w-1/2 ' data-aos="fade-left">
          <img className='h-[400px] mx-auto border-l-4 border-t-4 border-cyan-500' src="https://i.ibb.co/t4fdQ33/mostafiz.jpg" alt="Profile Picture" />
        </div>
      </div>
     </div>
    </>
  );
};

export default About;