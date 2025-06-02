import React from "react";
import Proj from "./Proj/Proj";
import FadeInSection from "./Fadein";

function Projects() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-full text-white mt-0 Projects ">
        {/* <span className="text-green-800 text-3xl font-bold text-center mb-4">
          Projects
        </span> */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center w-full gap-4 ">
          
          <FadeInSection>
            <Proj
              fname="macbook-pro.glb"
              title="Medical Report Analyzer"
              desc="ML-based CBC report analyzer. Predicts blood-related diseases."
            />
          </FadeInSection>
          <FadeInSection>
            <Proj
              fname="fcbw.glb"
              title="FCB Widget"
              desc="An Android home screen widget that proudly displays the iconic Black FC Barcelona (Barça) logo."
            />
          </FadeInSection>
          <FadeInSection>
            <Proj
              fname="resona.glb"
              title="Resona "
              desc="A project that identifies the song playing in the background and provides information about it."
            />
          </FadeInSection>
        </div>
      </div>
    </>
  );
}

export default Projects;
