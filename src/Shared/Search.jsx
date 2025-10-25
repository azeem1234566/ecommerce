import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ProductContext } from "../Context/ProductContext";

const Search = ({ searchOpen, setSearchOpen }) => {
const {productData} = useContext(ProductContext)
const [searchTerm, setSearchTerm] = useState("")


      const filtersearch = productData.filter((prod) => prod.name.toLowerCase().includes(searchTerm.toLowerCase()))      

return (<div>

{searchOpen && (
 <div className="bg-primary py-2 lg:flex  hidden justify-center absolute  items-center z-20 left-16 md:left-[30%] w-[50%] md:w-[40%]">
  <div className="flex items-center bg-white border w-full border-gray-300 rounded-3xl overflow-hidden ">
   <input
    type="text"
    placeholder="Search..."
    className="flex-grow px-4 py-2 text-black text-sm outline-none"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
/>
 <button className="px-3 text-black">  
   <FiSearch />
 </button>
 </div>
</div>
)}
{searchOpen && (
  <div className="absolute z-30 w-[50%] lg:hidden bottom-8 right-32  md:right-56 ">
<input
    type="text"
    placeholder="Search..."
    className="flex-grow relative w-[100%] px-2  py-2 rounded-2xl outline-blue-300  text-black text-sm outline-none"
/>
<button className="absolute z-50 right-1 top-1/4 text-black">  
   <FiSearch />
 </button>
 </div>
 )}

{/* seearch drop down  */}

{
searchOpen === true && (
<div className="bg-white">
{filtersearch.map((prod) => {
     <div className="w-32 h-72 bg-white"> 
      <button>{prod.name}</button>          
     </div>
})}
</div>
)
}
 
</div>);
}

export default Search;