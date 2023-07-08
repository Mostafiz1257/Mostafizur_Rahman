import React from 'react';

const ShowSkills = ({skill}) => {
    
    return (
        <div className=' cursor-pointer flex mx-auto hover:scale-110 transition duration-200'>
            <div >
            <img  className=' w-16 object-cover rounded' src={skill.picture} alt="" />
            {/* <p className=' text-center'>{skill.name}</p> */}
            </div>
        </div>
    );
};

export default ShowSkills;