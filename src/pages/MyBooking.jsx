import React, { useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const MyBooking = () => {


  return (
   <div >
       <table className='w-full md:w-3/4 mx-auto'>
       <tbody className='space-y-5'>
        <tr className='border-2 shadow-xl my-5'>
        <td className='p-3'>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className=" rounded-xl size-20">
                <img src="https://img.freepik.com/free-vector/hotel-double-room-cartoon-illustration_33099-2026.jpg?t=st=1715349398~exp=1715352998~hmac=9c99cbe733e6aca6e53dad4ab28eae23cfab28f853ff1d878206124940796b9a&w=996" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">Room No : <span className='text-skyBlue-500'>56</span></div>
              <div className="text-sm opacity-80">sque 500 ft</div>
            </div>
          </div>
        </td>
        <td className='font-bold '>
        <p className='mb-3'>paymentStatus <span className='text-skyBlue-400'>Paid</span></p>
        <p>Total Cost $: <span className='text-skyBlue-400'>567</span></p>
        </td>
        <td>
         <div className='flex gap-2 items-center mb-3'><span className='bg-skyBlue-500 block size-3 rounded-full'></span> <p>12/05/2024</p></div>
         <div className='flex gap-2 items-center'><span className='bg-red-500 block size-3 rounded-full'></span> <p>16/05/2024</p></div>
         
        </td>
        {/* ratting */}
        <td> 
        <div className="flex text-lg text-[#fc6f03] ">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
          </div>
          <button className=" text-orange-600 font-extrabold mt-3  underline">Post Review</button>
        </td>
        <th>
        <button className="btn bg-skyBlue-500 btn-sm">Update</button>
        <br />
        <button className="btn mt-2 btn-error btn-sm">Cancel</button>
        </th>
      </tr>
        </tbody>
       </table>
   </div>
  );
};


export default MyBooking
