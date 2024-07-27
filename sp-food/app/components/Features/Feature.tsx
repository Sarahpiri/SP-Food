import React from "react";
import image1 from "../../../public/assets/our-burgers.png";
import Image from "next/image";
import image2 from '../../../public/assets/meet-steak.png'
import image3 from "../../../public/assets/hot-chikens.jpg";


const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* {heading} */}
      <h1 className="heading">
        burgers made with
        <br />
        love and {''}
        <span className="text-red-700">Care</span>
      </h1>
      {/* {cards} */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* {1st card} */}
        <div>
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={image1} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Burgers
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              lorem ipsum dolor sit amet consectetur adipisicing
              elit.Accusantium iste praesentium sit in autem velit, voluptates
              ex dolorum ea necessitatibus
            </p>
          </div>
        </div>
        {/* {2nd card} */}
        <div>
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={image2} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Beef Steak
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              lorem ipsum dolor sit amet consectetur adipisicing
              elit.Accusantium iste praesentium sit in autem velit, voluptates
              ex dolorum ea necessitatibus
            </p>
          </div>
        </div>
        {/* {3rd card} */}
        <div>
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={image3} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Chiken Fries
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              lorem ipsum dolor sit amet consectetur adipisicing
              elit.Accusantium iste praesentium sit in autem velit, voluptates
              ex dolorum ea necessitatibus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
