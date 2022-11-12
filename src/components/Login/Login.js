import React, {  useContext } from 'react'
import logpic from '../../image/logpic.png';
import {Link} from 'react-router-dom';

import { AuthContext } from '../../context/AuthContex';


function Login() {

    let {userLogin } = useContext(AuthContext)
    let {errormsg}  = useContext(AuthContext)
    


    // const userLogin = async (e)=>{
    //     e.preventDefault()
    //     console.log(e.target.email.value)
    //     console.log(e.target.password.value)
    //     let response = await  axios.post("http://127.0.0.1:8000/api/token/",
    //     {'email':e.target.email.value, 'password':e.target.password.value}).catch(
    //         (error)=>{

    //             let statuss = error.response.status
    //             // if(error.responce.status !="200"){
    //             //     setErrormsg(!errormsg)

    //             // }
    //             console.log(statuss)
    //             if (statuss != 200){
    //                 setErrormsg(!errormsg)
    //             }

    //         }
            
    //     )
    //     // if(statuss != 200 ){
    //     //     setErrormsg(!errormsg)

    //     // }
    //     console.log(response)
    // }

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
                    <img src={logpic} alt='logpic'></img>
                </div>
                <div className='w-full h-96 md:w-2/5 flex flex-col '>
                    <form onSubmit={userLogin}>
                                            <div className=' h-2/5 w-full p-5'>
                        <span className='text-6xl text-gray-600 '>Welcome  :)

                        </span>
                        <br></br>
                        <span className='pt-3 mt-3 text-gray-500'>
                            To Keep connected with us Please login with your personal
                            information by email and password
                        </span>
                    </div>
                    <div className='w-full pl-5 h-8'>
                       <span className={`text-red-600 tracking-wide ${errormsg ? "" :"hidden"}`}>
                         <i className="fa-solid fa-exclamation"></i> 
                         Wrong email or password</span>
                    </div>
                    <div className='w-full  flex justify-center p-5'>
                        <div className=' h-96 w-full  flex flex-col '>
                            <div className='bg-gray-200 w-full h-1/4 flex flex-row rounded-t-md'>
                                

                                <div className='h-full w-1/5 grid place-content-center'>

                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className='h-full w-3/5 flex flex-col '>

                                    <div className='h-2/4 flex items-center '>
                                        <span className='text-gray-500  align-middle '>
                                            Email Address
                                        </span>
                                    </div>
                                    <div className='h-2/4'>
                                        <input type="email" name="email" className='w-full bg-transparent border-white border-b-2 rounded-none focus:outline-0 ' required></input>
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
                                        <input type="password" name="password" className='w-full  border-b-2 rounded-none focus:outline-0' required></input>
                                    </div>
                                </div>
                                <div className='h-full w-1/5 grid place-content-center'>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            </div>


                            <div className='w-full h-1/4 flex flex-col justify-center items-center my-4 md:flex-col'>
                                <div className='mt-4 '>
                                    <button type='submit' className='bg-skyblue-800 hover:bg-sky-900 py-3  rounded-full shadow-xl md:mr-2'>
                                        <span className='mx-8 text-white'>Login Now</span></button>
                                </div>

                                

                                <div className='mt-4'>
                                    <Link to="/register">
                                    <p className=' py-3  rounded-full  cursor-pointer underline
                                     md:ml-2'>
                                        <span className='mx-8 text-gray-500'>Create New Account</span></p>
                                    </Link>
                             
                                </div>
                            </div>
                           

                        </div>

                        <div></div>

                    </div>
                    </form>

                </div>

            </div>


        </div>
    )
}

export default Login
