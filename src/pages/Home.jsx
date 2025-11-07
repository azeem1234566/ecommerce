import LinesEllipsis from "react-lines-ellipsis";


import { EffectFlip, Pagination, EffectFade } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarLoader, ClipLoader, SyncLoader } from "react-spinners";
import { Link, NavLink } from "react-router-dom";
import { FaArrowCircleRight, FaHeart, FaShoppingCart } from "react-icons/fa";
import Test from "../Components/HomeComponents/Test";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import Layout from "../shared/Layout/Layout";




const Home = () => {
  const { HandleGetProducts, productData, HandleAddTCart } =
    useContext(ProductContext);
  const [bestSeller, setBestSeller] = useState(null);
  const [few, setFew] = useState(null);
  const [fewDisplay, setFewDisplay] = useState(true);

  // const notify = () => toast.success("Item added to cart!");
  // const notifyDelete = () => toast.error("Unable to add to cart!");
  // const { HandleGetProducts } = useContext(ProductContext);


    useEffect(() => {
    HandleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


   useEffect(() => {
    console.log("productData:", productData);

    if (productData) {
      const less = productData?.slice(0, 3);
      console.log("less:", less);
      setFew(less);

      const found = productData?.filter((item) => item?.bestSeller === true);
      if (found) {
        setBestSeller(found);
      }
    }
  }, [productData]);

 
  if (!productData) {
    return <div className="flex justify-center lg:mt-72 md:mt-[28rem] mt-80 items-center text-3xl"> <SyncLoader /></div>;
  }

  return (
    <Layout>
      <div className=" bg-primary  flex   justify-center flex-col min-h-screen mb-12">
        {/* <div style={{ width: "200px" }}>
          <LinesEllipsis
            text="This is a very long sentence that should be truncated after two lines."
            maxLine="3"
            ellipsis="..."
            trimRight
          />
        </div> */}
        {/* <FacebookShareButton url="https://example.com">
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton url="https://example.com">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <BarLoader loading={true} size={50} color="#36d7b7" />
        <ClipLoader loading={true} size={50} color="#36d7b7" /> */}
        {/* <div className="mt-5">
          <div>
            <button onClick={notify}>Add to Cart</button>
            <ToastContainer />
          </div>

          <div>
            <button className="bg-red-500 rounded-md " onClick={notifyDelete}>
              Add to Cart
            </button>
            <ToastContainer />
          </div>
        </div> */}
        {/* <div className="w-full bg-yellow-300 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Swiper Example
          </h2>

          <Swiper
            // modules={[Pagination]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            spaceBetween={20}
            loop={true}
            speed={1000}
            lazy={true}
            modules={[Lazy, Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            pagination={{ clickable: true }}
            className="w-full h-60"
          >
            <SwiperSlide>
              <div className="bg-blue-500 text-white rounded-xl w-full h-full flex items-center justify-center text-lg font-semibold">
                Slide 1
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-green-500 text-white rounded-xl h-full flex items-center justify-center text-lg font-semibold">
                Slide 2
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-purple-500 text-white rounded-xl h-full flex items-center justify-center text-lg font-semibold">
                Slide 3
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-orange-500 text-white rounded-xl h-full flex items-center justify-center text-lg font-semibold">
                Slide 4
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
        <div className="flex justify-center ">
          {/* <NavLink
            className={` border-t-[1px] border-b-[1px] border-l-[1px] overflow-hidden h-12 w-52  p-[10px] flex justify-center items-center relative
                 rounded-md  text-sm text-white border-white hover:bg-white hover:text-black transition ease-in-out duration-700`}
            to={"/cart"}
          >
            <p
              className="absolute flex justify-center items-center top-0 left-0 p-2 w-full h-full bg-gradient-to-l from-black to-trans
                  transition ease-in-out duration-700"
            >
              New Collections
            </p>
          </NavLink> */}

          <NavLink className="relative rounded-3xl text-sm  overflow-hidden p-4 mt-4 ">
            <div className="absolute w-full h-full top-0 left-0 rounded-3xl bg-gradient-to-l from-black to-transparent z-20"></div>

            <div className="p-2 border-t-[1px] border-b-[1px] border-l-[1px]    text-white rounded-3xl border-r-tr ">
              <p className="relative z-30"> New collection 2025</p>
            </div>
          </NavLink>
        </div>
        //home
        <div className=" flex items-center justify-center  ">
          <p className="lg:text-5xl md:text-2xl text-xl font-bold text-white text-center lg:px-[10rem] md:px-[5rem] px-[2rem] ">
            Where style meets expression, trends inspire, and fashion thrives.
          </p>
        </div>
        <div className=" flex items-center justify-center text-white mt-7 text-center lg:px-[10rem] md:px-[5rem] px-[2rem]">
          <p>
            Step into a fashion haven where the latest trends meet your unique
            style asspirations. Redefine your wardrope with Desober today!{" "}
          </p>
        </div>
        <div className=" flex items-center justify-center mt-8">
          <div className="rounded-3xl bg-white p-2 text-primary w-40  flex items-center justify-center gap-2">
            <Link >New collection</Link>
            <Link to={"/newArrivals"}>
              <FaArrowCircleRight className="font-bold text-xl" />
            </Link>
          </div>
        </div>
        <div className="w-full md:px-4 px-28 flex flex-col justify-center items-center relative ">
<Swiper
        autoplay={{ 
          delay: 2500, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={16}
        slidesPerView={1}
        loop={productData && productData.length > 4}
        speed={800}
        centeredSlides={true}
        grabCursor={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          320: { 
            slidesPerView: 1.2,
            // spaceBetween: 12,
            // centeredSlides: true
          },
          480: { 
            slidesPerView: 1.5,
            // spaceBetween: 14,
            // centeredSlides: true
          },
          640: { 
            slidesPerView: 2,
            // spaceBetween: 16,
            // centeredSlides: true
          },
          768: { 
            slidesPerView: 3,
            // spaceBetween: 18,
            // centeredSlides: true
          },
          1024: { 
            slidesPerView: 4,
            // spaceBetween: 20,
            // centeredSlides: true
          },
          1280: { 
            slidesPerView: 5,
            // spaceBetween: 24,
            // centeredSlides: true
          },
        }}
        className="w-full !py-8"
      >
        {productData && productData.length > 0 ? (
          productData.map((product, index) => (
            <SwiperSlide 
              key={product?.id || index}
              className="!h-auto transition-all duration-300"
            >
              {({ isActive }) => (
                <div 
                  onClick={() => handleProductClick(product?.id)}
                  className={`group relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-t-[50%] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'scale-110 z-10 shadow-2xl' 
                      : 'scale-90 opacity-70'
                  }`}
                >
                  <img
                    src={product?.image}
                    alt={`product?.name || Fashion item ${index + 1}`}
                    loading="lazy"
                    className="object-cover w-full h-full bg-gray-500 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                  {product?.name && (
                    <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 ${
                      isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                    }`}>
                      <h3 className="font-semibold text-sm md:text-base truncate">
                        {product.name}
                      </h3>
                      {product?.price && (
                        <p className="text-xs md:text-sm opacity-90">
                          {`₦${product.price}`}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))
        ) : (
          <div className="w-full h-64 flex items-center justify-center text-white">
            <p className="text-gray-400">No products available</p>
          </div>
        )}
      </Swiper>
          <button className="swiper-button-prev-custom absolute left-8 top-1/2  flexRow z-20 bg-transWhite text-black rounded-full h-10 w-10 p-2 shadow-2xl hover:transWhite hover:text-white transition">
            ❮
          </button>

          <button className="swiper-button-next-custom absolute right-8 top-1/2  flexRow z-20 bg-transWhite rounded-full p-2 shadow-2xl hover:transPrimary hover:text-white transition h-10 w-10">
            ❯
          </button>
        </div>
        <div className="bg-white lg:pt-12 pt-2">
          <p className="text-center text-primary text-2xl font-semibold w-full mt-8 ">
            Best Seller
          </p>
          <p className="text-center text-primary  w-full mt-2 text-lg">
            Stay cozy and stylish with our exclusive collections of best selling
            Hoodies
          </p>
          <div className=" px-4 md:px-10 lg:px-20 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-16 gap-16 justify-center items-stretch lg:mt-6 mt-8">
            {fewDisplay ? (
              <>
                {few &&
                  few?.map((few) => (
                    <div
                    key={few.id}
                      to={`/product/${few?.id}`}
                      className="hover:shadow-2xl transition ease-in-out duration-500 rounded-md overflow-hidden "
                    >
                      <div className="w-full  h-[26rem]  overflow-hidden  ">
                        <Link
                          to={`/product/${few?.id}`}
                          className="w-full h-full"
                        >
                          <img
                            src={`${few?.image}`}
                            alt="Fashio"
                            className="  object-cover w-full h-full  "
                          />
                        </Link>
                      </div>
                      <div className="p-2">
                        <p className="text-black font-bold mt-2 ">
                          {few?.name}
                        </p>
                        <LinesEllipsis
                          className="text-black  mt-2 z-50"
                          text={few?.description}
                          maxLine="1"
                          ellipsis="..."
                          trimRight
                        />

                        <div className="flex justify-between items-center mt-2">
                          <span className="p-2 bg-primary text-white rounded-md">
                            ${few?.price}
                          </span>

                          <div className="flex justify-between items-center gap-4">
                            <span className="rounded-full p-2 bg-white border-[1px] border-primary flex justify-center items-center">
                              <FaHeart className="h-6 w-6 " />
                            </span>
                            <span
                              onClick={() =>
                                HandleAddTCart(
                                  few,
                                  1,
                                  few?.defaultSize,
                                  few?.defaultColor
                                )
                              }
                              className=" cursor-pointer rounded-full p-2 text-white bg-primary flex justify-center items-center"
                            >
                              <FaShoppingCart className="h-6 w-6" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <>
                {bestSeller &&
                  bestSeller?.map((best) => (
                    <div
                      to={`/product/${best?.id}`}
                      className="hover:shadow-2xl transition ease-in-out duration-500 rounded-md overflow-hidden "
                    >
                      <div className="w-full  h-[26rem]  overflow-hidden  ">
                        <Link
                          to={`/product/${best?.id}`}
                          className="w-full h-full"
                        >
                          <img
                            src={`${best?.image}`}
                            alt="Fashio"
                            className="  object-cover w-full h-full  "
                          />
                        </Link>
                      </div>
                      <div className="p-2">
                        <p className="text-black font-bold mt-2 ">
                          {best?.name}
                        </p>
                        <LinesEllipsis
                          className="text-black  mt-2 z-50"
                          text={best?.description}
                          maxLine="1"
                          ellipsis="..."
                          trimRight
                        />

                        <div className="flex justify-between items-center mt-2">
                          <span className="p-2 bg-primary text-white rounded-md">
                            ${best?.price}
                          </span>

                          <div className="flex justify-between items-center gap-4">
                            <span className="rounded-full p-2 bg-white border-[1px] border-primary flex justify-center items-center">
                              <FaHeart className="h-6 w-6 " />
                            </span>
                            <span
                              onClick={() =>
                                HandleAddTCart(
                                  best,
                                  1,
                                  best?.defaultSize,
                                  best?.defaultColor
                                )
                              }
                              className=" cursor-pointer rounded-full p-2 text-white bg-primary flex justify-center items-center"
                            >
                              <FaShoppingCart className="h-6 w-6" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="flexRow  mt-8">
            {fewDisplay ? (
              <span
                onClick={() => setFewDisplay(false)}
                className="rounded-md bg-white text-black border-2 border-primary cursor-pointer p-2"
              >
                See More
              </span>
            ) : (
              <span
                onClick={() => setFewDisplay(true)}
                className="rounded-md bg-white text-black  border-2 border-primary cursor-pointer p-2"
              >
                See Less
              </span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
