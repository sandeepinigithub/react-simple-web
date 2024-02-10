import React from "react";
import "./Services.scss";

export default function Services() {
  let services = [
    {
      name: "Quasi reiciendis",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass: "fas fa-phone-alt fa-3x text-danger p-4 text-center shadow",
    },
    {
      name: "Quasi reiciendis",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass: "fas fa-heart fa-3x text-danger p-4 text-center shadow",
    },
    {
      name: "Quasi reiciendis",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass: "fas fa-user-alt fa-3x text-danger p-4 text-center shadow",
    },
    {
      name: "Quasi reiciendis",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass: "fas fa-search fa-3x text-danger p-4 text-center shadow",
    },
    {
      name: "Quasi reiciendis",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass: "fas fa-thumbs-up fa-3x text-danger p-4 text-center shadow",
    },
    {
      name: "Quasi reiciendis",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass: "fas fa-eye-slash fa-3x text-danger p-4 text-center shadow",
    },
  ];
  return (
    <div>
      <div id="services" className="service__container">
        <div className="service__container__wrapper py-5">
          <div className="row justify-content-evenly m-auto px-3">
            <h2 className="text-center my-3">Our Services</h2>
            <p className="text-center text-black-50 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates itaque fugiat sapiente, optio debitis aut.
            </p>
            {services.map((service, index) => (
              <div key={index} className="card shadow col-10 col-sm-4 col-md-3 col-xl-3 m-2">
                <span className="text-center mt-5">
                  <i className={service.iconClass}> </i>
                </span>
                <h4 className="text-center my-5">{service.name}</h4>
                <p className="text-center mb-5">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
