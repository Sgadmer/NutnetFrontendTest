import React from "react";
import "./OurTeam.scss";
import TeamCards from "./TeamCards";

function OurStory() {
  return (
    <div className="ourTeamWrapper">
      <div className="ourTeam contentWrapper">
        <div className="ourTeam__header">MEET OUR AMAZING TEAM</div>
        <div className="ourTeam__description separator">
          Lorem ipsum dolor sit amet proin gravida nibh vel velit
        </div>
        <TeamCards />

        <div className="ourTeam__description2">
          Become part of our dream team, let’s join us !
        </div>

        <a href="/#" className="cyanButton ourTeam__hiring-BTN">
          WE ARE HIRING
        </a>
      </div>
    </div>
  );
}

export default OurStory;
