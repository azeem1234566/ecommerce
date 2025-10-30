import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

const Search = ({ searchOpen, setSearchOpen,  }) => {
  const { productData } = useContext(ProductContext);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {

    // 1. Start loading immediately when query changes and is not empty
    if (query.length > 0) {
      setIsLoading(true);
    } else {
      setFiltered([]); // Clear results if query is empty
      setIsLoading(false);
      return; // Stop if no query
    }

    if (!productData || productData.length === 0) {
      setIsLoading(false); // Can't search without data
      return;
    }
    const delay = setTimeout(() => {
      const result = productData.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      console.log(result);
      console.log("Product data:", productData);
      
      setFiltered(result);
      setIsLoading(false);    
    }, 300); // waits 300ms before filtering

    return () => clearTimeout(delay);
  }, [query, productData, setFiltered]);
  return (
    <div>
      {searchOpen && (
        <div className="  lg:flex  hidden justify-center absolute  items-center z-20 left-16 md:left-[30%] w-[50%] md:w-[40%]">
          <div className="flex items-center bg-white border w-full border-gray-300  overflow-hidden ">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-2 py-2 relative z-50 text-black text-sm outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="px-3 text-black">
              <FiSearch />
            </span>
          </div>
        </div>
      )}
      {searchOpen && (
        <div className="absolute z-30 w-[50%] lg:hidden bottom-8 right-[28%]  md:right-56 ">
          <input
          value={query}
              onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search..."
            className="flex-grow relative w-[100%] px-2 z-50 py-2 rounded-2xl outline-blue-300  text-black text-sm outline-none"
          />
          <span className="absolute z-50 right-1 top-1/4 text-black">
            <FiSearch />
          </span>
        </div>
      )}
{/* search div  */}
  
     <div className={` ${searchOpen ? "" : "hidden"}`}>
       {query &&   (
        <div className={` hidden lg:block max-h-52  w-[40%]   overflow-y-auto  scroll-smooth scrollbar-hide bg-white ml-1 border border-gray-200 absolute right-[30%] top-14`}>      
          {isLoading ? ( 
            <div className="p-4 text-center text-gray-500">
            Searching...
        </div>
        ):filtered?.length > 0 ? (
          filtered?.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <div className="text-black w-full border-b border-gray-300 hover:bg-gray-200 p-2">
                {item.name}
              </div>
            </Link>
          ))
        ) :(<div className="p-4 text-center text-gray-500">
        No products found for "{query}"
      </div>) }
        </div>
      )}
     </div>


  {/* mobile search results */}

{query && (
  <div
    className={` ${searchOpen ? "" : "hidden"} lg:hidden block absolute z-50 left-1/2 -translate-x-1/2 top-24 w-[70%] max-h-52 overflow-y-auto scrollbar-hide bg-white border rounded-b-lg border-gray-200  shadow-lg`}
  >
    {isLoading ? ( // 💡 CHECK LOADING STATE FIRST
        <div className="p-4 text-center text-gray-500">
            Searching...
        </div>
    ) : filtered?.length > 0 ? (
      filtered.map((item) => (
        <Link
          key={item.id}
          to={`/product/${item.id}`}
          className="block px-3 py-2 text-black border-b border-gray-200 hover:bg-gray-100"
        >
          {item.name}
        </Link>
      ))
    ) : (
      // If not loading and filtered is 0, then the final result is 'not found'
      <div className="p-4 text-center text-gray-500">
        No products found for "{query}"
      </div>
    )}
  </div>
)}


     </div>

     
  );
};

export default Search;
