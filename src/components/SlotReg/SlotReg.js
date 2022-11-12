import React from 'react'
import Header from '../Header/Header'
function SlotReg() {
  return (
    <div className='w-screen h-screen m-0 p-0'>
            <Header></Header>
            <div className='w-screen h-screen p-9 '>
                <div className='w-full  h-full grid grid-cols-1 md:grid-cols-2 '>
                    <div className=' px-6 py-12 w-full '>

                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*Name</span>
                        </div>
                        <div className=''>
<input type="text" className=' w-full h-8 p-2'></input>
                        </div>
                    </div>

                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*Address</span>
                        </div>
                        <div className=''>
<input text="text" className=' w-full h-8 p-2'></input>
                        </div>
                    </div>
                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*City</span>
                        </div>
                        <div className=''>
<input className=' w-full h-8 p-2'></input>
                        </div>
                    </div>
                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*State</span>
                        </div>
                        <div className=''>
<input className=' w-full h-8 p-2'></input>
                        </div>
                    </div>
                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*Email</span>
                        </div>
                        <div className=''>
<input className=' w-full h-8 p-2'></input>
                        </div>
                    </div>
                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*Phone</span>
                        </div>
                        <div className=''>
<input type="number" className=' w-full h-8 p-2'></input>
                        </div>
                    </div>
                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*Company Name</span>
                        </div>
                        <div className=''>
<input className=' w-full h-8 p-2'></input>
                        </div>
                    </div>
                    <div className='px-3 h-16'>
                        <div className=''>
                    <span>*Company Logo</span>
                        </div>
                        <div className=''>
<input type="file" className=' w-full h-8 '></input>
                        </div>
                    </div>

                    <div className='w-full mt-8 grid grid-rows-4 gap-y-2 col-span-2'>
                    <div className='flex flex-col'>
        <span>*Describe Your Team and Background</span>
        <textarea className='h-16 p-2'></textarea>

    </div>

    <div className='flex flex-col'>
        <span>*Describe Your Company and Products</span>
        <textarea className='h-16 p-2'></textarea>

    </div>
    <div className='flex flex-col'>
        <span>*Describe Problem your are trying to solves</span>
        <textarea className='h-16 p-2'></textarea>

    </div>

    <div className='flex flex-col'>
        <span>*What is unique about your solution</span>
        <textarea className='h-16 p-2'></textarea>

    </div>
                    </div>
     
                   
{/* secondrow */}
                    </div>
                    <div className=' grid  grid-cols-1 gap-y-5 px-6 py-12'>




    <div className='flex flex-col'>
        <span>*What is value propositon for the customer</span>
        <textarea className='h-16 p-2'></textarea>

    </div>
    <div className='flex flex-col'>
        <span>*Who are your competitors and what is 
            your competative advantage

        </span>
        <textarea className='h-16 p-2'></textarea>

    </div>





    <div className='flex flex-col'>
        <span>*Explain your revenue model</span>
        <textarea className='h-16 p-2'></textarea>

    </div>
    <div className='flex flex-col'>
        <span>*What is the potential size of your product</span>
        <textarea className='h-16 p-2'></textarea>

    </div>
    <div className='flex flex-col'>
        <span>*How do you market or plan to market your products</span>
        <textarea className='h-16 p-2'></textarea>

    </div>
    <div className='flex flex-col'>
        <span>*Type of Incubation needed</span>
        <div className='flex flex-row'>
        <input name='proposal' type="radio"></input>
        <span className='pl-2'>
            Physical Incubation
        </span>
        </div>
        <div className='flex flex-row'>
        <input name="proposal" type="radio"></input>
        <span className='pl-2'>Virtual Incubation</span>
        </div>
       
      

    </div>
    <div className='flex flex-col'>
        <span>*Upload detailed business proposal</span>
        <textarea className='h-16 p-2'></textarea>

    </div>
    <div className='grid place-content-center'>
         <button className='bg-skyblue-800 hover:bg-sky-900 py-3  rounded-full shadow-xl md:mr-2'>
                                        <span className='mx-8 text-white'>Book Slot Now</span></button>
                                </div>
 

                    </div>

                </div>

            </div>
            </div>
  )
}

export default SlotReg