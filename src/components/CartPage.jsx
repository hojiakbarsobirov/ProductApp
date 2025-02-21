import React from "react";

const CartPage = ({ cart }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">🛒 Savat</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Savat bo‘sh</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b py-2">
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
