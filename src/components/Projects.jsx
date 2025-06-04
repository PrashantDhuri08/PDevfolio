import React from "react";
import Proj from "./Proj/Proj";
import FadeInSection from "./Fadein";

function Projects() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full sm:w-lvw h-full text-white mt-0 Projects ">
        {/* <span className="text-green-800 text-3xl font-bold text-center mb-4">
          Projects
        </span> */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center w-full gap-4 ">
          <FadeInSection>
            <Proj
              fname="resona.glb"
              title="Resona "
              desc="Web app that identifies the song playing in the background and provides information about it. Built using Flask"
              clink="https://github.com/PrashantDhuri08/RESONA"
              livelink="https://resona.onrender.com/"
            />
          </FadeInSection>

          <FadeInSection>
            <Proj
              fname="macbook-pro.glb"
              title="Medical Report Analyzer"
              desc="ML-based CBC report analyzer. Predicts blood-related diseases."
              clink="https://github.com/PrashantDhuri08/Medical_Report_Analyzer"
            />
          </FadeInSection>
          <FadeInSection>
            <Proj
              fname="fcbw.glb"
              title="FCB Widget"
              desc="An Android home screen widget that  displays the iconic Black FC Barcelona (Barça) logo."
              clink="https://github.com/PrashantDhuri08/FCB_Widget"
            />
          </FadeInSection>
        </div>
      </div>
    </>
  );
}

export default Projects;
