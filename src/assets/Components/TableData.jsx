import React from 'react';

const TableData = ({ data, onAddToCart }) => {
  return (
    <tr>
      <td><div className='flex items-center gap-3'><img className='w-12 h-12 object-cover' src={data.image} alt="" /><h3>{data.title}</h3></div></td>
      <td>{data.currentBid}</td>
      <td>{data.timeLeft}</td>
      <td>
        <button
          onClick={() => onAddToCart(data)}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Bid Now
        </button>
      </td>
    </tr>
  );
};

export default TableData;
