import React from 'react';

const Footer = () => {
    return (
        <div>
            
            <footer className='footer footer-horizontal footer-center bg-white text-base-content rounded p-10'>
            <div>
            <h1><span className='text-[#003EA4] text-3xl'>Auction</span><span className='text-[#FFD337] text-3xl font-bold'>Gallary</span></h1>
                
            </div>
  <nav className="grid grid-flow-col gap-4">
    <a className='text-black text-[22px]' href="">Bid.</a>
    <a className='text-black text-[22px]' href="">Win.</a>
    <a className='text-black text-[22px]' href="">Own.</a>
    
    
    
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a className='text-black text-[18px]' href="">Home</a>
      <a className='text-black text-[18px]' href="">Auctions</a>
      <a className='text-black text-[18px]' href="">Categories</a>
      <a className='text-black text-[18px]' href="">How to works</a>
    </div>
  </nav>
  <aside>
    <p className='text-black text-[18px]'>© 2025 Auctionhub. All rights reserved.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;