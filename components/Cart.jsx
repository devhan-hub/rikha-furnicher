import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button} from './ui/button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { X } from 'lucide-react';
import { RiCloseLargeFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export default function Cart({ open, setOpen }) {

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div  className='w-[500px] '  onClick={toggleDrawer(false)}>
     
      <div className="fixed top-0 w-[500px] px-4 py-2 h-24 z-20 space-y-4 bg-white border-b-2 border-[#e88903]  ">
        <div className='flex justify-between items-center'>
        <h1 className=' uppercase text-2xl sm:text-3xl font-cinzel font-semibold '>Shopping Cart</h1>
         <RiCloseLargeFill onClick={toggleDrawer(false)} className='text-xl cursor-pointer' />
        </div>
        <p className='opacity-80'>5 item added</p>
      </div>
      <div className='flex gap-4 itmes-center mt-28 bg-slate-200 py-5 px-6'>
        <img src="/images/book3.png" alt="" className='w-[50px] h-[50px]' />
        <div className="flex-col">
        <p className='text-xl font-cinzel font-bold uppercase'>BOOk shelv</p>
        <p className='text-lg'> $666</p>
        </div>

        <div className='flex flex-col ml-auto gap-6 items-center'>
        <RiCloseLargeFill className='text-lg font-bold cursor-pointer'/>
      <div className="flex items-center gap-2">
        <GoPlus className='text-lg font-bold cursor-pointer'/>
        <span>1</span>
        <FiMinus className='text-lg font-bold cursor-pointer'/>
      </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 px-4 mt-6'>
          <div className='flex justify-between items-center'>
            <p className='font-cinzel  text-lg'>Subtotal</p>
            <p>$81.00</p>
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
            <p>$81.00</p>
          </div>
        </div>
      <div className="fixed bottom-0 w-[500px] px-4 py-2 z-20 space-y-4 bg-white border-t-2  flex flex-col border-[#e88903]  ">
        <div className='flex justify-between items-center'>
        <h1 className=' uppercase text-2xl  font-cinzel font-semibold '>SUBTOTAL</h1>
        <p className='text-xl'>$67.00</p>
        </div>
        <Button size='lg' className='text-xl'>CHECKOUT</Button>
      </div>      
    </div>
  );

  return (
    <div>
      <Drawer anchor='right' 
      open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
