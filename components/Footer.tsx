import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center  w-full '>
        <h1 className='text-5xl font-bold text-center p-5 m-4 w-1/2'>Ready to take 
      <span className='text-purple-500'> your</span>  digital presence to the next level?</h1>

      <p>Reach out to me today and let's discuss how I can help you to achive your goals</p>
    </div>
       <div className="flex items-center justify-center w-full p-5 ">
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block ">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 text-2xl ">
          <span>{`Let's get in touch`}</span>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      </div>
    <div className='w-full h-20 dark:bg-black bg-white dark:text-white text-black flex items-center justify-center'>
    <div className='w-full h-20  flex items-center justify-start px-4'>
     <h1>Copyright &copy; 2024 sapana</h1> 
    </div>
    <div className='w-full h-50  flex items-center justify-end px-4 gap-2'>
    
    
    <FaGithub className='h-8 w-8 border rounded-2xl p-2' />
    <FaLinkedin className='h-8 w-8 border rounded-2xl p-2'/>
    <FaTwitter className='h-8 w-8 border rounded-2xl p-2'/>

    </div>
    </div>
    </>
  )
}

export default Footer
