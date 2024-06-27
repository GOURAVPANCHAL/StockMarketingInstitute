import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../images/logo_transparent.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showclass,setShowClass] = useState(false);

  const handleToggleClass = ()=>{
    setShowClass(!showclass)
  }

  const [linkClick,setLinkClick] = useState(false)

  const handleLinkClick = () =>{
    setLinkClick(!linkClick);
  }
  return (
    <>
      <div
        className="row p-1 device"
        style={{
          background: "rgb(33 40 70)",
          color: "white",
          width: "100%",
          margin: "auto",
        }}
      >
        <div className="col-md-9">
          <div className="d-flex justify-space-evenly" style={{ justifyContent: "space-evenly" }}>
            <div className="d-flex" style={{ alignItems: "center" }}>
            <i class="bi bi-envelope"></i>
              &nbsp;
              <Link to="mailto:tradingsmartedge@gmail.com">
                tradingsmartedge@gmail.com
              </Link>
            </div>
            <div className="d-flex" style={{ alignItems: "center" }}>
            <i class="bi bi-telephone-inbound"></i>
              &nbsp; +91 9871169588 &nbsp; +91 9599245542
            </div>
            <div className="d-flex" style={{ alignItems: "center" }}>
            <i class="bi bi-geo-alt"></i>
              &nbsp; JD Block 21-C Pitampura Ashiana Chowk, Delhi-34
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="d-flex"
            style={{ justifyContent: "space-evenly", maxWidth: "60%" }}
          >
            <div>
            <i class="bi bi-instagram"></i>
            </div>
            <div>
            <i class="bi bi-youtube"></i>
            </div>
            <div>
            <i class="bi bi-linkedin"></i>
            </div>
            <div>
            <i class="bi bi-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg relative">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={logo} width="100%" alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              class="bi bi-list"
              style={{ color: "white", border: "none" }}
            ></i>
          </button>
          <div class={`collapse navbar-collapse  ${linkClick ? "show" : ""}`} id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li class="nav-item">
                <Link class="nav-link navbarLinks" aria-current="page" to="/">
                <b>
                  Home
                </b>
                </Link>
              </li>
              <li class="dropdownn">
                <Link class="dropbtn navbarLinks">The Institute <i class="bi bi-caret-down"></i></Link>
                <div class="dropdown-content">
                  <Link onClick={handleLinkClick} to="about-institute"><i class="bi bi-chevron-double-right"></i> About The Institute</Link>
                  <Link to="/chairmen-message"><i class="bi bi-chevron-double-right"></i> Chairman message</Link>
                  <Link to="/about-hemant-sharma"><i class="bi bi-chevron-double-right"></i> About Hemant Sharma</Link>
                  <Link to="/placement-story"><i class="bi bi-chevron-double-right"></i> Placement Story</Link>
                  <Link to="/training-seminar"><i class="bi bi-chevron-double-right"></i> Institutional Trading seminar</Link>
                  <Link to="/corporate"><i class="bi bi-chevron-double-right"></i> Corporate Training</Link>
                </div>
              </li>
              <li class="dropdownn">
                <Link class="dropbtn navbarLinks">Classroom Bootcamp<i class="bi bi-caret-down"></i></Link>
                <div class="dropdown-content-clasrom">
                  <div className="container">
                <div className="row p-3">
              <div className="col-md-4 sm-12">
                <p className="headingDropdown">
                  Working Professional Trader & Investor Courses
                </p>
                <div>
                  <ul>
                    <li className="dropdownulli">
                      <Link to="/Professional-Trader-Course"><i class="bi bi-chevron-double-right"></i> Professional Trader Course</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/Professional-Investor-Course"><i class="bi bi-chevron-double-right"></i> Professional Investor Course</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/Advance-Technical-Course"><i class="bi bi-chevron-double-right"></i> Advance Technical Course</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/Option-Trading-Course"><i class="bi bi-chevron-double-right"></i> Option Trading Course</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/Fundamental-Analysis"><i class="bi bi-chevron-double-right"></i> Fundamental Analysis</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/Intraday-Trading-Setup"><i class="bi bi-chevron-double-right"></i> Intraday Trading Setup</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 sm-12">
                <p className="headingDropdown">Job Oriented Diploma Courses</p>
                <div>
                  <ul>
                    <li className="dropdownulli">
                      <Link to="/Equity-Market-Trader"><i class="bi bi-chevron-double-right"></i> Equity Market Trader</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/Diploma-Financial"><i class="bi bi-chevron-double-right"></i> Diploma in Financial Management</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/Advance-Diploma-Financial"><i class="bi bi-chevron-double-right"></i> Advance Diploma in Financial Management</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 sm-12">
                <p className="headingDropdown">Certification Courses NISM/NCFM</p>
                <div>
                  <ul>
                    <li className="dropdownulli">
                      <Link to="/NCFM-Capital-Market-Module"><i class="bi bi-chevron-double-right"></i> NCFM Capital Market Module</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/NISM-Series-VIII-Derivatives"><i class="bi bi-chevron-double-right"></i> NISM Series VIII Derivatives Market Module</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/NISM-Series-I-Currency-Market"><i class="bi bi-chevron-double-right"></i> NISM Series I Currency Market</Link>
                    </li>
                    <li className="dropdownulli">
                      <Link to="/NISM-Series-XXV-Research-Analyst"><i class="bi bi-chevron-double-right"></i> NISM Series XXV Research Analyst</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                  </div>
                </div>
              </li>
              <li class="dropdownn">
              <Link class="dropbtn navbarLinks">Resources<i class="bi bi-caret-down"></i></Link>
                <div class="dropdown-content">
                  <Link to="about-institute"><i class="bi bi-chevron-double-right"></i> Gallery</Link>
                  <Link to="/admission-procedure"><i class="bi bi-chevron-double-right"></i> Admission Procedure</Link>
                  <Link to="/testimonial"><i class="bi bi-chevron-double-right"></i> Testimonial</Link>
                  <Link to="/life-at-tse"><i class="bi bi-chevron-double-right"></i> Life at TSE</Link>
                  <Link to="/career_opportunities"><i class="bi bi-chevron-double-right"></i> Career Opportunities</Link>
                  <Link to="/placement-partner"><i class="bi bi-chevron-double-right"></i> Placement Partners</Link>
                  <Link to="/book-recommended"><i class="bi bi-chevron-double-right"></i> Books Recommended</Link>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link navbarLinks" to="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link navbarLinks" to="/franchise">
                  Franchise
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link navbarLinks" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
