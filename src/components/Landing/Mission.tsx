import React from "react";
import Salad from "../../assets/salad_w_eggs.png";

const Mission: React.FC = () => {
  return (
    <>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#F97316"
          ></path>
        </svg>
      </div>
      <div className="bg-orange-500 relative h-full flex w-full flex-col items-center justify-center px-12 py-16 md:flex-row lg:px-32">
        <div className="flex flex-col items-start md:w-1/3">
          <span className="text-sm font-bold uppercase tracking-wide text-tertiary">
            All-in
          </span>
          <div className="flex flex-col items-start justify-center gap-8 xl:max-w-2xl">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Healthy &amp; delicious meal prep for your needs.
            </h2>
            <div className="flex w-full md:hidden">
              <img
                src="https://prepkitchen.co.uk/img/arrowblack.png"
                alt="Arrow"
                className="w-24 -rotate-180"
              />
            </div>
            <div className="text-balance flex flex-col text-lg">
              <ul className="mt-36 flex list-inside list-disc flex-col gap-4 font-light leading-normal tracking-tight md:mt-0">
                <li>
                  <span className="font-medium">Cuisine preferences:</span>{" "}
                  Protein may help support weight loss by regulating satiety
                  hormones and helping you to feel fuller for longer.
                </li>
                <li>
                  <span className="font-medium">Dietary requirements:</span>{" "}
                  Protein may help support weight loss by regulating satiety
                  hormones and helping you to feel fuller for longer.
                </li>
                <li>
                  <span className="font-medium">Set boundaries:</span> Protein
                  may help support weight loss by regulating satiety hormones
                  and helping you to feel fuller for longer.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-2/3">
          <img src={Salad} alt="" />
        </div>
      </div>
    </>
  );
};

export default Mission;
