import "./Footer.scss";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer__container">
        <div className="container footer__container__wrapper">
          <div className="row mt-3 pb-3">
            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Lorem Ipsum
              </h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                aliquid numquam minima consectetur fugiat earum ea. Odit, error
                voluptates. Praesentium, voluptatem. Accusamus aperiam commodi
                soluta eius hic fuga quasi exercitationem, in dolore dolorum eos
                incidunt modi unde cum deleniti laborum voluptates optio atque a
                repudiandae nisi. Illo modi maiores laborum.
              </p>
            </div>

            <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
              <p>
                <a href="#">Custom Applications</a>
              </p>
              <p>
                <a href="#">Digital Marketing Services</a>
              </p>
              <p>
                <a href="#">Mobile App Development</a>
              </p>
              <p>
                <a href="#">Software Development</a>
              </p>
              <p>
                <a href="#">Data Analytics Consulting</a>
              </p>
            </div>

            <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#">Overview</a>
              </p>
              <p>
                <a href="#">Empanelments</a>
              </p>
              <p>
                <a href="#">Management Team</a>
              </p>
              <p>
                <a href="#">Project Team</a>
              </p>
              <p>
                <a href="#">Capabilities</a>
              </p>
            </div>

            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i>Sector 62, Noida, Uttar
                Pradesh
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@lorem.in
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i>0120 478 4222
              </p>
              <p>
                <i className="fas fa-print mr-3"></i>0120 478 4222
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center">
                © 2024 Copyright:
                <a href="https://www.lorem.com/">
                  <strong> lorem.com</strong>
                </a>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              {/* Social buttons  */}
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="bi bi-google"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
