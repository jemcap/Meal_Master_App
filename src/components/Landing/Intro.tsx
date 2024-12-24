import React from "react";
import Carousel from "./Carousel";

const Intro: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="relative min-h-[80vh] bg-cover bg-[50%_50%] bg-no-repeat sm:bg-[90%_50%] md:pb-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1627906295817-622535c6ee5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          top: "5rem",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 z-10"></div>

        <div className="relative flex justify-center items-center min-h-[64vh] w-full text-white text-center z-20">
          <div className="h-auto w-11/12 md:gap-2 flex flex-col">
            <Carousel />
            <h3 className="font-light text-xl md:text-4xl">
              Whatever it is, we've got your back!
            </h3>
            <h1 className="text-7xl md:text-9xl font-bold">Meal Master</h1>
            <p className="text-lg">
              The best place to find your favorite meals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
