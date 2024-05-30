"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const Menu = () => {
  const [foodType, setFoodType] = useState("pizza");

  const handleFoodTypeChange = (type) => {
    setFoodType(type);
  };

  // -- pizza ----

  const pizzaImages = [
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/iphone_15_pro_max_natural_titanium_1?1709801898?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/iphone_15_pro_natural_titanium_1?1709801897?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/Apple_iPhone11Pro_gold_1?1711013111?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/000000000001164648_1?1711013111?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/IPHONE13_starlight_1?1705940378?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/IPHONE13_blue_1?1705940381?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/IPHONE14PLUS_Blue_1?1716901446?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/000000000001232928_1?1708338437?g=0",
    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/iphone_15_plus_blue_1?1709801896?g=0",



  ];

  const pizzaTitles = [
    "Apple iPhone 15 Pro Max",
    "Apple iPhone 15 Pro (128GB)",
    "Apple iPhone 11 Pro",
    "Apple iPhone 11 Pro",
    " Apple iPhone 13 (128GB)",
    "Apple iPhone 13 (256GB)",
    "Apple iPhone 14 Plus (128GB)",
    "Apple 20W USB-C Power Adapter",
    "Apple iPhone 15 Plus",
  ];

  const pizzaPrices = ["AED 4,499.00", "AED 4,099.00", "AED 4,499.00", "AED 1,999.00","AED 2,599.00", "AED 2,120.00","AED 2,899.00","AED 64.00","AED 3,299.01"];

  // ----- end pizza -----

  // --- pasta ------

  const pastaImages = [
    "https://hips.hearstapps.com/hmg-prod/images/delish-221130-perfect-chicken-alfredo-0689-eb-1670449996.jpg?crop=0.774xw:0.856xh;0.115xw,0.0741xh&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/delish-230516-dirty-martini-pasta-049-rl-lead-646f71387a67e.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/chicken-spaghetti-lead-6568d554cc839.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/tuscan-chicken-pasta-lead-65973001af12d.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/delish-210212-feta-pasta-006-ab-1613747029.jpg?crop=0.9997369113391213xw:1xh;center,top&resize=980:*",
  ];

  const pastaTitles = [
    "Chicken Alfredo",
    "Dirty Martini Pasta",
    "Chicken Spaghetti",
    "Tuscan Chicken Pasta",
    "Baked Feta Pasta",
  ];

  const pastaPrices = ["15$", "17$", "21$", "16$", "12$"];

  // ----end pasta

  // ---- sandwiches ---

  const sandwichImages = [
    "https://hips.hearstapps.com/hmg-prod/images/monte-cristo-sandwich-horizontal-1676060707.jpg?crop=0.668xw:1.00xh;0.127xw,0&resize=360:*",
    "https://hips.hearstapps.com/hmg-prod/images/delish-200713-fried-fish-sandwich-001-ab-1597254726.jpg?crop=0.668xw:1.00xh;0.107xw,0&resize=360:*",
    "https://hips.hearstapps.com/hmg-prod/images/delish-egglife-club-sandwich-wrap-still002-1674842391.jpg?crop=0.564xw:1.00xh;0.194xw,0&resize=360:*",
    "https://hips.hearstapps.com/hmg-prod/images/thai-fried-chicken-sandwich-5-1659390700.jpeg?crop=0.580xw:0.870xh;0.176xw,0.120xh&resize=360:*",
    "https://hips.hearstapps.com/hmg-prod/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=0.671xw:1.00xh;0.144xw,0&resize=360:*",
  ];

  const sandwichTitles = [
    "Monte Cristo Sandwich",
    "Fried Fish Sandwich",
    "Club Sandwich Wraps",
    "Thai Fried Chicken Sandwich",
    "Club Sandwich",
  ];

  const sandwichPrices = ["12$", "13$", "14$", "15$", "11$"];

  // ----- end sandwiches -----

  // ---- meals ---------
  const mealImages = [
    "https://hips.hearstapps.com/hmg-prod/images/white-chicken-chili-lead-64d3abcd56369.jpg?crop=0.669xw:1.00xh;0.195xw,0&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/chicken-tamale-pie-secondary-64da954b55019.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/delish-202209-pizzacasserole-043-1663930071.jpg?crop=0.8333333333333334xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-vertical-649de799bd4a2.jpg?crop=0.663xw:0.798xh;0.0842xw,0.122xh&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/mexican-beef-n-rice-skillet4-1665593965.jpg?crop=0.8333333333333334xw:1xh;center,top&resize=980:*",
  ];

  const mealTitles = [
    "White Chicken Chili",
    "Chicken Tamale Pie",
    "Pizza Casserole",
    "Chicken Fajitas",
    "Mexican Beef 'N Rice Skillet",
  ];

  const mealPrices = ["20$", "23$", "24$", "27$", "25$"];

  // ----- end meals  ----

  return (
    <div className="mt-10">
      <div className="title mt-10 text-center">
        <h3 className="text-[#9b7b32] text-4xl  font-bold">Our Items</h3>
        <p className="text-xl text-[#3b4f34] mt-5">Where Quality Matters</p>
      </div>

      {/* <div className="typesOfFood my-10 flex justify-center sm:gap-10 gap-3 sm:p-0 ">
        <div
          className="pizza cursor-pointer"
          onClick={() => handleFoodTypeChange("pizza")}
        >
          <div className="cirle border border-[#3b4f34] w-20 md:w-24 lg:w-28 lg:h-28 rounded-full p-5">
            <Image
              src="https://maisonthomas.net/backend/public/images/categories/1697984582.png"
              alt="pizza"
              width={62}
              height={62}
            ></Image>
          </div>
          <p className="text-center  text-[#3b4f34] text-lg">Pizza</p>
        </div>

        <div
          className="pasta cursor-pointer"
          onClick={() => handleFoodTypeChange("pasta")}
        >
          <div className="cirle border border-[#3b4f34] w-20 md:w-24 lg:w-28 lg:h-28 rounded-full p-5">
            <Image
              src="https://maisonthomas.net/backend/public/images/categories/1697984593.png"
              alt="pasta"
              width={62}
              height={62}
            ></Image>
          </div>
          <p className="text-center text-[#3b4f34] text-lg">Pasta</p>
        </div>
        
        <div
          className="hotSandwiches cursor-pointer"
          onClick={() => handleFoodTypeChange("sandwiches")}
        >
          <div className="cirle border border-[#3b4f34] w-20 md:w-24 lg:w-28 lg:h-28 rounded-full p-5">
            <Image
              src="https://maisonthomas.net/backend/public/images/categories/1698046269.png"
              alt="pasta"
              width={62}
              height={62}
            ></Image>
          </div>
          <p className="text-center text-[#3b4f34] text-lg">Sandwiches</p>
        </div>

      

        <div
          className="meals cursor-pointer -ml-3 sm:ml-0 "
          onClick={() => handleFoodTypeChange("meals")}
        >
          <div className="cirle border border-[#3b4f34] w-20 md:w-24 lg:w-28 lg:h-28 rounded-full p-5">
            <Image
              src="/meals.png"
              alt="meals"
              width={62}
              height={62}
            ></Image>
          </div>
          <p className="text-center text-[#3b4f34] text-lg">Meals</p>
        </div>
      </div> */}

      <div className="parentSlider  ">
        {/* ----- piza ----- */}
        {foodType === "pizza" && (
          <div>
            {/* <h3 className="text-[#9b7b32] flex justify-center text-3xl text-center font-bold">
              Pizza
            </h3> */}
            <div className="childSlider grid grid-cols-2 lg:grid-cols-3 mx-auto lg:gap-20 max-w-md lg:max-w-5xl">
              {pizzaImages.map((image, index) => (
                <div
                  key={index}
                  className="w-fit  bg-white  rounded-3xl mt-8 mx-auto"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    {/* <div className=" w-64 h-48 sm:h-72 rounded-xl"> */}
                    <div className=" lg:w-80 rounded-xl">
                      <img
                        className="group-hover:scale-105 h- w- transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{pizzaTitles[index]}</h3>
                    <div>
                      <p className="mt-2 font-bold text-orange-800 bg-orange-100 px-4 py-2 w-fit rounded-xl text-xs">
                        {pizzaPrices[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- pasta ------ */}
        {foodType === "pasta" && (
          <div>
            <h3 className="text-[#9b7b32] text-3xl text-center font-bold">
              Pasta
            </h3>
            <div className="childSlider w-full whitespace-nowrap overflow-x-scroll scrollbar-hide scrollbar-smooth relative flex gap-5">
              {pastaImages.map((image, index) => (
                <div
                  key={index}
                  className="sm:w-[500px] w-[250px] bg-white pb-2 rounded-3xl mt-8"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="w-80 h-48 sm:h-72 rounded-xl relative overflow-hidden">
                      <img
                        className="group-hover:scale-105 h-full w-full transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{pastaTitles[index]}</h3>
                    <div>
                      <p className="mt-2 font-bold text-orange-800 bg-orange-100 px-4 py-2 w-fit rounded-xl text-xs">
                        {pastaPrices[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------ sandwiches */}

        {foodType === "sandwiches" && (
          <div>
            <h3 className="text-[#9b7b32] text-3xl text-center font-bold">
              Sandwiches
            </h3>
            <div className="childSlider w-full whitespace-nowrap overflow-x-scroll scrollbar-hide scrollbar-smooth relative flex gap-5">
              {sandwichImages.map((image, index) => (
                <div
                  key={index}
                  className="sm:w-[500px] w-[250px] bg-white pb-2 rounded-3xl mt-8"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="w-80 h-48 sm:h-72 rounded-xl relative overflow-hidden">
                      <img
                        className="group-hover:scale-105 h-full w-full transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{sandwichTitles[index]}</h3>
                    <div>
                      <p className="mt-2 font-bold text-orange-800 bg-orange-100 px-4 py-2 w-fit rounded-xl text-xs">
                        {sandwichPrices[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------- meals -------- */}

        {foodType === "meals" && (
          <div>
            <h3 className="text-[#9b7b32] text-3xl text-center font-bold">
              Meals
            </h3>
            <div className="childSlider w-full whitespace-nowrap overflow-x-scroll scrollbar-hide scrollbar-smooth relative flex gap-5">
              {mealImages.map((image, index) => (
                <div
                  key={index}
                  className="sm:w-[500px] w-[250px] bg-white pb-2 rounded-3xl mt-8"
                >
                  <a
                    className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <div className="w-80 h-48 sm:h-72 rounded-xl relative overflow-hidden">
                      <img
                        className="group-hover:scale-105 h-full w-full transition-transform duration-500 ease-in-out rounded-xl object-cover"
                        src={image}
                        alt="Pizza Image"
                      />
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4"></div>
                  </a>
                  <div className="mt-3 px-4">
                    <h3 className="text-lg text-">{mealTitles[index]}</h3>
                    <div>
                      <p className="mt-2 font-bold text-orange-800 bg-orange-100 px-4 py-2 w-fit rounded-xl text-xs">
                        {mealPrices[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
