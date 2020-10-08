import React, { useState } from "react";
import "./WatchOurStory.scss";
import PlayTriangle from "./triangle.png";

function WatchOurStory() {
  const [isVideoOpen, SetIsVideoOpen] = useState(false);
  return (
    <div className="WatchOurStory">
      <div
        className="WatchOurStory__videoOpen-BTN"
        onClick={() => SetIsVideoOpen(true)}
      >
        <img src={PlayTriangle} />
      </div>
      <h2 className="WatchOurStory__PromoText">WATCH OUR STORY</h2>

      {isVideoOpen && (
        <div className="promoVideo">
          <div
            className="promoVideo__close-BTN"
            onClick={() => SetIsVideoOpen(false)}
          />
          <iframe
            className="promoVideo__iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KvUgaHTNit4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default WatchOurStory;
