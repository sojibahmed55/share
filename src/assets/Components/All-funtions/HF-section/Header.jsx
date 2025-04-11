import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='w-full flex justify-center'>
    <div className='relative  h-[730px] w-full object-cover'>
        
  <img className='w-full h-full object-cover brightness-90' src="Banner-min.jpg" alt=""/>
  <div className='absolute top-0 left-[140px] h-full flex flex-col justify-center space-y-6 text-white'>
    <h1 className='text-5xl font-bold leading-tight max-w-[700px] drop-shadow-lg'>
    Bid on Unique Items from Around the World
    </h1>
    <p className='text-lg max-w-[600px] drop-shadow'>
    Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
    </p>
    <button className='bg-white text-black px-6 py-2 rounded-full font-semibold w-fit transition'>
      Explore Auctions
    </button>
  </div>
</div>
</div>

        </div>
    );
};

export default Header;