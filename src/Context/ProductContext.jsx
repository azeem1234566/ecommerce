import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const ProductContext = createContext();

const ProductProvide = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const [isAuthentified, setIsAuthentified] = useState(false);
  const [cartCout, setCartCount] = useState(0);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    console.log("cart:", cartItems);
    if (cartItems) {
      const count = cartItems?.reduce((acc, curr) => acc + curr?.quantity, 0);

      setCartCount(count);
    }
  }, [cartItems]);
  const HandleGetProducts = async () => {
  try {
    const res = await fetch("/data/data.json"); // ✅ No localhost, fetches from public
    const data = await res.json();

    if (res.ok) {
      setProductData(data.products); // if your JSON is { "products": [...] }
      localStorage.setItem("productData", JSON.stringify(data.products));
    } else {
      console.log("Unable to fetch data");
    }
  } catch (error) {
    console.log(error.message);
  }
};

  const HandleAddTCart = (prod, quantity = null, size = null, color = null) => {
    if (!isAuthentified) {
      // Get existing cart or initialize
      let storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Find if product already exists in the cart
      const existingItem = storedCartItems.find(
        (item) => parseInt(item.id) === parseInt(prod.id)
      );

      let updatedCartItems;
      if (existingItem) {
        // Create a new array with updated quantity for the existing item
        updatedCartItems = storedCartItems.map((item) =>
          parseInt(item.id) === parseInt(prod.id)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        toast.info("Quantity of product has been increased!");
      } else {
        // Add a new product entry if it doesn’t exist
        updatedCartItems = [
          ...storedCartItems,
          { ...prod, quantity, size, color },
        ];
        toast.success("Product Added to cart Succesfully!");
      }

      // Save updated cart in localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      console.log("Updated Cart:", updatedCartItems);
    } else {
      console.log("User is authenticated — handle API cart instead");
    }
  };

  const HandleUpdateCart = async (prod) => {
    try {
      if (!isAuthentified) {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

        //checking if product exist

        const existingProduct = storedCartItems.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id)
        );

        if (!existingProduct) {
          toast.error("Product does not exist in cart!");
        }

        const updatedCartItems = storedCartItems.map((item) =>
          parseInt(item?.id) === parseInt(prod?.id)
            ? {
                ...item,
                size: prod?.size ?? item?.size,
                quantity: prod?.quantity ?? item?.quantity,
                color: prod?.color ?? item?.color,
              }
            : item
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      } else {
        console.log("Authentified user");
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  const HandleDeleteCart = async (prod) => {
    try {
      if (!isAuthentified) {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

        //Check if product exists
        const existingItem = storedCartItems?.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id)
        );

        if (!existingItem) {
          toast.error("Product not found in cartItems");
          return;
        }

        const updatedCartItems = storedCartItems?.filter(
          (item) => parseInt(item?.id) !== parseInt(prod?.id)
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        toast.success("Product removed from cart successfully!");
      } else {
        console.log("Authentified user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        HandleGetProducts,
        HandleAddTCart,
        productData,
        cartItems,
        cartCout,
        setIsAuthentified,
        HandleUpdateCart,
        HandleDeleteCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvide;
export { ProductContext };
