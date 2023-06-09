import Hero from "./components/Hero";
import "./App.css";
import SocialLinks from "./components/SocialLinks";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <div className="Overlay flex flex-col justify-center md:justify-between items-center gap-[1.2rem]">
        <Hero />
        <div className="flex justify-center mt-4 mx-4 mb-[.9rem] w-[100%]">
          <SocialLinks />
        </div>
        <div className="">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default App;
