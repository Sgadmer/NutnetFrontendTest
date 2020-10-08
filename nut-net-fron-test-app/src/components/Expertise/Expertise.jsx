import React from "react";
import "./Expertise.scss";
import ExpertiseCards from "./ExpertiseCards";

function Expertise() {
  return (
    <div className="expertise">
      <h1 className="expertise__header">EXPERTISE</h1>
      <p className="expertise__description separator">
        Lorem ipsum dolor sit amet proin gravida nibh vel velit
      </p>

      <ExpertiseCards />
    </div>
  );
}

export default Expertise;
