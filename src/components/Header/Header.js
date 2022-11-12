import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div className='w-screen h-28 bg-skyblue-50   flex px-3 md:px-0'>
    <div className='w-screen md:w-1/4   place-items-center grid   h-28 '>
        <div className=' h-8 text-skyblue-50 '>
            <Link to="/">

            <span className='text-xl text-white font-bold'>BROTOTYPE</span> 
            </Link>
     
        </div>
    </div>
    <div className='w-screen md:w-1/4 grow  place-items-center grid   h-28 '>
        <div className=' h-8 text-skyblue-50 '>
        
        </div>
        
       


    </div>
    <div className='w-screen md:w-1/4   place-items-center grid   h-28 '>
        <div className=' h-8 '>
            <Link to="/Login">
            <span className='text-xl text-white font-bold'>LOGIN</span> 
            </Link>
          
           <span className='text-xl  text-white font-bold'>&nbsp;/&nbsp;</span> 
           <Link to="/register">
           <span className='text-xl text-white font-bold'>REGISTER</span> 
           </Link>

        </div>
        
       


    </div>
    {/* header ended */} </div>
  )
}

export default Header