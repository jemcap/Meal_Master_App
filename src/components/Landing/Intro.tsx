import React from "react";
import Carousel from "./Carousel";
import PrimaryButton from "../Button/PrimaryButton";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="relative min-h-[80vh] bg-cover bg-no-repeat md:pb-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1627906295817-622535c6ee5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: "50% 50%",
          top: "5rem",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative flex justify-center items-center min-h-[64vh] w-full text-white text-center z-20">
          <div className="h-auto w-11/12 flex flex-col">
            <Carousel />
            <h3 className="font-light text-xl md:text-4xl">
              Whatever it is, we've got your back!
            </h3>
            <h1 className="text-7xl md:text-9xl font-bold">Meal Master</h1>
            <p className="text-lg">
              The best place to find your favorite meals
            </p>
            <div className="mt-8">
              <Link to="/recipes">
                <PrimaryButton text="Get Started" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
