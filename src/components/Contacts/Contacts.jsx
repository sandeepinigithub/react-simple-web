import React from "react";
import "./Contacts.scss";

export default function Contacts() {
  return (
    <div>
      <div id="contacts" className="contact__container">
        <div className="contact__container__wrapper">
          <div className="container mt-5">
            <h2 className="text-center">Write Us A Line</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              enim distinctio ut eaque dolores iure?
            </p>
            <div className="alert alert-success custome-success">
              <i className="bi bi-check-circle-fill"></i> Feedback Sent!!
            </div>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                {/* <div id="error" className="form-text text-danger">
                  Name is required
                </div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  pattern="[^ @]*@[^ @]*"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                {/* <div id="error" className="form-text text-danger">
                  Email is required
                </div> */}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  required
                  name="message"
                  placeholder="message"
                >

                </textarea>
                {/* <div id="error" className="form-text text-danger">
                  Message is required
                </div> */}
              </div>

              <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
