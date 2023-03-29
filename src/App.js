import Hero from "./components/Hero";
import "./App.css"
import SocialLinks from "./components/SocialLinks";
import Location from "./components/Location";

function App() {
  

  return (
    <div className="App">
      <div className="Overlay flex flex-col justify-between items-center">
        <Hero />
        <div className="flex justify-center w-[100%]">
          <SocialLinks />
        </div>
        <Location />
      </div>
    </div>
  );
}

export default App;
