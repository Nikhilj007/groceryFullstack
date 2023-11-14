import { createContext } from "react";

const ProductContext = createContext(null);

export default ProductContext;

export async function getdata(){
   const data= await fetch("");
}

const provider=ProductContext.Provider;