import React from 'react'
import "./News.css"
const News = () => {
  return (
    <div className='p-5'>
    {/* Header sections */}
    <div className='py-5 flex'>
        <h1 className='font-bold text-red-600 text-3xl grow'>Latests News</h1>
        <button className='bg-red-600 mx-5 px-3 rounded font-bold text-white'>See All</button>
    </div>
    <div className='flex flex-row gap-4 overflow-x-auto'>
    <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white w-96 h-fit">
    <a href="#!">
      <img className="rounded-t-lg h-52 hover:scale-105  " src="https://assets.iplt20.com/bcci/articles/1653766619_RJV08770.jpg"
       alt=""/>
    </a>
    <div className="p-6 hover:bg-blue-900 hover:text-white">
    <p>27 May 2022</p>
    <p>Mumbai Indain win by 10 Wickets</p>
      
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white w-96 h-fit">
    <a href="#!">
      <img className="rounded-t-lg h-52 hover:scale-105" src="https://assets.iplt20.com/bcci/articles/1653642520__AI_9523%20%281%29.jpg" 
      alt=""/>
    </a>
    <div className="p-6 hover:bg-blue-900 hover:text-white">
    <p>27 May 2022</p>
    <p>Mumbai Indain win by 10 Wickets</p>
      
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white w-96 h-fit">
    <a href="#!">
      <img className="rounded-t-lg h-52 hover:scale-105" src="https://assets.iplt20.com/bcci/articles/1655276240__RAJ0314%20%281%29.jpg" 
      alt=""/>
    </a>
    <div className="p-6 hover:bg-blue-900 hover:text-white">
    <p>27 May 2022</p>
    <p>Mumbai Indain win by 10 Wickets</p>
      
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white w-96 h-fit">
    <a href="#!">
      <img className="rounded-t-lg h-52 hover:scale-105" src="https://assets.iplt20.com/bcci/articles/1653675763__AI_1441.jpg" 
      alt=""/>
    </a>
    <div className="p-6 hover:bg-blue-900 hover:text-white">
    <p>27 May 2022</p>
    <p>Mumbai Indain win by 10 Wickets</p>
      
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white w-96 h-fit">
    <a href="#!">
      <img className="rounded-t-lg h-52 hover:scale-105" src="https://assets.iplt20.com/bcci/articles/1653590546_VRP06425.jpg" 
      alt=""/>
    </a>
    <div className="p-6 hover:bg-blue-900 hover:text-white">
    <p>27 May 2022</p>
    <p>Mumbai Indain win by 10 Wickets</p>
      
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white w-96 h-fit">
    <a href="#!">
      <img className="rounded-t-lg h-52 hover:scale-105" src="https://assets.iplt20.com/bcci/articles/1653506658__AI_9265.jpg" 
      alt=""/>
    </a>
    <div className="p-6 hover:bg-blue-900 hover:text-white">
    <p>27 May 2022</p>
    <p>Mumbai Indain win by 10 Wickets</p>
      
    </div>
  </div>
</div>

    </div>
      
    </div>
  )
}

export default News
