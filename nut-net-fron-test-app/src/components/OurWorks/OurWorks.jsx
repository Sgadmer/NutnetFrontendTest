import React from "react";
import "./OurWorks.scss";
import WorksPhoto from "./WorksPhoto";

function OurWorks() {
  return (
    <div className="ourWorks">
      <div className="worksHeader contentWrapper">
        <h1 className="worksHeader__topic">OUR WORKS</h1>
        <a href="/#" className="worksHeader__seeAllProjects-BTN">
          See All Project in dribbble
        </a>
      </div>
      <WorksPhoto />
    </div>
  );
}

export default OurWorks;
