import React, { useState } from "react";
import "./FeedbackForm.scss";

function FeedbackForm() {
  const [headerText, setHeaderText] = useState("GIVE US A GOOD NEWS");
  const [formVisibility, setFormVisibility] = useState(true);
  const [formsClasses, setFormsClasses] = useState("feedbackForm");

  function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    let formContent = {
      name: target.name.value.trim(),
      email: target.email.value.trim(),
      subject: target.subject.value.trim(),
      message: target.message.value.trim(),
    };

    setFormsClasses("feedbackForm formSubmitted");
    setTimeout(() => {
      setFormVisibility(false);
    }, 4000);

    const nameToUpper = formContent.name.toUpperCase();
    setHeaderText(`${nameToUpper}, THANKS FOR A GOOD NEWS!`);

    //...Действия с формой...
  }

  return (
    <div className="feedbackFormWrapper">
      <h1 className="feedbackFormHeader">{headerText}</h1>
      {formVisibility && (
        <form
          action="/#"
          className={formsClasses}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            className="feedbackForm__nameInput"
            required={true}
            name="name"
            placeholder="Name"
          />
          <input
            type="email"
            className="feedbackForm__emailInput"
            required={true}
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            className="feedbackForm__subjectInput"
            required={true}
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="feedbackForm__textArea"
            required={true}
            name="message"
            placeholder="Your Massage"
          ></textarea>
          <button className="feedbackForm__submi-BTN cyanButton" type="submit">
            SUBMIT
          </button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
