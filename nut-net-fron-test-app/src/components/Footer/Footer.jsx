import React, { useState } from "react";
import "./Footer.scss";
import logo from "../../tajamLogo.png";
import locationPin from "./locationPin.png";
import phonePin from "./phonePin.png";
import paperPlane from "./paperPlane.png";

function Footer() {
  const [inputPlaceholder, setInputPlaceholder] = useState(
    "Subscribe our newsletter"
  );

  function handleSubscribe(e) {
    e.preventDefault();
    const target = e.target;
    target.subscribeEmail.value = '';
    setInputPlaceholder("Thanks for subscribing!");
  }

  return (
    <footer className="footer">
      <div className="footerContentWrapper contentWrapper">
        <div className="footerContent  row">
          <div className="footerContent__companyInfo col-lg-4">
            <img src={logo} alt="companyLogo" className="companyLogo" />
            <p className="companyDescription">
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
              odio non mauris vitae erat in elit
            </p>
          </div>

          <div className="footerContent__companyLocation col-lg-4">
            <h2 className="locationHeader">OUR STUDIO</h2>
            <div className="location">
              <div className="location__info">
                <img
                  src={locationPin}
                  alt="locationPin"
                  className="locationPin"
                />
                <p className="locationAdress">
                  Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
                  Jakarta Barat 11480 - Indonesia
                </p>
              </div>
              <div className="location__phone">
                <img src={phonePin} alt="phonePin" className="phonePin" />
                <p className="companyPhoneNumber">(+62) 21-2224 3333</p>
              </div>
            </div>
          </div>

          <div className="footerContent__socialNetworks col-lg-4">
            <h2 className="socialNetworksHeader">STAY IN TOUCH</h2>
            <form
              action="/#"
              className="subscriptionForm"
              onSubmit={(e) => handleSubscribe(e)}
            >
              <input
                type="email"
                name="subscribeEmail"
                className="subscriptionForm__input"
                placeholder={inputPlaceholder}
                required={true}
              />
              <button className="subscriptionForm__submit-BTN" type="submit">
                <img
                  src={paperPlane}
                  alt="papperPlane"
                  className="papperPlane"
                />
              </button>
            </form>
            <div className="socialNetworksLinks">
              <a href="/#" className="link ">
                <div className="link__icon icon-1Facebook"></div>
              </a>

              <a href="/#" className="link ">
                <div className="link__icon icon-2Twitter"></div>
              </a>

              <a href="/#" className="link ">
                <div className="link__icon icon-3Dribbble"></div>
              </a>

              <a href="/#" className="link ">
                <div className="link__icon icon-4Instagram"></div>
              </a>

              <a href="/#" className="link ">
                <div className="link__icon icon-5Google"></div>
              </a>

              <a href="/#" className="link ">
                <div className="link__icon icon-6Youtube"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="companyLinksAndCopyrights row">
          <ul className="companyLinks col-lg-4">
            <li className="companyLinks__linkWrapper">
              <a href="/#" className="link">
                HELP
              </a>
            </li>
            <li className="companyLinks__linkWrapper">
              <a href="/#" className="link">
                TERMS & CONDITION
              </a>
            </li>
            <li className="companyLinks__linkWrapper">
              <a href="/#" className="link">
                PRIVACY
              </a>
            </li>
          </ul>

          <small className="copyRights col-lg-4">
            Copyright &copy; 2015 - Tajem Creative
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
