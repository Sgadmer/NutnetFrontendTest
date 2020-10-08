import React from "react";

const expertiseTopics = [
  "WEB DESIGN & DEVELOPMENT",
  "BRANDING IDENTITY",
  "MOBILE APP",
  "SEARCH ENGINE OPTIMIZATION",
  "GAME DEVELOPMENT",
  "MADE WITH LOVE",
];

function createExpertiseCard(numberOfCards) {
  let cardsArray = [];

  for (let i = numberOfCards - 3; i < numberOfCards; i++) {
    cardsArray.push(
      <div className={`card card${i + 1} col-lg-4 col-md-12`} key={i}>
        <div className="card__iconWrapper" />
        <h2 className="card__header">{expertiseTopics[i]}</h2>
        <p className="card__textContent">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet Aenean.
        </p>
      </div>
    );
  }

  return cardsArray;
}

function ExpertiseCards() {
  return (
    <div className="expertiseCards contentWrapper container">
      <div className="row">{createExpertiseCard(3)}</div>
      <hr className="row__hr" />
      <div className="row">{createExpertiseCard(6)}</div>
    </div>
  );
}

export default ExpertiseCards;
