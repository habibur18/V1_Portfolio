import Techstack from "../Sections/3_Techstack";
import Projects from "../Sections/4_Projects";
import AboutMe from "../Sections/6_AboutMe";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer/Footer";
import Intro from "../Sections/Intro";
import Navbar from "../Sections/Navbar";
import Sidebar from "../Sections/SideBar/Sidebar";

const Home = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <Navbar />
        <Intro />
        <Techstack />
        {/* <SolarSystem /> */}

        <Projects />
        <AboutMe />
        <Contact />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default Home;
