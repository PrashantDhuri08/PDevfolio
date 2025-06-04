import React from "react";
import BlurText from "./Text/Htext";

function Profile() {
  return (
    <div className="Profile">
      <div className="flex w-dvw justify-center items-center h-lvh text-white p-4">
        <h1 className=" text-4xl sm:text-5xl text-shadow-black font-bold ">
          <span className="text-zinc-100 text-xl sm:text-2xl font-sans block">
            Prashant Dhuri
          </span>
          <span className="text-white text-2xl sm:text-3xl font-extralight">
            Student & Software Developer (i guess...)
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Profile;
