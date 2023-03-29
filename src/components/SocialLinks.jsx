import { BsFacebook } from "react-icons/bs";
import Instagram from "../Assets/Images/instagram.svg";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

import "./SocialLinks.css";

const SocialLinks = () => {
  const leftSocial = [
    {
      id: 0,
      title: "Facebook",
      url: "https://www.facebook.com/Omea.media/?paipv=0&eav=AfZqcAHr3E3qxWTcbHDQ2O1QAZ-mT0j-rqRZ7nMuCxfF9NXuvR1bro4pCx2NjClwdbE&_rdr",
      icon: <BsFacebook className="text-3xl text-[#0d8af0]" />,
    },

    {
      id: 1,
      title: "Linked In",
      url: "https://iq.linkedin.com/company/omea-media",
      icon: <RiLinkedinBoxFill className="text-3xl text-[#0a66c2]" />,
    },
  ];

  const rightSocial = [
    {
      id: 2,
      title: "Website",
      url: "https://www.omea.media/",
      icon: <AiOutlineGlobal className="text-3xl" />,
    },

    {
      id: 3,
      title: "Behance",
      url: "https://www.behance.net/omeamedia",
      icon: <AiFillBehanceCircle className="text-3xl text-black" />,
    },

    {
      id: 4,
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCA1RSa6Y5jm4BLPWOzsnwXA?app=desktop",
      icon: <AiFillYoutube className="text-3xl mb-0 text-[#ff0000]" />,
    },
  ];

  return (
    <div className="SocialLinks bg-white w-[40rem] mx-4 mt-10  py-8 rounded-3xl flex flex-col items-center justify-between">
      <div className="Left mt-4">
        <a
          href="https://www.instagram.com/omea.media/?igshid=YmMyMTA2M2Y%3D"
          className="w-[17rem] block"
          rel="noreferrer"
          target="_blank"
        >
          <div className="insta text-[#336066] bg-[#E8F5F7] flex items-center justify-between p-2 px-[.8rem] pr-[.3rem] mb-4 rounded-3xl bg-[#E8F5F7]">
            <h1>Instagram</h1>
            <img src={Instagram} alt="instagram logo" className="w-[51px]" />
          </div>
        </a>
        {leftSocial.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="w-[17rem] block"
            rel="noreferrer"
            target="_blank"
          >
            <div className="SocialContainer text-[#336066] bg-[#E8F5F7] flex items-center justify-between p-2 mb-4 rounded-3xl bg-[#E8F5F7] px-[1.1rem]">
              {item.icon}
              <h1>{item.title}</h1>
            </div>
          </a>
        ))}
      </div>

      <div className="right">
        {rightSocial.map((item) => (
          <a
            className="w-[17rem] block"
            key={item.id}
            href={item.url}
            rel="noreferrer"
            target="_blank"
          >
            <div className="SocialContainer text-[#336066] bg-[#E8F5F7] flex items-center justify-between p-2 px-[.8rem] mb-4 rounded-3xl bg-[#E8F5F7] px-[1.1rem]">
              {item.icon}
              <h1>{item.title}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
