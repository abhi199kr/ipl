import React from 'react'

const Sponsor = () => {
  return (
    <div>
    <div className='text-center'>
    <h1 className='text-gray-500 font-bold '>TITLE SPONSOR</h1>
    <img className='mx-auto h-40 w-40' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1644520414_tata-logo.png" alt="" />

    </div>
    <div className='flex flex-col md:flex-row p-10'>
    <div className='w-full md:w-1/3 flex gap-4 '>
    <div>
    <h1 className=''>OFFICIAL
BROADCASTER</h1>
<img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1636628182_star-sports.png"
className='w-20 h-20'
 alt="" />
 </div>
 <div>
    <h1 className=''>OFFICIAL DIGITAL STREAMING</h1>
<img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1633587919_sponsor-hotstar.webp"
className='w-20 h-20'
 alt="" />
 </div>



    </div>
    <div className='w-full md:w-1/3 border-t-2 border-b-2 md:border-b-0 md:border-t-0 md:border-l-2 md:border-r-2 border-gray-400 px-5 '>
    <h1 className='text-center py-5 text-gray-500'>OFFICIAL PARTNERS</h1>
    <div className='felx flex-column lg:flex-row'>
        <button><img className='w-32' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1646835698_dream11.png" alt="" /></button>
        <button className='px-5'><img className='w-32' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1646835719_unacademy.png" alt="" /></button>
        <button><img className='w-32' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1646835768_cred.png" alt="" /></button>
    </div>

    <div className='felx pt-5'>
        <button><img className='w-32' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1646835793_upstox.png" alt="" /></button>
        <button className='px-5'><img className='w-32' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1646835868_swiggy%20%281%29.png" alt="" /></button>
        <button><img className='w-32' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1646835675_rupay%20%281%29.png" alt="" /></button>
    </div>


    </div>
    <div className='w-full md:w-1/3 p-5'>
    <div className='flex gap-4 '>
    <div className=''>
    <h1 className='text-gray-500 font-bold' >Official umpire patrnter</h1>
   <p className='my-12 p-2 border border-black rounded-full w-fit '> <img className='w-20 h-5 ' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1633588474_sponsor-paytm.webp" alt="trfe" />
   </p>
    </div>
    <div className=''>
    <h1 className='text-gray-500 font-bold'>Timeout patrnter</h1>
   <p className='my-12 p-2 border border-black rounded-full w-fit '> <img className='w-20 h-5 ' src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/live_blog/1633588547_sponsor-ceat.webp" alt="trfe" />
   </p>
    </div>

    </div>
    

    

    </div>

    </div>
      
    </div>
  )
}

export default Sponsor
