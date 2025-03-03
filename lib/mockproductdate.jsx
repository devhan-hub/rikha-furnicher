import { MdSupportAgent } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import { RiGiftLine } from "react-icons/ri";
export const mock = [
    {
      path: '/images/bed1.png',
      title: 'Lorem ipsum dolo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas eos officia molestias ex',
      price:578
    },
    {
      path: '/images/dinning2.jpg',
      title: 'Lorem ipsum dolo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas eos officia molestias ex',
      price:6753
    },
    {
      path: '/images/chair1.png',
      title: 'Lorem ipsum dolo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas eos officia molestias ex',
      price:3200
    },
    {
      path: '/images/chair1.png',
      title: 'Lorem ipsum dolo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas eos officia molestias ex',
      price:300
    },
  ]

  

  export const service = [
    {
      icon: <LuTruck size={50} className="z-50" />,
      title: 'Free Shipping',
      desc: 'Free shipping for order > $200'
    },
    {
      icon: <RiGiftLine size={50} className="z-50" />,
      title: '10 day return',
      desc: '10 day return money back'
    },
    {
      icon: <MdSupportAgent size={50} className="z-50" />,
      title: '24/7 support',
      desc: 'we support online all days'
    },
  ]