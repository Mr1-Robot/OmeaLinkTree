import { MdLocationOn } from "react-icons/md";
import "./Location.css";
const Location = () => {
  return (
    <div className="Location mt-8 mb-8 flex flex-col items-center justify-center gap-[.3rem]">
      <MdLocationOn className="LocationIcon text-[#FFFFFF] text-[3rem]" />
      <div className="LocationText bg-white py-[.06rem]">
        <p className="Text text-white bg-[#00A9C8] p-2 px-8 ">
          بغداد - ساحة التحرير
        </p>
      </div>
    </div>
  );
};

export default Location;
