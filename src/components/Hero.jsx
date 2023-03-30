import OmeaLogo from "../Assets/Images/omeaLogo.svg";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero flex flex-col justify-center items-center pt-4">
      <img src={OmeaLogo} alt="OmeaLogo" className="w-[15rem] pb-8" />
      <p className="Header text-center font-bold text-white text-[1.5rem] pb-2">
        شركة اوميــا للتسويق الاعلاني
      </p>
      <p className="HeroText text-center text-white dir-[rtl] text-[1rem] w-fit mx-[1.7rem] mt-2">
        تسويق - تخطيط - اعلانات - تصميم - طباعة - تصوير - انتاج - برمجة انظمة -
        تطبيقات - مواقع الكترونية - تجهيز مستلزمات اعلانية
      </p>
    </div>
  );
};

export default Hero;
