'use client'
import React, { useEffect, useState } from 'react'
import { Products } from '../../../types/products'
import { getCartItems } from '../actions/actions'

import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { client } from '@/sanityClient'
import Swal from 'sweetalert2'

const Checkout = () => {
 const [cartItems, setcartItems] = useState<Products[]>([])
const [discount, setDiscount] = useState<number>(0)
const [formValues, setFormValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    address:"",
    city:"",
    ZipCode:"",
})


const [formErrors, setFormErrors] = useState({
    firstName:false,
    lastName:false,
    email:false,
    phone:false,
    address:false,
    city:false,
    ZipCode:false,
})

useEffect(() => {
    setcartItems(getCartItems())
    const appliedDiscount = localStorage.getItem("appliedDiscount")
    if(appliedDiscount) {
        setDiscount(Number(appliedDiscount))
    }
}, [])

const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0 )
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
        ...formValues, 
        [e.target.id]: e.target.value
        })
    }

    const valldateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone : !formValues.phone,
            address: !formValues.address,
            ZipCode: !formValues.ZipCode,
            city: !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    }

    const handlePlaceOrder = async () => {

       Swal.fire({
             title: "Processing your order...",
             text: "Please wait a moment",
             icon: "info",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Proceed",
           }).then((result) => {
             if (result.isConfirmed) {
              if(valldateForm()) {
                   localStorage.removeItem("appliedDiscount");
                   Swal.fire(
                    "success!",
                    "Your Oder has been Successfully Processed",
                    "success"
                   );
                 } else {
                  Swal.fire(
                    "Error!",
                    "Please fill in all the field before proceeding",
                    "error"
                   );
                 }
             }
           });

       const orderData = {
            _type : 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phone : formValues.phone,
            address: formValues.address,
            ZipCode: formValues.ZipCode,
            city: formValues.city,
            cartItems : cartItems.map(item => ({
              _type: 'reference',
              _ref : item._id
            })),
            total : subTotal,
            discount : discount,
            orderData : new Date().toISOString
       };

       try {
        await client.create(orderData)
        localStorage.removeItem("appliedDiscount")
       } catch (error) {
        console.log("error creating order", error)
       }



    };


  return (
    <>
    <div>

<div className="font-[sans-serif] bg-white mx-10 my-16">
  <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
    <div className="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
      <div className="relative h-full">
        <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
          <div className="space-y-4">
       {/* carts */}
       <div>
       {/* {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
             <div className="image">
                {item.image && (
                    <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    width={50}
                    height={50}
                    className='object-cover'
                    />
                )}
       
             </div>
             <div>
                {item.price}
                <p>Quantity : {item.inventory}</p>
                <p>
                    ${item.price * item.inventory}
                </p>
             </div>
            </div>
          ))
       ): (
        <p>NO item in cart</p>
       )} */}
       </div>
       {/* main card */}
       {cartItems.length > 0 ? (
          cartItems.map((item) => (
           
            <div key={item.id} className="flex items-start gap-4" 
           
            >
            
              <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex  shrink-0 bg-gray-200 rounded-lg">
              {item.image && (
                    <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    width={800}
                    height={800}
                    className='object-cover'
                    />
                )}
              </div>
              <div className="w-full">
                <h3 className="text-sm lg:text-base text-gray-800">{item.name}</h3>
                <ul className="text-xs text-gray-800 space-y-1 mt-3">
                  {/* <li>
                    Size <span className="float-right">37</span>
                  </li> */}
                  <li>
                    Quantity <span className="float-right"> {item.quantity}</span>
                  </li>
                  <li>
                    Total Price <span className="float-right">${item.price * item.quantity}</span>
                  </li>
                </ul>
              </div>
            </div>
             ))
            ): (
             <p>NO item in cart</p>
            )}


            </div>
          </div>
       
    
        
           

        
        {/* <div className="md:absolute md:left-0 md:bottom-0 bg-gray-200 h-[15vh] w-full p-4">
          <h4 className=" gap-4 text-sm lg:text-base text-gray-800">
            Total <span className="ml-auto"> 
            ${subTotal}
              </span>
              Total <span className="ml-auto"> 
              ${discount}
              </span>
              Total <span className="ml-auto"> 
              ${subTotal.toFixed(2)}
              </span>
          </h4>
        </div>  */}
        <div className="md:absolute md:left-0 md:bottom-0 bg-gray-200 h-[15vh] w-full p-4">
  <h4 className="text-sm lg:text-base text-gray-800">
    <div className="flex justify-between">
      <span>Total:</span> <span>$ {subTotal}</span>
    </div>
    <div className="flex justify-between">
      <span>Discount:</span> <span>$ {discount}</span>
    </div>
    <div className="flex justify-between">
      <span>Final Total:</span> <span>$ {subTotal.toFixed(2)}</span>
    </div>
  </h4>
</div>

         
      </div>
      
    </div>




    <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
      <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
      <form className="mt-8">
        <div>
          <h3 className="text-sm lg:text-base text-gray-800 mb-4">
            Personal Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                 id='firstName'
                placeholder="First Name"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
              {formErrors.firstName && (
                <p>required info</p>
              )}
            </div>
            <div>
              <input
                type="text"
                id='lastName'
                placeholder="Last Name"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && (
                <p>required info</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                id='email'
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p>required info</p>
              )}
            </div>
            <div>
              <input
                type="number"
                id='phone'
                placeholder="Phone No."
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p>required info</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-sm lg:text-base text-gray-800 mb-4">
            Shipping Address
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id='address'
                placeholder="Address Line"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                value={formValues.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <p>required info</p>
              )}
            </div>
            <div>
              <input
                type="text"
                id='city'
                placeholder="City"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                value={formValues.city}
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <p>required info</p>
              )}
            </div>
            {/* <div>
              <input
                type="text"
                placeholder="State"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
              />
            </div> */}
            <div>
              <input
                type="text"
                id='ZipCode'
                placeholder="Zip Code"
                className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                value={formValues.ZipCode}
                onChange={handleInputChange}
              />
              {formErrors.ZipCode && (
                <p>required info</p>
              )}
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col mt-8">
            <button
              type="button"
              className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-[#474264] hover:bg-[#3f3b5a] text-white"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


    </div>
    
    </>
  )
}

export default Checkout

// if(valldateForm()) {
//   localStorage.removeItem("appliedDiscount")
// }