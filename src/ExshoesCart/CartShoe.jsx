import React from "react";

export default function CartShoe(props) {
  let { cart } = props;
  let renderCart = () => {
    return cart.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{shoe.name}</td>
          <td>{shoe.price}</td>
          <td>
            <img className=" w-20" src={shoe.image} alt={shoe.name} />
          </td>
          <td>{shoe.total}</td>
          <td>
            <button
              onClick={() => props.handleDelete(shoe.id)}
              className=" bg-red-500 text-white p-1 hover:bg-red-900 border-2 border-red-500 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  // cart rỗng vì chưa truyền props từ ExshoesCart

  return (
    <div className="flex-grow p-5 border-2 border-black ml-5">
      <table className="w-full text-xl">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
        <p>
          {cart.length === 0 ? (
            <p className=" text-red-500 text-sm">Cart is empty</p>
          ) : (
            <div className=" text-red-500 text-sm">Total: ${cart.length}</div>
          )}
        </p>
      </table>
    </div>
  );
}
