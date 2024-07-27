"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import spBurger from "../../../public/assets/sp-burger-removebg-preview.png";
import spChiken from "../../../public/assets/vecteezy_ai-generated-grilled-chicken-wings-png_35675711.png";
import spPizza from "../../../public/assets/pizza-removebg-preview.png";
import spShrimps from "../../../public/assets/sp-shrimps-removebg-preview.png";
import chikSteak from "../../../public/assets/chiken-Steak-removebg-preview.png";
import lasagna from "../../../public/assets/sp-lasania.png";
import spSooshi from "../../../public/assets/Screenshot_2024-07-26_124003-removebg-preview.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PopularFoods = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-700">Foods</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          {/* {cards} */}
          <Cards
            title="Special Beef Burger"
            reviews="16"
            price="10.88$"
            image={spBurger}
          />
          <Cards
            title="Special Fries Chiken"
            reviews="12"
            price="12.38$"
            image={spChiken}
          />
          <Cards
            title="Special Shrimps"
            reviews="6"
            price="15.58$"
            image={spShrimps}
          />
          <Cards
            title="Special Pizza"
            reviews="9"
            price="13.20$"
            image={spPizza}
          />
          <Cards
            title="Special Chiken Steak"
            reviews="18"
            price="18.30$"
            image={chikSteak}
          />
          <Cards
            title="Special Lasagna"
            reviews="10"
            price="10.50$"
            image={lasagna}
          />
          <Cards
            title="Special Sooshi"
            reviews="8"
            price="12.88$"
            image={spSooshi}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularFoods;
