import React from "react";

import Navigation from "./Navigation";
import Card from "./Card";

import React, { useState, useEffect } from 'react';



const Explore = ({ marketPlace }) => {
  // All the tutorials

  const [tutorials, setTutorials] = useState([])

  useEffect(() => {
    marketPlace.getTutorial().then(setTutorials);
  }, []);

  return (
    <>
      <Navigation />
      <div className="pt-5 pl-5 pr-5">
        <Card />
      </div>
    </>
  );
};

export default Explore;
