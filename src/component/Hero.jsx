import React from "react";

function Hero(props) {
  return (
    <>
      <div className="bg-indigo-800 text-center p-20 leading-loose text-white  flex-col">
        <h1 className="font-bold  text-6xl ">{props.title}</h1>
        <p className="text-xl">{props.subtitle}</p>
      </div>
    </>
  );
}

export default Hero;
