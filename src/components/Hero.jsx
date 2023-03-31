import OmeaLogo from "../Assets/Images/logo-omea.svg";
import Text from "../Assets/Images/txt.svg";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero flex flex-col justify-center items-center pt-8 pb-6">
      <img src={OmeaLogo} alt="OmeaLogo" className="w-[13rem] pb-2" />
      <img src={Text} alt="Omea Duties" />
    </div>
  );
};

export default Hero;
