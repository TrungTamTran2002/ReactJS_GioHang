import React from "react";
import { dataListShoe } from "./dataShoe.js";

export default function ListShoe({ setdetailShoe, handleAddtocart }) {
  // Viết hàm render danh sách giày từ datashoe

  let renderListShoe = () => {
    return dataListShoe.map((shoe, index) => {
      return (
        <div
          className="flex flex-col items-center p-10 border-2 border-black rounded"
          key={index}
        >
          <img className="w-2/3 mx-auto" src={shoe.image} alt={shoe.name} />
          <h2 className="text-xl font-bold mt-5">{shoe.name}</h2>
          <h3 className=" font-bold">{shoe.price}$</h3>
          <button
            onClick={() => {
              setdetailShoe(shoe);
            }}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            View details
          </button>
          <button
            onClick={() => {
              handleAddtocart(shoe);
            }}
            className="btn bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded"
          >
            Add to cart
          </button>
        </div>
      );
    });
  };

  return <div className="grid grid-cols-4 gap-5">{renderListShoe()}</div>;
}
