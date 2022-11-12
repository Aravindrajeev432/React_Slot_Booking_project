import React, {useState} from 'react'

import Sidenav from '../components/Sidenav/Sidenav'
import { Outlet} from 'react-router-dom'

function Adminhome() {

    const [navstate, setNavstate] = useState(false)
    return (


        <div className='w-screen  h-screen grid  grid-flow-col grid-cols-12 bg-red-600'>
            <div className={
                `bg-green-400   z-10 ${
                    navstate ? "col-span-2" : "hidden"
                }`
            }>



              <Sidenav>

              

 
              </Sidenav>

<div>



        </div>




            </div>
            <div className='bg-blue-400 col-span-12'>
              
                <div className='w-full h-12 bg-black flex align-center'>
                <button type='button' className='py-3 border-3  border-red-400'
                    onClick={
                        () => setNavstate(!navstate)
                }>
                    <span className='mx-8 font-xl text-white'>


                        <i className="fa-solid fa-bars"></i>
                    </span>
                </button>
                </div>
                <div>
                <main>
<Outlet/>

            </main>

                </div>






            </div>

        </div>
    // <div className='w-screen h-auto '>
    //      <button type='button' className='py-3 border-3  border-red-400' onClick={()=>setNavstate(!navstate)}>
    //             <span className='mx-8 font-xl'>


    //                 <i className="fa-solid fa-bars"></i>
    //             </span>
    //         </button>
    //     <Sidenav show={navstate}></Sidenav>
    //     <AdminDashboard></AdminDashboard>

    // </div>
    )
}

export default Adminhome
