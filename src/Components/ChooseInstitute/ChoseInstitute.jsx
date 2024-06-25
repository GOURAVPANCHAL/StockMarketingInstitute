import React from "react";
import "../ChooseInstitute/chose.css";
import tradingImage from "../../images/best-trading.avif";
import image from "../../images/trading.jpg";
import img from "../../images/img_1.png";
import learn1 from "../../images/learnCourse1.png";
import learn2 from "../../images/learnCourse2.png";
import learn3 from "../../images/learnCourse3.png";
import learn4 from "../../images/learnCourse4.png";
import learn5 from "../../images/learnCourse5.png";
import learn6 from "../../images/learnCourse6.png";

const ChoseInstitute = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center allheading mt-5 mb-4">
          Why Student Choose TSE Institute ?
        </h1>
        <div className="row">
          <div className="col-md-6">
            <img className="w-100" src={tradingImage} alt="" />
          </div>
          <div className="col-md-6">
            <div>
              <ul>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Top Tier
                  Tranners
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Industry-Ready Skills
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Performance
                  Analytics
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Best In
                  Doubt Handling
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Personalized Mentorship
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Comprehensive Curriculum
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Networking Opportunities
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Cutting-Edge Trading Tools
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Engaging Live Market Session
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Hands-On Experience With Industry Experts
                </li>
                <li className="about">
                  <i class="bi bi-check2-circle aboutIcon"></i>
                  &nbsp;Proprietary Trading Floor Placement Opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <marquee class="marq" direction="left" loop="">
          <div class="geek1">Trading Smart Edge - Best Stock Institute</div>
        </marquee>
      </div>

      
      
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img width="100%" src={img} alt="trading" />
            </div>
            <div className="col-md-6">
              <div className="stockmarket">
                <h1 className="allheading">Best Stock Marketing Institute</h1>
                <div className="mt-4">
                  <h5>
                    <b>Accreditation and Reputation:</b>
                  </h5>
                  <ul>
                    <li>
                      Ensure the mentor is accredited by recognized financial
                      education bodies.
                    </li>
                    <li>
                      Look for positive reviews and testimonials from former
                      students.
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>
                    <b>Comprehensive Curriculum:</b>
                  </h5>
                  <ul>
                    <li>
                      The program cover a broad range of topics, including
                      technical analysis, fundamental analysis, risk management,
                      and trading strategies.
                    </li>
                    <li>
                      Updated content to reflect the latest market trends and
                      tools.
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>
                    <b> Experienced Instructors:</b>
                  </h5>
                  <ul>
                    <li>
                      Mentors have substantial real-world trading experience and
                      a strong academic background.
                    </li>
                    <li>
                      Check for credentials and past performance in the stock
                      market.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoseInstitute;
