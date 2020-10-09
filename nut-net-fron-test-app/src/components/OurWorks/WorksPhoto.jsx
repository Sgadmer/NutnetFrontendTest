import React, { useState } from "react";

function createWorksPhotoCards(cardsNumber) {
  let cardsArray = [];

  for (let i = 0; i < cardsNumber; i++) {
    cardsArray.push(
      <div
        className="workPhoto col-xl-2 col-lg-4 col-md-6 col-sm-12"
        key={Math.floor(Math.random() * Math.floor(1000000))}
      ></div>
    );
  }

  return cardsArray;
}

function WorksPhoto() {
  const [worksPhotoCards, SetWorksPhotoCards] = useState(() =>
    createWorksPhotoCards(12)
  );

  function loadMorePhotos() {
    let NewPhotos = createWorksPhotoCards(6);
    SetWorksPhotoCards(NewPhotos.concat(worksPhotoCards));
  }

  return (
    <>
      <div className="worksPhoto">
        <div className="row no-gutters">{worksPhotoCards}</div>
      </div>

      <button className="cyanButton" onClick={() => loadMorePhotos()}>
        LOAD MORE
      </button>
    </>
  );
}

export default WorksPhoto;
