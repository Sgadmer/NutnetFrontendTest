import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import OurStory from "./components/OurStory/OurStory";
import WatchOurStory from "./components/WatchOurStory/WatchOurStory";
import Expertise from "./components/Expertise/Expertise";
import OurTeam from "./components/OurTeam/OurTeam";
import OurWorks from "./components/OurWorks/OurWorks";
import Reviews from "./components/Reviews/Reviews";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  useEffect(() => {
    document.title = "Tajam";
  }, []);

  return (
    <>
      <Header />
      <OurStory />
      <WatchOurStory />
      <Expertise />
      <OurTeam />
      <OurWorks />
      <Reviews />
      <FeedbackForm />
    </>
  );
}

export default App;
