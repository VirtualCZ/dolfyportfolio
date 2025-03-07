import "./built-styles/main.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar text={"dolfy"} />
        <Hero/>
        <AboutMe/>
      </header>
    </div>
  );
}

export default App;
