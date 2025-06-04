import React, { useState, useEffect } from "react";
import Models from "../Models/3dModels";
import Pbtn from "../MB/Pbtn";

function Proj(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dynamically determine the height based on screen size
  const modelContainerHeight = isMobile ? "h-96" : "lg:h-lvh"; // Adjust 'h-96' as needed

  return (
    <div className="pl-16 flex flex-col lg:flex-row justify-center items-center w-full p-4 ">
      {/* Text section */}
      <div className="w-full lg:w-1/2 lg:ml  mb-0 text-center flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">
          {props.title}
        </h1>
        <p className="text-sm sm:text-lg">{props.desc}</p>
        <div className="flex flex-row justify-center">
          <a href={props.clink}>
            <Pbtn text="Checkout Code " />
          </a>
          {props.livelink && (
            <a href={props.livelink}>
              <Pbtn text="Visit Live" />
            </a>
          )}
        </div>
      </div>

      {/* Model section */}
      <div
        className={`w-full lg:w-4/5 ${modelContainerHeight} flex justify-center p-4`}
      >
        <Models fname={props.fname} />
      </div>
    </div>
  );
}

export default Proj;
