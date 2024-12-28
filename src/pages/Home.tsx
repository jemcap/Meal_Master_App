import React from "react";
import Intro from "../components/Landing/Intro";
import About from "../components/Landing/About";
import Mission from "../components/Landing/Mission";

const Home: React.FC = () => {
  return (
    <main>
      <Intro />
      <About />
      <Mission />
    </main>
  );
};

export default Home;
