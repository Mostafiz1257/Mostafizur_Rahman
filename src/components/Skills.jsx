import React, { useEffect, useState } from 'react';
import './skills.css'
import ShowSkills from './ShowSkills';
const Skills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <>
           <div id='skills' >
           <h1 className=' text-4xl font-bold my-12 lg:mx-12 text-cyan-500'><span>My <span className=' underline-offset-4 underline'>Skills</span> </span> <span></span></h1>
            <div  className=' mx-12'>
                <div className=' grid  md:grid-cols-4 gap-3 ' data-aos="zoom-out-down">
                    {
                        skills.map((skill, index) => <ShowSkills key={index} skill={skill}></ShowSkills>)
                    }
                </div>
            </div>
           </div>
        </>
    );
};

export default Skills;