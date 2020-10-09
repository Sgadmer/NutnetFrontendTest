import React, { useEffect, useState } from "react";
import "./WatchOurStory.scss";
import PlayTriangle from "./triangle.png";

function WatchOurStory() {
  const [isVideoOpen, SetIsVideoOpen] = useState(false);

  function handleClose(e) {
    if (e) {
      if (e.key !== "Escape") {
        return;
      }
    }
    SetIsVideoOpen(false);
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => handleClose(e));
    return () => {
      document.removeEventListener("keydown", (e) => handleClose(e));
    };
  });

  return (
    <div className="watchOurStory">
      <div
        className="watchOurStory__videoOpen-BTN"
        onClick={() => SetIsVideoOpen(true)}
      >
        <img src={PlayTriangle} alt="watchOurStory" />
      </div>
      <h2 className="watchOurStory__PromoText">WATCH OUR STORY</h2>

      {isVideoOpen && (
        <div className="promoVideo">
          <div
            className="promoVideo__close-BTN"
            onClick={() => handleClose()}
          />
          <iframe
            className="promoVideo__iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KvUgaHTNit4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="PromoVideo"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default WatchOurStory;
