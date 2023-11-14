import { Link, useLocation } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdOutlineFavoriteBorder,MdOutlineManageSearch} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'


function Navbar() {
    const path = useLocation().pathname
    console.log(path);
    return ( 
        <>
          <div className="hidden md:flex justify-between w-5/6 fixed p-5   top-0 ">
{            // eslint-disable-next-line react/no-unescaped-entities
}            <Link to={'/'} className="px-5 py-3 bg-black text-stone-200 rounded-md">Shopaholic's</Link>
            <div className="flex gap-20">
                <Link to={'/explore'}>Explore</Link>
                <Link to={'/cart'}>Cart</Link>
                <Link to={'/fav'}>Fav</Link>
                <Link to={'/account'}>Account</Link>
            </div>
          </div>
          {/* mobile view navbar */}
          <div className="md:hidden flex justify-between fixed p-5 w-full  bottom-0 ">
{            // eslint-disable-next-line react/no-unescaped-entities
}    
            <div className="flex text-2xl gap-20">
                <Link className={path==='explore' && "text-green-600"} to={'/explore'}><MdOutlineManageSearch/></Link>
                <Link to={'/cart'}><AiOutlineShoppingCart/></Link>
                <Link to={'/fav'}><MdOutlineFavoriteBorder/></Link>
                <Link to={'/account'}><BsFillPersonFill/></Link>
            </div>
          </div>
        </>
     );
}

export default Navbar;