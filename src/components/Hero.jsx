import OmeaLogo from "../Assets/Images/omeaLogo.svg";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero flex flex-col justify-center items-center pt-8 pb-6">
      <img src={OmeaLogo} alt="OmeaLogo" className="w-[13rem] pb-2" />
      <p className="Header text-center font-bold text-white text-[1.1rem] pb-2">
        شركــــــــة أومـــــــــــــــــــيا
        ميـــــــــــــــــــــــــــديا <br></br> للتسويق والدعاية والطباعة والبرمجة.{" "}
      </p>
    </div>
  );
};

export default Hero;
