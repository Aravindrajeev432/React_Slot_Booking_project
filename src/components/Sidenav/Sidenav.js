import React from 'react'
import './Sidenav.css'
import {NavLink} from 'react-router-dom';
function Sidenav({children}) {
//     const [navstate, setNavstate] = useState(false)
    console.log({children})
    return (
        <div>


            <div className="bg-yellow-400  " id="sidenav ">
              
                <ul className='bg-green-300 text-lg'>
<NavLink to="">
<li className='bg-blue-300  h-12 flex justify-center content-center '>
                        <span className="mx-8 font-bold mt-3 ">
                            <i className="fa-solid fa-house "></i>
                            &nbsp;<span className='hidden md:contents'> Dashboard</span></span>
                    </li>
</NavLink>
               <NavLink to="/adminhome/recordlist" className={({ isActive }) =>
    isActive ? 'text-skyblue-50 bg-white font-bold' : 'bg-red-500 font-thin'
  }>
               <li className='bg-blue-300  h-12 flex justify-center content-center '>
                        <span className="mx-8 font-bold mt-3 ">
                        <i className="fa-solid fa-table-list"></i>
                            &nbsp;<span className='hidden md:contents'> Record List</span></span>
                    </li>
               </NavLink>
                   
                    <li className='bg-blue-300  h-12 flex justify-center content-center '>
                        <span className="mx-8 font-bold mt-3 ">
                        <i className="fa-solid fa-book"></i>
                            &nbsp;<span className='hidden md:contents'>Slots</span></span>
                    </li>
                    <li className='bg-blue-300  h-12 flex justify-center content-center '>
                        <span className="mx-8 font-bold mt-3 ">
                            <i className="fa-solid fa-house "></i>
                            &nbsp;<span className='hidden md:contents'> NAV2</span></span>
                    </li>
                    <li className='bg-blue-300  h-12 flex justify-center content-center '>
                        <span className="mx-8 font-bold mt-3 ">
                        <i className="fa-solid fa-power-off"></i>
                            &nbsp;<span className='hidden md:contents'> Logout</span></span>
                    </li>
                   
                    {/* <li className='bg-blue-300  h-12 py-3'>
                        <span className="mx-8 font-bold">
                            <i className="fa-solid fa-table-list"></i>
                            &nbsp; Recorde List</span>
                    </li>
                    <li className='bg-blue-300  h-12 py-3'>
                        <span className="mx-8 font-bold">
                            <i className="fa-solid fa-book"></i>
                            &nbsp; Slots</span>
                    </li>
                    <li className='bg-blue-300  h-12 py-3'>
                        <span className="mx-8 font-bold">
                            <i className="fa-solid fa-house"></i>
                            &nbsp;Nav2</span>
                    </li>
                    <li className='bg-blue-300  h-12 py-3'>
                        <span className="mx-8 font-bold">
                            <i className="fa-solid fa-power-off"></i>
                            &nbsp; Logout</span>
                    </li> */}


                </ul>
            </div>
            <main><h1>{children}</h1></main>
        </div>
    )
}

export default Sidenav
