

"use client"
import React, { useEffect, useState } from "react";
import { Products } from "../../../types/products";
import { getCartItems, removeFromcart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const CombinedCartOrderSummary = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemoveCart = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromcart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleQuantityIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product) handleQuantityChange(id, product.quantity + 1);
  };

  const handleQuantityDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product && product.quantity > 1) handleQuantityChange(id, product.quantity - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    console.log("Order Details: ", userDetails);
    Swal.fire("Success!", "Your order has been placed successfully.", "success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
   
    <div className="container mt-20 mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Shopping Cart */}
      <div>
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                    width={500}
                    height={500}
                  />
                )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityDecrement(item._id)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityIncrement(item._id)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemoveCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Order Summary */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={userDetails.fullName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone No.</label>
            <input
              type="text"
              name="phone"
              value={userDetails.phone}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              value={userDetails.address}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your address"
              rows={3}
            ></textarea>
          </div>
        </form>

        <div className="mt-6">
          <div className="flex justify-between text-gray-700">
            <p>Subtotal</p>
            <p>${calculatedTotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Shipping</p>
            <p>$2.00</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Tax</p>
            <p>$4.00</p>
          </div>
          <div className="flex justify-between font-bold text-gray-900 mt-4">
            <p>Total</p>
            <p>${(calculatedTotal() + 2 + 4).toFixed(2)}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCheckout}
          className="w-full mt-6 px-4 py-2 bg-[#4A4666] hover:bg-[#464161] text-white rounded-md"
        >
          Checkout
        </button>
        
        <Link href={"/allcard"}>
        <button
          type="button"
          className="w-full mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Continue Shopping
        </button>
        </Link>
      </div>
    </div>
   
  );
};

export default CombinedCartOrderSummary;
