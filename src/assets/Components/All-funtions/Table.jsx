import React, { useEffect, useState } from "react";
import TableData from "../TableData";

const Table = ({ onAddToCart }) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }, []);

  return (
    <>
      {table.map((data) => (
        <TableData key={data.id} data={data} onAddToCart={onAddToCart} />
      ))}
    </>
  );
};

export default Table;


{/*
  import "./App.css";
import Footer from "./assets/Components/All-funtions/HF-section/Footer";
import Header from "./assets/Components/All-funtions/HF-section/Header";
import Navbar from "./assets/Components/All-funtions/HF-section/Navbar";
import Table from "./assets/Components/All-funtions/Table";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const handleRemoveFromCart = (indexToRemove) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <Navbar />
      <Header />
      <div>
        <div className="flex">
          <div className="w-3/4">
            <table className="table">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Current Bid</th>
                  <th>Time Left</th>
                  <th>Bid Now</th>
                </tr>
              </thead>
              <tbody>
                <Table onAddToCart={handleAddToCart} />
              </tbody>
            </table>
          </div>
          <div className="w-1/4 p-4 bg-[#f5f8fc] min-h-screen">
            <h2 className="text-xl font-bold text-center text-blue-900 mb-4 flex items-center justify-center gap-2">
              <span>🤍</span> Favorite Items
            </h2>

            {cart.length === 0 ? (
              <div className="text-center text-gray-500 mt-20">
                <p className="text-lg font-semibold mb-1">No favorites yet</p>
                <p className="text-sm">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </div>
            ) : (
              <div className="space-y-3 mb-6">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          ${item.currentBid} &nbsp; | &nbsp; Bids: {item.bids}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(index)}
                      className="text-gray-400 hover:text-red-600 text-xl"
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>
            )}
        
            <div className="border-t pt-3 text-right text-gray-800 font-semibold">
              Total bids Amount:{" "}
              <span className="text-black text-lg font-bold">
                {cart.length == 0 ? (
                  <h3>taka nai sala fokir😤😤😡😡</h3>
                ) : (
                  `${cart.currentBidPrice}`
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;

*/}
