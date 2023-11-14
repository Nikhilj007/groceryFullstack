import Category from "./Category";
import {BiSearchAlt2} from "react-icons/bi";
import { Link } from "react-router-dom";
import {ImCross} from "react-icons/im";
import { useState } from "react";


function Explore() {
    const [search,setSearch]=useState('')
    return ( 
        <>
        <div className="flex gap-3 w-full items-start justify-center"> 
        <BiSearchAlt2 className="text-gray-400"/>
            <input className="-mt-12"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
             type="text" placeholder="search store" className="md:w-1/2 w-full rounded-sm border-[1px] mb-10"  />
            <ImCross onClick={()=>setSearch("")} className="text-gray-400"/>
            
        </div>
        <Link to={'/products'}><Category image={"https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"}
          heading={"Fresh Himachali Apples"} /></Link>
         
        </>
     );
}

export default Explore;