import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/hero/Hero";
import Residencies from "./components/residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
        <Residencies />
      </div>
    </div>
  );
}

export default App;
