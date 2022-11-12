import React from 'react'

function AdminDashboard() {
  return (
    <div className=' w-full bg-red-400'>
    
    <div className='text-center p-8'><span className='text-5xl font-bold'>DashBoard</span></div>
    <div className='grid grid-flow-row grid-rows-1'>
        <div className='bg-yellow-300'>
<span className='text-3xl font-bold'>New Application List</span>
<div className=''>
    <table className='w-full'>
    <tbody>

    <tr>
            <th>head1</th>
            <th>head1</th>
            <th>head1</th>

        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
            <td>3</td>
        </tr>
    </tbody>



    </table>
</div>

        </div>
        <div className='bg-gray-300'>
            <span className='text-3xl font-bold'>Pending Application List</span>
        </div>
    </div>
    </div>
  )
}

export default AdminDashboard