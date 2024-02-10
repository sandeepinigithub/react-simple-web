import './Header.scss'
import React from "react";
import loremLogo from '../../assets/images/logo/lorem-logo.jpg'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" >
            <div className="card p-1">
              <img
                src={loremLogo}
                alt=""
                width="50px"
                height="50px"
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contacts
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link">
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  User
                </a>
              </li> */}
            </ul>
            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-warning"
              >
                Sign-up
              </button>
              {/* <button type="button" className="btn btn-danger">
                Logout
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
