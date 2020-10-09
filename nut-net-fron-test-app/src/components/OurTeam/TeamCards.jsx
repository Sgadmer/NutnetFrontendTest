import React from "react";

const teammateInfo = [
  { name: "SEMF UCUK", speciality: "CEO & FOUNDER" },
  { name: "DIK ADALIN", speciality: "ENGINEERING" },
  { name: "JENG KOL", speciality: "DESIGNER" },
  { name: "PET ROMAK", speciality: "MARKETING" },
];

function createTeamCards() {
  return teammateInfo.map((teammate, index) => (
    <div className="teammateCard col-lg-2 col-sm-5" key={index}>
      <div className="teammateCard__avatar" />
      <div className="description">
        <h2 className="description__header">{teammate.name}</h2>
        <p className="description__paragraph">{teammate.speciality}</p>
      </div>
    </div>
  ));
}

function TeamCards() {
  return (
    <div className="teamCards">
      <div className="row">{createTeamCards()}</div>
    </div>
  );
}

export default TeamCards;
