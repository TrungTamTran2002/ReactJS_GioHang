import React from "react";
import ListShoe from "./listShoe";
import DetailShoe from "./DetailShoe";
import CartShoe from "./CartShoe";

export default function ExshoesCart() {
  // hiển thị chi tiết giày

  let [detailShoe, setdetailShoe] = React.useState({});

  // hiển thị giỏ hàng bên cart
  let [cart, setCart] = React.useState([]);
  let handleAddtocart = (shoe) => {
    /**
     * TH1: Sản phẩm chưa có trong giỏ hàng => thêm vào giỏ hàng với số lượng là 1
     *  - Tạo ra 1 object mới
     *    + lấy dữ liệu từ shoe-> copy vào object mới
     *    + thêm 1 key quantity với value = 1
     *    // Let newShoe = { ...shoe, quantity: 1} // tạo ra 1 object mới từ object cũ và thêm 1 key mới vào total
     *  - Thêm vào giỏ hàng
     *  - setCart
     * TH2: Sản phẩm đã có trong giỏ hàng => tăng số lượng lên 1
     */
    // th2 : Sản phẩm đã có trong giỏ hàng => tăng số lượng lên 1
    let newCart = [...cart];

    let index = cart.findIndex((item) => {
      return item.id === shoe.id;
    });
    // if (index === -1) {
    //   setCart([...cart, { ...shoe, total: 1 }]);
    // } else {
    //   let newCart = [...cart];
    //   newCart[index].total++;
    //   setCart(newCart);
    // }
    if (index === -1) {
      let newShoe = { ...shoe, total: 1 };
      newCart.push(newShoe);
    } else {
      newCart[index].total++;
    }
    setCart(newCart);
  };

  let handleDelete = (idShoe) => {
    let newCart = cart.filter((shoe) => {
      return shoe.id !== idShoe;
    });
    setCart(newCart);
  };

  return (
    <div>
      <DetailShoe detailShoe={detailShoe} />
      <div className="flex">
        <div className="w-1/2">
          <ListShoe
            setdetailShoe={setdetailShoe}
            handleAddtocart={handleAddtocart}
          />
        </div>
        <CartShoe cart={cart} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
