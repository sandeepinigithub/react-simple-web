import React from "react";
import "./Features.scss";

import mobileFlat from "../../assets/images/web-images/mobile-flat.png";

export default function Features() {
  let features = [
    {
      name: "Optimize Code",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-code fa-3x text-danger",
    },
    {
      name: "Mobile Friendly",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-mobile-alt fa-3x text-danger",
    },
    {
      name: "Support",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-question-circle fa-3x text-danger",
    },
  ];

  return (
    <div>
      <div id="features" className="feature__container">
        <div className="feature__container__wrapper">
          <h2 className="text-center mb-2 mt-5">
            Features that you can trust upon
          </h2>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
            eos? Lorem ipsum dolor sit.
          </p>
          <div className="row m-auto justify-content-around">
            {features.map((feature,index) => (
              <div key={index} className="col-12 col-sm-6 col-md-3 text-center">
                <i className={feature.iconClass}></i>
                <h4 className="py-3">{feature.name}</h4>
                <p>{feature.description} </p>
              </div>
            ))}

            <div className="w-100"></div>
            <div className="col-12 ">
              <div className="container">
                <img
                  className="img-fluid"
                  src={mobileFlat}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
