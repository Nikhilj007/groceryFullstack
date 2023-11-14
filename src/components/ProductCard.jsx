import {IoMdAdd} from 'react-icons/io'
import { useState } from 'react'

function ProductCard(props) {
    const [cart,setCart]=useState([0])
    return ( <>
      <div className='w-28 border-[1px] border-red-400 rounded-sm p-3'>
        <img className='rounded-sm' src={props.img} alt="" />
        <h1>{props.heading}</h1>
        <div className="flex justify-between">
            <h2>{props.price}</h2>
            <button onClick={()=>setCart(cart+1)} className='bg-green-200 px-3 py-1 text-green-700 font-bold rounded-2xl'><IoMdAdd/></button>
        </div>
      </div>
    </> );
}

export default ProductCard;