import React from "react";
import professionalImage from "../../Navbar/assets/professional.jpg";
import trading1 from "../../../images/trading1.avif";
const AdvanceTechnicalCourse = () => {
  return (
    <div className="container mt-5 mb-5">
      <p className="allheading">Professional Trader Course</p>
      <div className="row">
        <div className="col-md-5">
          <img
            style={{ borderRadius: "30px 0px 0px 30px" }}
            width={"100%"}
            height={"100%"}
            src={professionalImage}
            alt=""
          />
        </div>
        <div className="col-md-7">
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
        </div>
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
                    Technical Analysis
                  </p>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ol>
                      <li className="para">
                        Markets and Financial Instruments
                      </li>
                      <li className="para">Time-Period Analysis</li>
                      <li className="para">Types of Charts</li>
                      <li className="para">Trend lines- Uptrend & Downtrend</li>
                      <li>Breakout Theory</li>
                      <li>Support & Resistance
                        <ol>
                          <li>Intraday Support & Resistance</li>
                          <li>Positional Trading Support & Resistance</li>
                        </ol>
                      </li>
                        <li>Channels</li>
                        <li>EMA- Double</li>
                        <li>Pivot Points</li>
                        <li>Trading Divergences- Hidden</li>
                        <li>Price Gap</li>
                        <li>Candle Setup Theory</li>
                        <li>Candlestick Pattern</li>
                        <li>Trade Volume</li>
                        <li>Open Interest and Decision Making</li>
                        <li>Fibonacci</li>
                        <li>Live Trading</li>
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
                   Advance Technical Analysis
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
                      <li className="para">Time the Market</li>
                      <li className="para">Insider Data</li>
                      <li className="para">
                      Risk Management
                      </li>
                      <li className="para">Money Management</li>
                      <li className="para">
                      Explosion Trade                        
                      </li>
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
                    Psychology and Risk Management
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
                      <li className="para">Identification (Source and Problem Analysis)</li>
                      <li className="para">Planning</li>
                      <li className="para">Constraints</li>
                      <li className="para">Framework</li>
                      <li className="para">Developing an Analysis</li>

                      <li className="para">Mitigation</li>
                      <li className="para">Other Risk Treatment
                        <p className="heading">Features & Benefits</p>
                        <ol>
                          <li>Daily Live trading in the classroom</li>
                          <li>3+ Mentors Cum Traders</li>
                          <li>Retakes and Class Backups Available</li>
                          <li>Lifetime Support</li>
                          <li>Free Demat A/c Opening with Upstox</li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src={trading1} width={"100%"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceTechnicalCourse;
