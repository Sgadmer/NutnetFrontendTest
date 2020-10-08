import React from "react";

function HeaderContent() {
  return (
    <div className="headerContent contentWrapper">
      <h1 className="headerContent__topic separator">We Are Awesome Creative Agency</h1>
      <p className="headerContent__content">
        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
        elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
        amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
        velit.
      </p>
      <a href="/#" className="cyanButton headerContent__learnMORE-BTN">
        LEARN MORE
      </a>
    </div>
  );
}

export default HeaderContent;
