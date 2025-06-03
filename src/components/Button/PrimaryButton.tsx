import React from "react";

type PrimaryButtonProps = {
  text: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <button
      type="button"
      className="inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 active:bg-orange-700 active:shadow-inner dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-500"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
