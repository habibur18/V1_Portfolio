import MessengerCustomerChat from "react-messenger-customer-chat";
import Techstack from "../Sections/3_Techstack";
import Projects from "../Sections/4_Projects";
import AboutMe from "../Sections/6_AboutMe";
import Contact from "../Sections/Contact";
import Intro from "../Sections/Intro";
import Navbar from "../Sections/Navbar";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <MessengerCustomerChat pageId="209067758947640" appId="894693308537157" />
      <Navbar />
      <Intro />
      <Techstack />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Home;
