import { MdLocationOn } from "react-icons/md";
import "./Location.css";
import SwationLogo from "./SwationLogo";
const Location = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <a
        target="_blank"
        href="https://www.google.com/maps/place/%D8%A7%D9%88%D9%85%D9%8A%D8%A7+%D9%85%D9%8A%D8%AF%D9%8A%D8%A7+-+OMEA+Media%E2%80%AD/@33.3268223,44.408658,15z/data=!4m2!3m1!1s0x0:0x5f2f56c139e18c83?sa=X&ved=2ahUKEwjUzN2OjYP-AhVSUKQEHbMdA1kQ_BJ6BAhTEAg"
        rel="noreferrer"
        className="Location flex flex-col items-center justify-center"
      >
        <MdLocationOn className="LocationIcon text-[#FFFFFF] text-[3rem]" />
        <div className="LocationText bg-white py-[.06rem]">
          <p className="Text text-white bg-[#00A9C8] p-2 px-8 ">
            بغداد - ساحة التحرير
          </p>
        </div>
      </a>
      <div className="Copyright pt-10 pb-1 ">
        <p className=" text-xs text-white text-center ">
          Made by <SwationLogo /> Swaition
        </p>
      </div>
    </div>
  );
};

export default Location;
