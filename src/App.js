import Hero from "./components/Hero";
import "./App.css"
import SocialLinks from "./components/SocialLinks";
import Location from "./components/Location";

function App() {
  

  return (
    <div className="App">
      <div className="Overlay flex flex-col justify-between items-center">
        <Hero />
        <div className="flex justify-center mt-4 mx-4 mb-[.9rem] w-[100%]">
          <SocialLinks />
        </div>
        <div className="mb-[3.2rem] mt-6">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default App;
