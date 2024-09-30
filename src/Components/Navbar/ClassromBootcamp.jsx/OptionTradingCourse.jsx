import React, { useEffect } from "react";
import trading1 from "../../../images/ai5.jpg";
import professionalImage from "../../../images/stock4.png";
import { Helmet } from "react-helmet";
const OptionTradingCourse = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Option Trading Course - Trading Smart Edge</title>
        <meta
          name="description"
          content="Enroll in our Option Trading Course to learn advanced trading strategies and become an equity analyst."
        />
        <meta
          name="keywords"
          content="Option Trading Course, trading strategies, equity analyst, financial education"
        />
      </Helmet>
      <div className="container mt-5 mb-5">
        <p className="allheading">Option Trading Course</p>
        <div className="row">
          <div className="row mt-5">
            <div className="col-md-5">
              <img
                src={trading1}
                width={"100%"}
                alt="trading smart edge images"
              />
            </div>
            <div className="col-md-7">
              <p className="para">
                You can become Equity Analyst & Stock Analyst and you become fit
                for various other posts in various other verticals depending on
                your overall Qualifications
              </p>
            </div>
            <div className="col-md-6 mt-5">
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
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <img
                src={professionalImage}
                width={"100%"}
                alt="trading smart edge images"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionTradingCourse;
