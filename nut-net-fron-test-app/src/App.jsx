import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import OurStory from "./components/OurStory/OurStory";
import WatchOurStory from "./components/WatchOurStory/WatchOurStory";
import Expertise from "./components/Expertise/Expertise";
import OurTeam from "./components/OurTeam/OurTeam";
import OurWorks from "./components/OurWorks/OurWorks";

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
      <OurWorks/>
    </>
  );
}

export default App;
