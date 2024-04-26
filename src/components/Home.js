import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const firebrick ={color: 'firebrick'};
  
  return <div>Home
    <h1 style={firebrick}>Your {name} is a Web Developer from Your {city}</h1>

  </div>;
}

export default Home;
