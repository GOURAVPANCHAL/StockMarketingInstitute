import React from "react";
import professionalImage from "../../Navbar/assets/professional.jpg";
import trading1 from "../../../images/trading1.avif";
const OptionTradingCourse = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <p className="allheading">Option Trading Course</p>
        <div className="row">
          {/* <div className="col-md-5">
          <img
            style={{ borderRadius: "30px 0px 0px 30px" }}
            width={"100%"}
            height={"100%"}
            src={professionalImage}
            alt=""
          />
        </div> */}
          {/* <div className="col-md-7">
          <p>
            This advanced technical analysis course is designed for individuals
            with prior knowledge of the stock market who seek a deeper
            understanding of technical charts. The course offers an in-depth
            exploration of advanced chart patterns, technical indicators, and
            sophisticated trading strategies. Participants will gain expertise
            in analyzing complex chart formations, interpreting candlestick
            patterns, and utilizing advanced volume and trend analysis
            techniques. Additionally, the course covers Fibonacci analysis,
            Elliott Wave theory, and the fundamentals of algorithmic and
            quantitative trading, all while emphasizing robust risk management
            practices. Perfect for experienced traders looking to enhance their
            technical analysis skills and elevate their trading strategies
          </p>
        </div> */}
          <div className="row mt-5">
            <div className="col-md-7">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <p
                      class="accordion-button collapsed accordionheading"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Module 1: Option Trading Strategy
                    </p>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    {/* <p className='heading'>Detailed Curriculam</p> */}
                    <div class="accordion-body">
                      <p className="heading">INTRODUCTION TO OPTIONS</p>
                      <ol>
                        <li>Option Terminology</li>
                        <li>Options Payoffs</li>
                        <li>Payoff profile of buyer of asset: Long asset</li>
                        <li>Payoff profile for seller of asset: Short asset</li>
                        <li>
                          Payoff profile for buyer of call options: Long call
                        </li>
                        <li>
                          Payoff profile for writer (seller) of call options:
                          Short call
                        </li>
                        <li>
                          Payoff profile for buyer of put options: Long put
                        </li>
                        <li>
                          Payoff profile for writer (seller) of put options:
                          Short put
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <p
                      class="accordion-button collapsed accordionheading"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Strategies
                    </p>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ol>
                        <li>Long Call</li>
                        <li>Short Call</li>
                        <li>Synthetic Long Call</li>
                        <li>Long Put</li>
                        <li>Short Put</li>
                        <li>Covered Call</li>
                        <li>Long Combo</li>
                        <li>Protective Call</li>
                        <li>Covered Put</li>
                        <li>Long Straddle</li>
                        <li>Short Straddle</li>
                        <li>Long Strangle</li>
                        <li>Short Strangle</li>
                        <li>Collar</li>
                        <li>Bull Call Spread Strategy</li>
                        <li>Bull Put Spread Strategy</li>
                        <li>Bear Call Spread Strategy</li>
                        <li>Bear Put Spread Strategy</li>
                        <li>Long Call Butterfly</li>
                        <li>Short Call Butterfly</li>
                        <li>Long Call Condor</li>
                        <li>Short Call Condor</li>
                        <li>Option Chain</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <p
                      class="accordion-button collapsed accordionheading"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Who Should Do This Course?
                    </p>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ol>
                        <li className="para">MBA & BBA/CA/CS/CPT Students</li>
                        <li className="para">
                          Anyone who wants experts in the financial market
                        </li>
                        <li className="para">
                          10+2, BA. B.com. B.Sc. Pursuing Students
                        </li>
                        <li className="para">
                          Those who want to pursue the career in financial
                          service
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <p className="heading">Career Opportunity</p>
                <p className="para">
                  You can become Equity Analyst & Stock Analyst and you become
                  fit for various other posts in various other verticals
                  depending on your overall Qualifications
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img src={trading1} width={"100%"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionTradingCourse;
