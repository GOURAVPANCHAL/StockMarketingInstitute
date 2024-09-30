import React, { useEffect } from "react";
import "../Navbar/Navbar.css";
import support from "../Navbar/assets/helpdesk.gif";
import building from "../Navbar/assets/building.gif";
import stock from "../Navbar/assets/analytics.gif";
import bulb from "../Navbar/assets/lightbulb.gif";
import verify from "../Navbar/assets/verified.gif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Contact Us - Trading Smart Edge</title>
        <meta
          name="description"
          content="Get in touch with Trading Smart Edge for expert trading advice, courses, and personalized support. Contact us for consultations and inquiries."
        />
        <meta
          name="keywords"
          content="Contact Trading Smart Edge, trading support, stock market consultation, trading courses, expert trading advice"
        />
      </Helmet>
      <div>
        <div className="container">
          <div className="row">
            <p className="contactHeading text-center mt-5">Contact-us</p>
            <div className="col-md-6">
              <div className="formdiv">
                <form action="https://api.web3forms.com/submit" method="POST">
                  {/* <!-- Replace with your Access Key --> */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="757a79bf-f594-4093-a93d-c6f07db7ac6c"
                  />

                  <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                      className="form-control inputField"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control inputField"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="number">Phone Number</label>
                    <input
                      className="form-control inputField"
                      type="tel" // Changed to "tel" for better UX on mobile devices
                      name="number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      className="form-control inputField"
                      type="text"
                      name="city"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="help">How Can I Help You?</label>
                    <textarea
                      cols={20}
                      rows={5}
                      className="form-control inputField"
                      name="message" // Updated to "message" for Web3Forms
                      required
                    ></textarea>
                  </div>

                  {/* <!-- Honeypot Spam Protection --> */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  {/* <!-- Custom Confirmation / Success Page --> */}
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://tradingsmartedge.com/contact"
                  />

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" className="contactbutton">
                      Reserve Your Free Consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <div>
                  <p className="contactHeading">Visit us anytime</p>
                  <p className="contactDesc">
                    Learn basic and advanced level trading from Expert,
                    Professional Traders. 24x7 Online Access. Get Enhanced
                    Career Scope with our Online Trading Courses.
                  </p>
                </div>
                <hr />

                <div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="maindiv">
                        <div>
                          <p className="contact">Email Us:</p>
                          <Link className="contactus" to="">
                            tradingsmartedge@gmail.com
                          </Link>
                        </div>
                      </div>
                      <div className="maindiv mt-4">
                        <div>
                          <p className="contact">Call Us:</p>
                          <div className="d-flex gap-3">
                            <Link className="contactus" to="tel:9599245542">
                              +91 9599245542
                            </Link>

                            <Link className="contactus" to="tel:9871169588">
                              +91 9871169588
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div class="social-media">
                        <p className="contact">Connect with us :</p>
                        <div class="social-icons">
                          <Link
                            target="blank"
                            to="https://www.instagram.com/reel/C89AEbFycQm/?igsh=MWRycWtpdzZqYmpvcg%3D%3D"
                          >
                            <i class="bi bi-instagram"></i>
                          </Link>
                          <Link
                            target="blank"
                            to="https://www.youtube.com/@tradingsmartedgeacademy"
                          >
                            <i class="bi bi-youtube"></i>
                          </Link>
                          <Link
                            target="blank"
                            to="https://api.whatsapp.com/send?phone=+919079036042"
                          >
                            <i class="bi bi-whatsapp"></i>
                          </Link>
                          <Link
                            target="blank"
                            to="https://www.linkedin.com/company/trading-smart-edge/about/'"
                          >
                            <i class="bi bi-linkedin"></i>
                          </Link>
                          <Link
                            target="blank"
                            to={
                              "https://www.quora.com/profile/Trading-Smart-Edge"
                            }
                          >
                            <i class="bi bi">Q</i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <p className="contactHeading">TSE advantage</p>
                <p className="para">
                  The <b>TSE</b> Institute excels with accredited programs,
                  positive reviews, and high success rates. Its comprehensive,
                  updated curriculum covers key trading topics.
                </p>
              </div>
              <div className="col-md-4">
                <div
                  className="animatedicon"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img
                    width={"15%"}
                    src={verify}
                    alt="trading smart edge images"
                  />
                  <div>
                    <p className="para">
                      <b>Experienced Faculty</b>
                    </p>
                    <p className="para">Industry practical knowledge.</p>
                  </div>
                </div>
                <div
                  className="animatedicon"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img
                    width={"15%"}
                    src={bulb}
                    alt="trading smart edge images"
                  />
                  <div>
                    <p className="para">
                      <b>Practical Approach</b>
                    </p>
                    <p className="para">world strategies application.</p>
                  </div>
                </div>
                <div
                  className="animatedicon"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img
                    width={"15%"}
                    src={support}
                    alt="trading smart edge images"
                  />
                  <div>
                    <p className="para">
                      <b>Best Support</b>
                    </p>
                    <p className="para">Expert personalized support.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="animatedicon"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img
                    width={"15%"}
                    src={stock}
                    alt="trading smart edge images"
                  />
                  <div>
                    <p className="para">
                      <b>International Stock Marketing</b>
                    </p>
                    <p className="para">Global stock market expertise.</p>
                  </div>
                </div>
                <div
                  className="animatedicon"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <img
                    width={"15%"}
                    src={building}
                    alt="trading smart edge images"
                  />
                  <div>
                    <p className="para">
                      <b>Global Stock Marketing</b>
                    </p>
                    <p className="para">Worldwide trading platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6252147264036!2d77.1361271!3d28.7008558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xecd43fb555c6f73%3A0x743b9a27ce33fa24!2sTrading%20Smart%20Edge%20%3A%20Best%20Stock%20Market%20Institute!5e0!3m2!1sen!2sin!4v1717849744593!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
