import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Myportfolio from "./components/Myportfolio";
import Skills from "./components/Skill";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <Header /> */}
      <About />
      <Skills />
      <Myportfolio />
      <Footer />
    </div>
  );
}
