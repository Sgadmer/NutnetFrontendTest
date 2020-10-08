import React from "react";
import "./OurStory.scss";
import logo from "./ourStoryLogo.png";


function OurStory() {
  return (
    <div className="ourStoryWrapper">
      <div className="ourStory contentWrapper">
        <img className="ourStory__logo" src={logo} alt="OurStoryLogo"/>
        <div className="ourStory__content">
          <h1>OUR STORY</h1>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus
          </p>
          <p>
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
          <a href="/#" className="cyanButton">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
