"use client"
import Drawer from '@mui/material/Drawer';
import { Button } from './ui/button';
import { RiCloseLargeFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { closeCart } from '@/redux/slices/cartUiSlics';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity, removeCartItem ,addCartItem } from '@/redux/slices/cartSlice';
import { feature } from '@/lib/product';

export default function Cart() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.cartui.open)
  const totalQnt = useSelector(state => state.cart.totalQnt)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const cartItems = useSelector(state => state.cart.cartItems)



  const toggleDrawer = () => {
    dispatch(closeCart());
  };

  const addToCart =(item)=>{
    const product={
      id:item.id,
      price:item.price,
      productName:item.productName,
      imgUrl:item.imgUrl
    }
    dispatch(addCartItem(product))
  }

  const DrawerList = (
    <div className='w-[500px]'>
      <div className="fixed top-0 w-[500px] px-4 py-2 h-24 z-20 space-y-4 bg-white border-b-2 border-[#e88903]  ">
        <div className='flex justify-between items-center'>
          <h1 className=' uppercase text-2xl sm:text-3xl font-cinzel font-semibold '>Shopping Cart</h1>
          <RiCloseLargeFill onClick={toggleDrawer} className='text-xl cursor-pointer' />
        </div>
        <p className='opacity-80'>
          {cartItems.length > 0 ? `${totalQnt} items added` : "Your cart is empty, let's find something great to add to it..."}          </p>
      </div>

      <div className="flex flex-col mt-28 gap-4">
        {
          cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div className='flex gap-4 itmes-center  bg-slate-200 py-5 px-6' key={item.id}>
                  <img src={item.imgUrl.src} alt="" className='w-[50px] h-[50px]' />
                  <div className="flex-col">
                    <p className='text-xl font-cinzel font-bold uppercase'>{item.productName}</p>
                    <p className='text-lg font-serif font-bold'>${item.quantity * item.price}</p>
                  </div>

                  <div className='flex flex-col ml-auto gap-6 items-center '>
                    <RiCloseLargeFill className='text-lg font-bold cursor-pointer' onClick={() => dispatch(removeCartItem(item.id))} />
                    <div className="flex items-center gap-2">
                      <button onClick={() => dispatch(updateCartQuantity({ item: item, amount: 1 }))}><GoPlus className='text-lg font-bold cursor-pointer' /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(updateCartQuantity({ item: item, amount: -1 }))}>
                        <FiMinus className='text-lg font-bold cursor-pointer' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className='flex flex-col gap-2 px-4 mb-32 mt-6'>
                <div className='flex justify-between items-center'>
                  <p className='font-cinzel  text-lg'>Subtotal</p>
                  <p className='text-xl font-serif'>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='font-cinzel  text-lg' >Shipping</p>
                  <p>TBD</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='font-cinzel  text-lg'>TAX</p>
                  <p>TBD</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='font-cinzel  text-lg'>Discount</p>
                  <p className='text-xl font-serif'>$0</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col mb-32  gap-4 px-6">
              <h1 className="bg-red-200 px-4 py-2 self-start">hand picked just for you ...</h1>
              {
                feature.map((item) => (
                  <div className='flex gap-4 itmes-center   bg-slate-200 py-5 px-6' key={item.id}>
                    <img src={item.imgUrl.src} alt="" className='w-[50px] h-[50px]' />
                    <div className="">
                      <p className='text-xl font-cinzel font-bold uppercase'>{item.productName}</p>
                      <p className='text-lg font-serif font-bold'>${item.quantity * item.price}</p>
                      <Button onClick={()=>addToCart(item)} size='sm' className='mt-2'>Add To Cart -$ {item.price}</Button>
                    </div>
                  </div>
                ))}
            </div>
          )}
      </div>

      <div className="fixed bottom-0 w-[500px] px-4 py-2 z-20 space-y-4 bg-white border-t-2  flex flex-col border-[#e88903]  ">
        <div className='flex justify-between items-center'>
          <h1 className=' uppercase text-2xl  font-cinzel font-semibold '>SUBTOTAL</h1>
          <p className='text-xl font-serif'>${totalPrice}</p>
        </div>
        <Button size='lg' className='text-xl'>CHECKOUT</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Drawer anchor='right'
        open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
