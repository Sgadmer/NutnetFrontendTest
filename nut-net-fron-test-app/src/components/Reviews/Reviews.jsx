import React, { useEffect, useState } from "react";
import "./Reviews.scss";
import rev1 from "./reviewersPhotos/reviewer_1.png";
import rev2 from "./reviewersPhotos/reviewer_2.png";
import rev3 from "./reviewersPhotos/reviewer_3.png";
import rev4 from "./reviewersPhotos/reviewer_4.png";
import rev5 from "./reviewersPhotos/reviewer_5.png";
import reviewsInfo from "./reviewsArray";

const reviewersPhotos = {
  rev1,
  rev2,
  rev3,
  rev4,
  rev5,
};

function Reviews() {
  const [reviewText, setReviewText] = useState("");
  const [reviewersIcon, setreviewersIcon] = useState("");

  function createReviewTextBlock(reviewerNumber) {
    const reviewerObject = reviewsInfo[reviewerNumber];

    setReviewText(
      <>
        <p className="reviews__currentReview">{reviewerObject.text}</p>
        <h2 className="reviews__reviewerName">{reviewerObject.name}</h2>
        <h3 className="reviews__reviewerSpeciality">
          {reviewerObject.speciality}
        </h3>
      </>
    );
  }

  function createReviewersIcons(reviewerNumber) {
    setreviewersIcon(
      reviewsInfo.map((reviewObject, index) => {
        return (
          <>
            <li
              className="reviewersPhotos__photo"
              onClick={(e) => toggleReview(e)}
              key={index}
            >
              <img
                src={reviewersPhotos[`rev${index + 1}`]}
                alt="reviewersPhoto"
                data-selected={index == reviewerNumber}
                data-number={index}
              />
            </li>
          </>
        );
      })
    );
  }

  function toggleReview(e) {
    e.persist();
    let target = e.target;
    const number = target.getAttribute("data-number");
    createReviewTextBlock(number);
    createReviewersIcons(number);
  }

  useEffect(() => {
    createReviewTextBlock(2);
    createReviewersIcons(2);
  }, []);

  return (
    <div className="reviewsWrapper">
      <div className="reviews">
        <h1 className="reviews__quotes">“</h1>
        {reviewText}
        <ul className="reviewersPhotos">{reviewersIcon}</ul>
      </div>
    </div>
  );
}

export default Reviews;
