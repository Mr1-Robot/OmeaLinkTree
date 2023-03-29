import OmeaLogo from "../Assets/Images/omeaLogo.svg";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero flex flex-col justify-center items-center pt-4">
      <img src={OmeaLogo} alt="OmeaLogo" className="w-[15rem] pb-8" />
      <p className="text-center font-bold text-white">
        شركــــــــة أومـــــــــــــــــــــــــــــــــيا
        ميـــــــــــــــــــــــــــــــديا للتسويق والدعاية والطباعة والبرمجة.
      </p>
    </div>
  );
};

export default Hero;
