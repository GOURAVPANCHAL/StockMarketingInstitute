import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../images/logotop.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div
        className="row p-1 device"
        style={{
          background: "rgb(33 40 70)",
          color: "white",
          width: "100%",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <div className="col-md-10">
          <div
            className="d-flex justify-space-evenly"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="d-flex" style={{ alignItems: "center" }}>
              <i className="bi bi-envelope"></i>
              &nbsp;
              <Link to="mailto:tradingsmartedge@gmail.com">
                tradingsmartedge@gmail.com
              </Link>
            </div>
            <div className="d-flex" style={{ alignItems: "center" }}>
              <i className="bi bi-telephone-inbound"></i>
              &nbsp;<Link to="tel:9871169588">
                {" "}
                +91 9871169588{" "}
              </Link> &nbsp; <Link to="tel:9599245542"> +91 9599245542</Link>
            </div>
            <div className="d-flex" style={{ alignItems: "center" }}>
              <i className="bi bi-geo-alt"></i>
              &nbsp; JD Block 21-C Pitampura Ashiana Chowk, Delhi-34
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="d-flex gap-3">
            <div
              className="topicons instagram"
              style={{
                cursor: "pointer",
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);",
                padding: "2px 5px",
              }}
            >
              
              <Link
              target="blank"
                to={
                  "https://www.instagram.com/reel/C89AEbFycQm/?igsh=MWRycWtpdzZqYmpvcg%3D%3D"
                }
              >
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
            <div className="topicons youtubee">
              <Link
                target="blank"
                to={"https://www.youtube.com/@tradingsmartedgeacademy"}
              >
                <i className="bi bi-youtube"></i>
              </Link>
            </div>
            <div className="topicons linkedinn">
              <Link
                target="blank"
                to={
                  "https://www.linkedin.com/company/trading-smart-edge/about/"
                }
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
            <div className="topicons whatsapp">
              <a
                target="blank"
                href={"https://api.whatsapp.com/send?phone=+919079036042"}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
            <div className="topicons quora">
              <Link
                target="blank"
                to={"https://www.quora.com/profile/Trading-Smart-Edge"}
              >
                <i class="bi bi">Q</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg relative">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="100%" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleNav} // Toggle the navigation on click
            aria-label="Toggle navigation"
          >
            <i
              className="bi bi-list"
              style={{ color: "black", border: "none" }}
            ></i>
          </button>
          <div
            className={`collapse navbar-collapse ${showNav ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <Link
                  className="nav-link navbarLinks"
                  aria-current="page"
                  to="/"
                >
                  <b>Home</b>
                </Link>
              </li>
              <li className="dropdownn">
                <div className="dropbtn navbarLinks">
                  The Institute <i className="bi bi-caret-down"></i>
                </div>
                <div className="dropdown-content">
                  <Link onClick={() => setShowNav(false)} to="/about-institute">
                    <i className="bi bi-chevron-double-right"></i> About The
                    Institute
                  </Link>
                  <Link
                    onClick={() => setShowNav(false)}
                    to="/chairmen-message"
                  >
                    <i className="bi bi-chevron-double-right"></i> Chairman
                    message
                  </Link>
                  <Link
                    onClick={() => setShowNav(false)}
                    to="/about-hemant-sharma"
                  >
                    <i className="bi bi-chevron-double-right"></i> About Hemant
                    Sharma
                  </Link>
                  <Link onClick={() => setShowNav(false)} to="/placement-story">
                    <i className="bi bi-chevron-double-right"></i> Placement
                    Story
                  </Link>
                  <Link
                    onClick={() => setShowNav(false)}
                    to="/training-seminar"
                  >
                    <i className="bi bi-chevron-double-right"></i> Institutional
                    Trading seminar
                  </Link>
                  <Link onClick={() => setShowNav(false)} to="/corporate">
                    <i className="bi bi-chevron-double-right"></i> Corporate
                    Training
                  </Link>
                </div>
              </li>
              <li className="dropdownn">
                <div className="dropbtn navbarLinks">
                  Classroom Bootcamp<i className="bi bi-caret-down"></i>
                </div>
                <div className="dropdown-content-clasrom">
                  <div className="container">
                    <div className="row p-3">
                      <div className="col-md-4 sm-12">
                        <p className="headingDropdown">
                          Working Professional Trader & Investor Courses
                        </p>
                        <div>
                          <ul>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Professional-Trader-Course"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Professional Trader Course
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Professional-Investor-Course"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Professional Investor Course
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Advance-Technical-Course"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Advance Technical Course
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Option-Trading-Course"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Option Trading Course
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Fundamental-Analysis"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Fundamental Analysis
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Intraday-Trading-Setup"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Intraday Trading Setup
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 sm-12">
                        <p className="headingDropdown">
                          Job Oriented Diploma Courses
                        </p>
                        <div>
                          <ul>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Equity-Market-Trader"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Equity Market Trader
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Diploma-Financial"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Diploma in Financial Management
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/Advance-Diploma-Financial"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                Advance Diploma in Financial Management
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 sm-12">
                        <p className="headingDropdown">
                          Certification Courses NISM/NCFM
                        </p>
                        <div>
                          <ul>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/NCFM-Capital-Market-Module"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                NCFM Capital Market Module
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/NISM-Series-VIII-Derivatives"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                NISM Series VIII Derivatives Market Module
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/NISM-Series-I-Currency-Market"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                NISM Series I Currency Market
                              </Link>
                            </li>
                            <li className="dropdownulli">
                              <Link
                                onClick={() => setShowNav(false)}
                                to="/NISM-Series-XXV-Research-Analyst"
                              >
                                <i className="bi bi-chevron-double-right"></i>{" "}
                                NISM Series XXV Research Analyst
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdownn">
                <div className="dropbtn navbarLinks">
                  Resources<i className="bi bi-caret-down"></i>
                </div>
                <div className="dropdown-content">
                  <Link onClick={() => setShowNav(false)} to="/gallery">
                    <i className="bi bi-chevron-double-right"></i> Gallery
                  </Link>
                  <Link
                    onClick={() => setShowNav(false)}
                    to="/admission-procedure"
                  >
                    <i className="bi bi-chevron-double-right"></i> Admission
                    Procedure
                  </Link>
                  <Link onClick={() => setShowNav(false)} to="/testimonial">
                    <i className="bi bi-chevron-double-right"></i> Testimonial
                  </Link>
                  <Link onClick={() => setShowNav(false)} to="/life-at-tse">
                    <i className="bi bi-chevron-double-right"></i> Life at TSE
                  </Link>
                  <Link
                    onClick={() => setShowNav(false)}
                    to="/career_opportunities"
                  >
                    <i className="bi bi-chevron-double-right"></i> Career
                    Opportunities
                  </Link>
                  <Link
                    onClick={() => setShowNav(false)}
                    to="/placement-partner"
                  >
                    <i className="bi bi-chevron-double-right"></i> Placement
                    Partners
                  </Link>
                  <Link
                    onClick={() => setShowNav(false)}
                    to="/book-recommended"
                  >
                    <i className="bi bi-chevron-double-right"></i> Books
                    Recommended
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setShowNav(false)}
                  className="nav-link navbarLinks"
                  to="/blog"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setShowNav(false)}
                  className="nav-link navbarLinks"
                  to="/franchise"
                >
                  Franchise
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setShowNav(false)}
                  className="nav-link navbarLinks"
                  to="/contact"
                >
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
