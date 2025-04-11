import React, { useState, useEffect } from 'react';

const fakeData = [
  {
    id: 1,
    title: "Vintage Leica M3 Camera",
    description: "A legendary 35mm film camera, beloved by photographers and collectors alike.",
    currentBidPrice: "$12,850",
    timeLeft: "5 Days left",
    bidsCount: 12,
    image: "https://i.ibb.co.com/RG2bgB30/Bid1-min.png"
  },
  // ... (rest of your fakeData array remains the same)
];

const Table = () => {
  const [favorites, setFavorites] = useState([]);
  const [disabledIds, setDisabledIds] = useState([]);
  const [popup, setPopup] = useState(null);
  const [isPopupHovered, setIsPopupHovered] = useState(false);

  const handleAddFavorite = (item) => {
    if (disabledIds.includes(item.id)) return;
    setFavorites((prev) => [...prev, item]);
    setDisabledIds((prev) => [...prev, item.id]);
    setPopup(item.title);
    setIsPopupHovered(false);
  };

  useEffect(() => {
    let timer;
    if (popup && !isPopupHovered) {
      timer = setTimeout(() => {
        setPopup(null);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [popup, isPopupHovered]);

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
    setDisabledIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const totalBidAmount = favorites.reduce(
    (total, item) => total + parseFloat(item.currentBidPrice.replace(/[$,]/g, "")),
    0
  );

  return (
    <div className="max-w-[90%] mx-auto mt-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 bg-slate-50 min-h-screen">
        {/* Left Table Side - Takes 2/3 on large screens */}
        <div className="lg:col-span-2 w-full">
          <h1 className="text-2xl font-bold text-gray-800">Active Auctions</h1>
          <p className="text-gray-600 mb-6">Discover and bid on extraordinary items</p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-700">Items</th>
                  <th className="p-4 text-left font-semibold text-gray-700">Current Bid</th>
                  <th className="p-4 text-left font-semibold text-gray-700">Time Left</th>
                  <th className="p-4 text-left font-semibold text-gray-700">Bid Now</th>
                </tr>
              </thead>
              <tbody>
                {fakeData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow" 
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{item.currentBidPrice}</td>
                    <td className="p-4 text-gray-700">{item.timeLeft}</td>
                    <td className="p-4">
                      <button
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                          disabledIds.includes(item.id)
                            ? 'bg-red-500 text-white cursor-not-allowed'
                            : 'border border-gray-300 hover:bg-gray-100 cursor-pointer'
                        }`}
                        onClick={() => !disabledIds.includes(item.id) && handleAddFavorite(item)}
                        disabled={disabledIds.includes(item.id)}
                      >
                        ♡
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Favorite Card - Takes 1/3 on large screens */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Favorites</h2>
              <span className="text-gray-500">{favorites.length} items</span>
            </div>

            {favorites.length === 0 ? (
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-500">No favorites yet</p>
                <p className="text-xs text-gray-400 mt-1">
                  Click the heart icon to add items
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {favorites.map((fav) => (
                  <div key={fav.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{fav.title}</h4>
                      <p className="text-sm text-gray-500">{fav.currentBidPrice}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFavorite(fav.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                      aria-label="Remove from favorites"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-gray-800">
                    <span>Total:</span>
                    <span>${totalBidAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notification Popup */}
        {popup && (
          <div 
            className="fixed top-5 right-5 bg-white shadow-lg rounded-lg p-4 max-w-xs flex items-start space-x-3 z-50 animate-fade-in-up"
            onMouseEnter={() => setIsPopupHovered(true)}
            onMouseLeave={() => {
              setIsPopupHovered(false);
              setTimeout(() => setPopup(null), 3000);
            }}
          >
            <div className="bg-green-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Added to Favorites</h4>
              <p className="text-sm text-gray-500 mt-1">{popup}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;

