import React from "react";
import ControlledCarousel from "../../ControlledCarousel/ControlledCarousel";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <PageTitle title={"home"} />
      <ControlledCarousel />
      <Services />
    </div>
  );
};

export default Home;
