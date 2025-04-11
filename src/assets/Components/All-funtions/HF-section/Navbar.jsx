import React from 'react';

const Navbar = () => {
    return (
      <div className='w-full flex justify-center shadow bg-white'>
      <div className='max-w-[1816px] h-[83px] w-full flex items-center justify-between px-[140px]'>
        
        
        <div className='text-lg font-semibold'>
          <h1><span className='text-[#003EA4] text-3xl'>Auction</span><span className='text-[#FFD337] text-3xl font-bold'>Gallary</span></h1>
        </div>
        <div className='flex space-x-10 text-base font-medium'>
          <a className='text-black transition' href="">Home</a>
          <a className='text-black transition' href="">Auctions</a>
          <a className='text-black transition' href="">Categories</a>
          <a className='text-black transition' href="">How to works</a>
        </div>
    
        <div className="flex space-x-5 text-xl">
        <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>
        </div>
      </div>
    </div>  
    );
};

export default Navbar;