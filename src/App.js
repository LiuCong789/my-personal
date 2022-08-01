import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
