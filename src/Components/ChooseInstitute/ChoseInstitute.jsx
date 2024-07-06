import React from "react";
import "../ChooseInstitute/chose.css";
import tradingImage from "../../images/best-trading.avif";
import image from "../../images/trading.jpg";
import img from "../../images/ai14.jpg";
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
        <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Top Tier Trainers
        <ul>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Industry experts with years of experience.</li>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Award-winning educators.</li>
        </ul>
    </li>
    <li className="about">
        <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Industry-Ready Skills
        <ul>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Practical trading techniques.</li>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Advanced market analysis.</li>
        </ul>
    </li>
    <li className="about">
        <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Performance Analytics
        <ul>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Real-time performance tracking.</li>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Detailed feedback reports.</li>
        </ul>
    </li>
    <li className="about">
        <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Best In Doubt Handling
        <ul>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> 24/7 support for queries.</li>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Dedicated doubt-clearing sessions.</li>
        </ul>
    </li>
    <li className="about">
        <i class="bi bi-check2-circle aboutIcon"></i>&nbsp;Personalized Mentorship
        <ul>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> One-on-one mentoring sessions.</li>
            <li className="trainers"><i class="bi bi-arrow-right-circle"></i> Customized learning paths.</li>
        </ul>
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
            <div className="col-md-6 stokmarketing">
              <div className="stockmarket">
                <h1 className="allheading">Best Stock Market Institute</h1>
                <div className="mt-4">
                  <p className="heading">
                    <b>Accreditation and Reputation:</b>
                  </p>
                  <ul>
                    <li>
                      <b> Recognized Accreditation:</b> Accredited by prominent
                      financial education bodies, ensuring the highest standards
                      of education.
                    </li>
                    <li>
                      <b> Positive Reviews:</b> Consistently receives
                      outstanding reviews and testimonials from former students.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="heading">
                    <b>Comprehensive Curriculum:</b>
                  </p>
                  <ul>
                    <li>
                   <b> Wide Range of Topics:</b> Covers a broad spectrum of topics including technical analysis, fundamental analysis.
                    </li>
                    <li>
                   <b> Updated Content:</b> Curriculum is continuously updated to reflect the latest market trends and tools.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="heading">
                    <b> Experienced Instructors:</b>
                  </p>
                  <ul>
                    <li>
                   <b> Real-World Experience:</b> Instructors have substantial real-world trading experience.
                    </li>
                    <li>
                   <b> Strong Academic Background:</b> Mentors have a strong academic background in finance and economics.
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
