import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css/navigation";

import banner1 from "../../assets/images/web-images/banner1.png";
import banner2 from "../../assets/images/web-images/banner2.png";
import banner3 from "../../assets/images/web-images/banner3.png";
import banner4 from "../../assets/images/web-images/banner4.png";
import banner5 from "../../assets/images/web-images/banner5.png";
import banner6 from "../../assets/images/web-images/banner6.png";

import logo1 from "../../assets/images/web-images/logo1.png";
import logo2 from "../../assets/images/web-images/logo2.png";
import logo3 from "../../assets/images/web-images/logo3.png";
import logo4 from "../../assets/images/web-images/logo4.svg";
// import logo5 from "../../assets/images/web-images/logo5.svg";
import logo6 from "../../assets/images/web-images/logo6.svg";


import React from "react";
import "./Swiper.style.scss";

export default function SwiperComponent() {
  let carouselData = [
    {
      imgSrc: banner1,
      logo: logo1,
      label1: {
        heading: "Social Impact",
        details: "Child Relief & You",
      },
      label2: {
        heading: "Project",
        details: "Fund Raising",
      },
      details: "Digital and Search marketing brand and crowd-funding campaigns",
    },
    {
      imgSrc: banner2,
      logo: logo2,
      label1: {
        heading: "Culture & Tourism",
        details: "UPDESCO",
      },
      label2: {
        heading: "Project",
        details: "U.P. Museums",
      },
      details:
        "Curated video tours for an immersive visitor experience at State Museums",
    },
    {
      imgSrc: banner3,
      logo: logo3,
      label1: {
        heading: "Public Sector",
        details: "Ministry of Skill Development and Entrepreneurship",
      },
      label2: {
        heading: "Project",
        details: "Sankalp",
      },
      details:
        "Skill acquisition and knowledge awareness for the promotion of community livelihood",
    },
    {
      imgSrc: banner4,
      logo: logo4,
      label1: {
        heading: "Digital Automation",
        details: "Firefly Associates FZE",
      },
      label2: {
        heading: "Project",
        details: "Fusion",
      },
      details:
        "Quality audit and safety reporting software suite, specific to international airlines",
    },
    {
      imgSrc: banner5,
      logo: logo3,
      label1: {
        heading: "Retail",
        details: "FabIndia",
      },
      label2: {
        heading: "Project",
        details: "FabConnect ERP",
      },
      details:
        "Enterprise-wide custom solution across all departments including Pos and Omnichannel",
    },
    {
      imgSrc: banner6,
      logo: logo6,
      label1: {
        heading: "Telecommunication",
        details: "Bharti Airtel Ltd",
      },
      label2: {
        heading: "Project",
        details: "Airtel VTAP",
      },
      details:
        "A custom SmartBytes platform for over 2.0 million broadband customers",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
    >
      {carouselData.map((carousel, index) => (
        <SwiperSlide key={index}>
          <div>
            <div  className="container">
              <div className="row mt-3">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <img
                    className="img-fluid"
                    width="100%"
                    src={carousel?.imgSrc}
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <span className="d-block mb-3">
                    <img
                      className="img-fluid carousel-logo"
                      src={ carousel.logo }
                      alt=""
                    />
                  </span>
                  <p className="label">
                    <a href="">
                      <span>{carousel.label1.heading} : </span>
                      <span> {carousel.label1.details}</span>
                    </a>
                    <a href="">
                      <span>{carousel.label2.heading} : </span>
                      <span> {carousel.label2.details}</span>
                    </a>
                  </p>
                  <p className="details">
                    <a href="">{carousel.details}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
}
