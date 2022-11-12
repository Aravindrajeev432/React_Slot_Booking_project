import React from 'react'
import Header from '../Header/Header'
import homeimg1 from '../../../src/image/homescreen1.png';
import homeimg2 from '../../../src/image/homescreen2.png';
import homeimg3 from '../../../src/image/homescreen3.png';
import homeimg4 from '../../../src/image/homescreen4.png';

import './Home.css';

function Home() {
    return (
        <div className='w-screen h-screen m-0 p-0'>
            <Header></Header>
            <div className='w-screen  grid grid-cols-1 md:grid-cols-2 background'>
                <div className=' hidden md:hidden lg:block p-32'>
                    <div className='w-96 h-96  grid grid-cols-2 gap-x-1 gap-y-1' id="maindiv">
                        <div className='h-48 w-48  '>
                            <img src={homeimg1}
                                alt='homescreen1'
                                className='rounded-full shadow-lg rotateimg'></img>

                        </div>
                        <div className='h-48 w-48  '>
                            <img src={homeimg2}
                                alt='homescreen2'
                                className='rounded-full shadow-lg rotateimg'></img>
                        </div>
                        <div className='h-48 w-48  '>
                            <img src={homeimg3}
                                alt='homescreen2'
                                className='rounded-full shadow-lg rotateimg'></img>
                        </div>
                        <div className='h-48 w-48 '>
                            <img src={homeimg4}
                                alt='homescreen2'
                                className='rounded-full shadow-lg rotateimg'></img>
                        </div>
                    </div>
                </div>
                <div className='w-full '>
                    <div className='w-full mb-10'>
                        <span className='mb-24 text-right font-bold text-6xl md:text-8xl text-orange-400 drop-shadow-md'>Always Deliver More Than Expected...</span>

                    </div>


                    <div className='w-full grid place-content-center'>
                        <button className='bg-skyblue-50 hover:bg-sky-400 py-3  rounded-full shadow-xl md:mr-2'>
                            <span className='mx-8 text-white'>Register Your Slot</span>
                        </button>
                    </div>


                    <div className='w-full md:w-3/4 h-32 md:h-44 mt-8 px-3 md:px-4 pb-0 pt-0  flex md:ml-36 messageboxdiv'>
                        <div className=' w-full p-7 pb-0 md:p-8 md:pb-0 h-fit'>
                            <span className='text-white font-bold leading-6 md:leading-8  md:text-xl'>

                                As a business owner, one of your top priorities is to&nbsp;
                                <span className='hover:font-extrabold duration-75'>grow your company.</span>
                                But how do you go about it?...


                            </span>
                        </div>


                    </div>

                    <div className='w-full md:w-3/4 h-32 md:h-44 mt-8 px-3 md:px-4 pb-0 pt-0  flex md:ml-36 messageboxdiv'>
                        <div className=' w-full p-7 pb-0 md:p-8 md:pb-0 h-fit'>
                            <span className='text-white font-bold leading-4 md:leading-8  md:text-xl'>
                            With our extensive marketing and presentation skills, we can help you take your
                              efforts <span className='hover:font-extrabold duration-75'> to the next level... &nbsp;</span>


                            </span>
                        </div>


                    </div>
            

         
            
        
               
              
                </div>

                {/* 
                        <span className='text-gray-500 leading-8'>

As a business owner, one of your top priorities is to <span className='hover:font-bold duration-75'>grow your company.</span> But how do you go about it?

We have helped hundreds of clients achieve their<span className='hover:font-bold duration-75'> business dreams.</span>
Contact us today to learn how we can take your <span className='hover:font-bold duration-75'> company to new heights!</span>
&nbsp; Don't waste another minute
With our extensive marketing and presentation experience, we can help you take your marketing efforts <span className='hover:font-bold duration-75'> to the next level. &nbsp;</span>

</span> */} </div>


        </div>
    )
}

export default Home
