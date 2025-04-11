import React, { useState } from "react";

const Card = ({ data }) => {
  const [btn, setBtn] = useState([]);
  console.log(btn);
  return (
    <>
      <tr key={data.id}>
        <td>
          <div className="flex items-center gap-2">
            <img className="w-24 h-24 object-cover" src={data.image} alt="" />
            <h1>{data.title}</h1>
          </div>
        </td>
        <td>$ {data.currentBidPrice}</td>
        <td>{data.timeLeft}</td>
        <td>
          <button onClick={() => setBtn(data)
            
          } className="btn">
            Show Card
          </button>
        </td>
      </tr>
    </>
  );
};

export default Card;

// ai error ta koi thaka astasa  jani na onkkhon holo to dekhtasi amio to aibabya  koirse asa nai toh
