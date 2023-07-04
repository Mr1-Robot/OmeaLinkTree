import { BsFacebook } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

import "./SocialLinks.css";

const SocialLinks = () => {
  const leftSocial = [
    {
      id: 0,
      title: "Facebook",
      url: "https://www.facebook.com/Omea.media/?paipv=0&eav=AfZqcAHr3E3qxWTcbHDQ2O1QAZ-mT0j-rqRZ7nMuCxfF9NXuvR1bro4pCx2NjClwdbE&_rdr",
      icon: (
        <BsFacebook className="SocialIcon text-2xl md:text-3xl text-[#0d8af0]" />
      ),
    },

    {
      id: 1,
      title: "Linked In",
      url: "https://iq.linkedin.com/company/omea-media",
      icon: (
        <svg
          width={"1.5rem"}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 112.196 112.196"
          style={{ enableBackground: "new 0 0 112.196 112.196" }}
          xmlSpace="preserve"
          className="SocialIcon w-[1.5rem] md:w-[1.875rem]"
        >
          <g>
            <circle
              style={{ fill: "#007AB9" }}
              cx="56.098"
              cy="56.097"
              r="56.098"
            />
            <g>
              <path
                style={{ fill: "#F1F2F2" }}
                d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
			c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
			c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
			C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
			c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
			 M27.865,83.739H41.27V43.409H27.865V83.739z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Telegram",
      url: "https://t.me/omeamedia",
      icon: (
        <FaTelegram className="SocialIcon text-2xl md:text-3xl text-[#26a5e4]" />
      ),
    },

    {
      id: 7,
      title: "Instagram",
      url: "https://www.instagram.com/omea.media/",
      icon: (
        <svg
          viewBox="0 0 152 152"
          width={"1.5rem"}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="SocialIconInsta w-[1.5rem] md:w-[1.875rem]"
        >
          <linearGradient
            id="linear-gradient"
            gradientUnits="userSpaceOnUse"
            x1="22.26"
            x2="129.74"
            y1="22.26"
            y2="129.74"
          >
            <stop offset={0} stopColor="#fae100" />
            <stop offset=".15" stopColor="#fcb720" />
            <stop offset=".3" stopColor="#ff7950" />
            <stop offset=".5" stopColor="#ff1c74" />
            <stop offset={1} stopColor="#6c1cd1" />
          </linearGradient>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Circle">
              <g id="_03.Instagram" data-name="03.Instagram">
                <rect
                  id="Background"
                  fill="url(#linear-gradient)"
                  height={152}
                  rx={76}
                  width={152}
                />
                <g fill="#fff">
                  <path
                    id="Shade"
                    d="m133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9s-40.56 35.22-60.87 46.3q-1.91-1.66-3.71-3.46a76 76 0 1 1 107.45-107.48q1.8 1.8 3.46 3.74z"
                    opacity=".1"
                  />
                  <g id="Icon">
                    <path d="m94 36h-36a22 22 0 0 0 -22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22v-36a22 22 0 0 0 -22-22zm15 54.84a18.16 18.16 0 0 1 -18.16 18.16h-29.68a18.16 18.16 0 0 1 -18.16-18.16v-29.68a18.16 18.16 0 0 1 18.16-18.16h29.68a18.16 18.16 0 0 1 18.16 18.16z" />
                    <path d="m90.59 61.56-.19-.19-.16-.16a20.16 20.16 0 0 0 -14.24-5.88 20.52 20.52 0 0 0 -20.38 20.67 20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zm-14.59 28a13.56 13.56 0 1 1 13.37-13.56 13.46 13.46 0 0 1 -13.37 13.56z" />
                    <path d="m102.43 54.38a4.88 4.88 0 0 1 -4.85 4.92 4.81 4.81 0 0 1 -3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  const rightSocial = [
    {
      id: 2,
      title: "Website",
      url: "https://www.omea.media/",
      icon: <AiOutlineGlobal className="SocialIcon text-2xl md:text-3xl" />,
    },

    {
      id: 3,
      title: "Behance",
      url: "https://www.behance.net/omeamedia",
      icon: (
        <AiFillBehanceCircle className="SocialIcon text-2xl md:text-3xl text-black" />
      ),
    },

    {
      id: 4,
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCA1RSa6Y5jm4BLPWOzsnwXA?app=desktop",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 152 152"
          width={"1.5rem"}
          className="SocialIcon w-[1.5rem] md:w-[1.875rem]"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Color">
              <g id="_02.YouTube" data-name="02.YouTube">
                <circle id="Background" cx="76" cy="76" fill="#f00" r="76" />
                <path
                  id="Icon"
                  d="m100.87 47.41h-49.74a15.13 15.13 0 0 0 -15.13 15.14v26.9a15.13 15.13 0 0 0 15.13 15.14h49.74a15.13 15.13 0 0 0 15.13-15.14v-26.9a15.13 15.13 0 0 0 -15.13-15.14zm-35.41 40.85v-24.52l21.08 12.26z"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
    },

    {
      id: 5,
      title: "Whatsapp",
      url: "https://api.whatsapp.com/send?phone=9647730600900",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="1.4rem"
          className="SocialIconWa w-[1.5rem] md:w-[1.875rem]"
        >
          <g id="Icons" fill="none" fillRule="evenodd">
            <g
              id="Social-Media-Collection"
              fill="#67d449"
              transform="translate(-122 -396)"
            >
              <g id="Whatsapp" transform="translate(122 396)">
                <path
                  id="Fill-232"
                  d="m39.8258 37.522c-.33.926-1.914 1.77-2.676 1.884-.682.102-1.546.144-2.496-.156-.576-.184-1.314-.428-2.258-.836-3.976-1.716-6.574-5.718-6.772-5.982s-1.618-2.148-1.618-4.098 1.024-2.91 1.388-3.306c.362-.396.792-.496 1.056-.496s.528.002.76.014c.244.012.57-.092.892.68.33.794 1.122 2.744 1.222 2.942.098.198.164.43.032.694s-.198.43-.396.662c-.198.23-.416.516-.594.694-.198.196-.406.412-.174.808s1.026 1.694 2.204 2.744c1.514 1.35 2.792 1.768 3.188 1.968.396.198.628.164.858-.1.232-.264.992-1.156 1.256-1.554.264-.396.528-.33.892-.198.362.132 2.312 1.09 2.708 1.29.396.198.66.296.76.462.098.166.098.958-.232 1.884m-7.754-18.844c-7.272 0-13.188 5.912-13.19 13.178 0 2.49.696 4.916 2.016 7.014l.314.498-1.332 4.864 4.99-1.308.48.284c2.024 1.202 4.344 1.838 6.71 1.838h.006c7.266 0 13.18-5.912 13.184-13.18 0-3.522-1.368-6.832-3.858-9.324-2.49-2.49-5.8-3.864-9.32-3.864"
                />
                <g id="Fill-324">
                  <path
                    id="Fill-233"
                    d="m32.066 47.724h-.006c-2.656 0-5.264-.666-7.58-1.93l-8.41 2.206 2.252-8.218c-1.388-2.404-2.12-5.132-2.118-7.928.004-8.742 7.118-15.854 15.862-15.854 4.242 0 8.226 1.652 11.22 4.65 2.994 2.996 4.644 6.98 4.642 11.218-.004 8.742-7.12 15.856-15.862 15.856m-.066-47.724c-17.674 0-32 14.326-32 32 0 17.672 14.326 32 32 32 17.672 0 32-14.328 32-32 0-17.674-14.328-32-32-32"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="SocialLinks bg-[#ffffffcc] w-[40rem] mx-4  pb-[0.4rem] rounded-3xl flex flex-col items-center justify-between">
      <div className="Left mt-[1.1rem]">
        {leftSocial.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="w-[19rem] block mb-2"
            rel="noreferrer"
            target="_blank"
          >
            <div className="SocialContainer text-[#336066] flex items-center justify-between p-[.5rem] rounded-3xl bg-[#E8F5F7] px-[2rem]">
              {item.icon}
              <h1>{item.title}</h1>
            </div>
          </a>
        ))}
      </div>

      <div className="right">
        {rightSocial.map((item) => (
          <a
            className="w-[19rem] block mb-2"
            key={item.id}
            href={item.url}
            rel="noreferrer"
            target="_blank"
          >
            <div className="SocialContainer text-[#336066] flex items-center justify-between p-[.5rem] rounded-3xl bg-[#E8F5F7] px-[2rem]">
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
