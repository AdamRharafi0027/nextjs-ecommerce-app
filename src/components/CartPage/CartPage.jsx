"use client";
import { removeFromCart } from '@/redux/features/cartSlice';
import { CircleX, Trash2 } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CartPage = ({iscartopen}) => {

  const product = useSelector(state=>state.cart.cart)
  const dispatch = useDispatch()

  return (
    <>
       <aside className="fixed top-0 right-0 h-screen bg-white z-50 shadow-xl/20 duration-300 w-full sm:w-80 md:w-96 lg:w-100 p-4 lg:p-6">
      {/* Close Button */}
      <CircleX
        className="absolute cursor-pointer left-3 top-3"
        onClick={() => iscartopen(false)}
        size={30}
      />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold playfair text-center mt-8">
        Your Cart
      </h1>

      {/* Products List */}
      <div className="mt-4 h-[60%] overflow-y-auto flex flex-col gap-4">
        {
          product.map(product=>(
          <div
            
            className="bg-white shadow-lg rounded-2xl p-3 sm:p-4 flex items-center gap-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-xl shadow-xl"
            />
            <div className="flex w-full justify-between items-start">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className="font-semibold text-sm sm:text-lg text-gray-800">
                {product.title}
                </h2>
                <div className="flex gap-2 sm:gap-3 items-center">
                  <button
                    
                    className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-full px-2 sm:px-3 text-sm sm:text-xl"
                  >
                    +
                  </button>
                  <span className="font-medium">22</span>
                  <button
                   
                    className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-full px-2 sm:px-3 text-sm sm:text-xl"
                  >
                    –
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 sm:gap-2">
                <h2 className="text-sm sm:text-lg font-bold text-gray-700">
                  ${product.price}
                </h2>
                <button onClick={()=>{dispatch(removeFromCart(product.id))}}>
                  <Trash2
                    size={16}
                    className="cursor-pointer hover:scale-110 transition-transform text-red-500"
                  />
                </button>
              </div>
            </div>
          </div>
          ))
        }
      </div>

      {/* Total and Checkout */}
      <div className="absolute bottom-4 left-0 w-full px-4 sm:px-6 flex flex-col gap-3">
        <h1 className="text-lg sm:text-2xl font-bold playfair text-center">
          Total: <span>$444</span>
        </h1>
        <button className="bg-[#646B5D] w-full text-white py-2 sm:py-3 font-bold rounded-md text-lg sm:text-2xl cursor-pointer border hover:bg-transparent hover:text-[#646B5D] transition-all duration-150">
          Checkout
        </button>
      </div>
    </aside>
    </>
  )
}

export default CartPage