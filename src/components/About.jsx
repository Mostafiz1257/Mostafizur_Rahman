import React from 'react';

const About = () => {
  return (
    <>
     <div id ='about'>
     <p className=' text-4xl font-bold text-cyan-500 mx-12  my-12'>About <span className=' underline-offset-4 underline'>Me</span></p>
      <div className=' flex lg:px-12'>
        <div className=' w-1/2'>
          <h1 className=' my-auto text-xl font-bold '>Hi there! I'm Abdul Ahad, currently a student of National Institute of Textile Engineering and Research (NITER) in the Department of Industrial and production engineering(IPE). As of now, I am in level-3, term-2. I'm working with React with a solid foundation in front-end development and a deep understanding of javascript and React principles. My objective is to contribute to an innovative software development team, leveraging my skills to create engaging and user-friendly web applications.

            <br /> <br />
            I have a great desire to learn about new technologies, and I enjoy spending time in solving complicated problems. With a curious mindset and a drive for continuous improvement, I like the opportunity to tackle complex issues and expand my knowledge. With expertise in JavaScript, HTML, and CSS, as well as knowledge of modern web development frameworks, I possess the necessary tools to implement React components and build interactive interfaces. 🔗</h1>
        </div>
        <div className=' w-1/2 '>
          <img className='h-[400px] mx-auto border-l-4 border-t-4 border-cyan-500' src="https://i.ibb.co/t4fdQ33/mostafiz.jpg" alt="Profile Picture" />
        </div>
      </div>
     </div>
    </>
  );
};

export default About;