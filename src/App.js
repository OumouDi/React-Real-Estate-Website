import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/hero/Hero";
import Residencies from "./components/residencies/Residencies";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Residencies />
      <Values />
      <Contact />
    </div>
  );
}

export default App;
