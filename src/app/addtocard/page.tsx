


"use client";
import React, { useEffect, useState } from "react";
import { Products } from "../../../types/products";
import { getCartItems, removeFromcart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
// import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

// const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const Addtocart = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

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

    const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed.", "success");
        router.push("/checkout");
        //clear the cart after the proceeding (optional)
        setCartItems([]);
      }
    });
  };

 


  
  return (
    <div className="container mx-auto p-4">
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

              {/* <div className="flex items-center gap-2">
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
              </div> */}
              <div className="flex items-center gap-2" >
              
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
              
              <button
                onClick={() => handleRemoveCart(item._id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
            </div>
          ))}

          <div className=" items-center mt-6">
            <h2 className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
            <button
             
              onClick={handleProceed}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Addtocart;
