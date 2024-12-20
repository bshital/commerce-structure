'use client'
import Image from "next/image"

const CartModal = () => {

  const cartItems = true

  return (
    <div className="w-max absolute rounded-md bg-white top-12 right-0 text-sm p-4 z-20 shadow-[0_3px_12px_rgb(0,0,0,0.2)] flex flex-col gap-6">
      { !cartItems ? 
        (
          <div className="">Cart is Empty</div>
        ) : (
          <>
            {/* Title */}
            <h2 className="text-xl">Shopping Cart</h2>

            {/* List */}
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <Image
                  src="/logo.png"
                  alt=""
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />

                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/* Title */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="p-1 bg-gray-50 rounded-sm">
                        <div className="text-xs text-green-500">
                          $49
                        </div>
                      </div>
                    </div>
                    {/* Desc */}
                    <div className="text-sm text-gray-500">
                      available
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">$49</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
                <button
                  className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )
      
      }
    </div>
  )
}

export default CartModal