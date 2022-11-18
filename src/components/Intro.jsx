import React from 'react'
import Typewriter from 'typewriter-effect';

const Intro = () => {
    return (
        <>
        <div className='text-white flex flex-col justify-center items-start h-screen text-7xl  pl-40   '>
            <div className='h-screen flex flex-col justify-center absolute top-0 gap-1 font-bold '>
                <div className="">Hi,</div>
                <div className="">I'm <span className='hover:line-through'> Akash </span></div>
                <Typewriter 
                options={{
                    strings: ["Web Developer." , "UI-UX Designer."],
                    autoStart: true,
                    loop: true,
                }}
                /> 
            </div>
        </div>
        </>
    )
}

export default Intro