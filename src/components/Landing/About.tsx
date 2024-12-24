import React from "react";

const About: React.FC = () => {
  return (
    <div className="align-elements flex flex-col items-center h-full py-20">
      <div className="text-center">
        <small className="text-lg font-light text-orange-600">
          Simplify your meal planning and preparation
        </small>
        <h1 className="text-5xl font-bold">Always Enjoy Cooking</h1>
        <p className="max-w-2xl mt-4 text-lg font-light text-gray-700">
          Discover a world of simple, delicious recipes designed to fit your
          lifestyle. Whether you're a busy professional, a parent juggling it
          all, or just someone looking to eat healthier, our step-by-step guides
          and tailored meal ideas make cooking stress-free and enjoyable. Take
          the guesswork out of meal prep and transform the way you approach your
          kitchen with ease and confidence.
        </p>
      </div>
    </div>
  );
};

export default About;
