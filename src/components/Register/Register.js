import React from 'react'
import logpic from '../../image/logpic.png';
import {Link} from 'react-router-dom';
function Register() {
    return (
        <div className='w-screen h-screen  m-0 p-0'>
            <div className='w-screen h-28 bg-white flex'>
                <div className='w-screen md:w-1/4  place-items-center grid   h-28 '>
                    <div className=' h-8 text-skyblue-50 '>
                    <Link to="/"><span className='text-xl font-bold'>BROTOTYPE</span> </Link>
                    </div>


                </div>
                {/* header ended */} </div>
            <div className='w-screen flex flex-initial p-6'>
                <div className='w-0 hidden md:w-3/5 md:block '>
                    <img src={logpic}
                        alt='logpic'></img>
                </div>
                <div className='w-full h-96 md:w-2/5 flex flex-col '>
                    <div className=' h-2/5 w-full text-center p-5'>
                        <span className='text-4xl text-gray-600 text-center '>Connect With US


                        </span>
<br/>
                        <span className='text-4xl w-full  text-skyblue-50 text-center  '>
                            <i className=" fa-solid fa-handshake"></i>

                        </span>


                    </div>
                    <div className='w-full  flex justify-center p-5'>
                        <div className=' h-96 w-full  flex flex-col '>
                            <div className='bg-gray-200 w-full h-1/4 flex flex-row rounded-t-md'>

                                <div className='h-full w-1/5 grid place-content-center'>

                                <i className="fa-solid fa-user"></i>
                                </div>
                                <div className='h-full w-3/5 flex flex-col '>

                                    <div className='h-2/4 flex items-center '>
                                        <span className='text-gray-500  align-middle '>
                                           User Name
                                        </span>
                                    </div>
                                    <div className='h-2/4'>
                                        <input className='w-full bg-transparent border-white border-b-2 rounded-none focus:outline-0 '></input>
                                    </div>
                                </div>
                                <div className='h-full w-1/5 grid place-content-center'>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            </div>

                            <div className='bg-white w-full h-1/4 flex flex-row rounded-b-md'>

<div className='h-full w-1/5 grid place-content-center'>
<i className="fa-solid fa-envelope"></i>
</div>
<div className='h-full w-3/5 flex flex-col '>

    <div className='h-2/4 flex items-center '>
        <span className='text-gray-500  align-middle '>
           Email
        </span>
    </div>
    <div className='h-2/4'>
        <input className='w-full  border-b-2 rounded-none focus:outline-0'></input>
    </div>
</div>
<div className='h-full w-1/5 grid place-content-center'>
    <i className="fa-solid fa-check"></i>
</div>
</div>
                            <div className='bg-white w-full h-1/4 flex flex-row rounded-b-md'>

                                <div className='h-full w-1/5 grid place-content-center'>

                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className='h-full w-3/5 flex flex-col '>

                                    <div className='h-2/4 flex items-center '>
                                        <span className='text-gray-500  align-middle '>
                                            Password 
                                        </span>
                                    </div>
                                    <div className='h-2/4'>
                                        <input className='w-full  border-b-2 rounded-none focus:outline-0'></input>
                                    </div>
                                </div>
                                <div className='h-full w-1/5 grid place-content-center'>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            </div>
                            <div className='bg-white w-full h-1/4 flex flex-row rounded-b-md'>

                                <div className='h-full w-1/5 grid place-content-center'>

                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className='h-full w-3/5 flex flex-col '>

                                    <div className='h-2/4 flex items-center '>
                                        <span className='text-gray-500  align-middle '>
                                            Retype Password
                                        </span>
                                    </div>
                                    <div className='h-2/4'>
                                        <input className='w-full  border-b-2 rounded-none focus:outline-0'></input>
                                    </div>
                                </div>
                                <div className='h-full w-1/5 grid place-content-center'>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            </div>


                            {/* <div className='bg-white w-full h-1/4 flex flex-row rounded-b-md'>

                                <div className='h-full w-1/5 grid place-content-center'>

                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className='h-full w-3/5 flex flex-col '>

                                    <div className='h-2/4 flex items-center '>
                                        <span className='text-gray-500  align-middle '>
                                            Password
                                        </span>
                                    </div>
                                    <div className='h-2/4'>
                                        <input className='w-full  border-b-2 rounded-none focus:outline-0'></input>
                                    </div>
                                </div>
                                <div className='h-full w-1/5 grid place-content-center'>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            </div> */}


                            <div className='w-full h-1/4 flex flex-col justify-center items-center my-4 md:flex-row '>
                             
                                <div className='mt-4'>
                                    <button className='bg-white py-3  rounded-full shadow-xl md:ml-2'>
                                        <span className='mx-8 text-gray-500'>Create Account</span>
                                    </button>
                                </div>
                                
                            </div>
                            <div className='w-full h-1/4 flex flex-col justify-center items-center  md:flex-row '>
                             
                                <div className=''>
                                   <Link to="/login">

                                   <span className='mx-8 text-skyblue-50' style={{cursor:"pointer",
                                    textDecoration:"underline",
                                    }}>Already have an Account?</span>
                                   </Link>
                                    
                            
                                </div>
                                
                            </div>


                        </div>

                        <div></div>

                    </div>

                </div>

            </div>


        </div>

    )
}

export default Register
