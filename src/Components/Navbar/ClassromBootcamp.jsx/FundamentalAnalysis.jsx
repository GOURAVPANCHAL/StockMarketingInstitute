import React from "react";
import professionalImage from "../../Navbar/assets/professional.jpg";

const FundamentalAnalysis = () => {
  return (
    <div className="container mt-5 mb-5">
      <p className="allheading">Fundamental Analysis</p>
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
        <div className="col-md-12">
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
                  Introduction of Fundamental Analysis
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
                    <li>what is Fundamental & Technical Analysis?</li>
                    <li>Difference between technical & fundamental analysis</li>
                    <li>Features & benefits of Fundamental analysis</li>
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
                  Top-Down Approach in Fundamental Analysis
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
                    <li>Economic Analysis</li>
                    <li>Industry Analysis</li>
                    <li>Company analysis</li>
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
                  Economic Analysis GLOBAL & DOMESTIC RESEARCH (EVENTS)
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
                    <li>Political Events (Election Results)</li>
                    <li>Central Bank Meet (Central Bank Events)</li>
                    <li>Government Budget</li>
                    <li>Monsoon</li>
                    <li>OPEC Meeting</li>
                    <li>War or Terrorist Attack</li>
                  </ol>
                  <p className="heading">Other Events</p>
                  <ol>
                    <li>Rating Agencies</li>
                    <li>India VIX</li>
                    <li>Scandal</li>
                    <li>Insider Activity</li>
                    <li>Country Debt</li>
                  </ol>
                  <p className="heading">
                    Currency Analysis Correlation of Events Economic Data
                    Analysis
                  </p>
                  <ol>
                    <li>Inventory</li>
                    <li>Retail Sales</li>
                    <li>Consumer Confidence</li>
                    <li>CPI – Consumer Price Index</li>
                    <li>PPI – Producer Price Index</li>
                    <li>Core Durable Goods Order</li>
                    <li>New Homes Sales</li>
                    <li>Building Permits</li>
                    <li>ADP Non-Farm Employment</li>
                    <li>Non-Farm Employment</li>
                    <li>Unemployment Claims</li>
                    <li>PMI</li>
                    <li>Industrial Production</li>
                    <li>GDP – Gross Domestic Product</li>
                    <li>Trade Balance</li>
                    <li>Crude Oil Inventory</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <p
                  class="accordion-button collapsed accordionheading"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Economic Analysis SECTOR ANALYSIS (SECTOR SELECTION)
                </p>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ol>
                    <li>Oil & Gas Sector</li>
                    <li>Aviation Sector</li>
                    <li>Paint Sector</li>
                    <li>IT Sector</li>
                    <li>Metal Sector</li>
                    <li>Pharma & FMCG Sector</li>
                    <li>Banking Sector</li>
                    <li>Automobile Sector</li>
                    <li>Real Estate Sector</li>
                    <li>Cement Sector</li>
                    <li>Telecom Sector</li>
                    <li>Power Sector</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <p
                  class="accordion-button collapsed accordionheading"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Script Selection Share or Commodity Selection
                </p>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"></div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <p
                  class="accordion-button collapsed accordionheading"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Company Analysis (Valuation)
                </p>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ol>
                    <li>Cash Flow</li>
                    <li>EPS (Earnings Per Share)</li>
                    <li>P/E (Price to Earnings Ratio)</li>
                    <li>Book Value</li>
                    <li>Price to Book Value</li>
                    <li>
                      EBITDA (Earnings Before Interest, Taxes, Depreciation, and
                      Amortization)
                    </li>
                    <li>Profit Ratios</li>
                    <li>Dividend</li>
                    <li>Market Cap (Market Capitalization)</li>
                    <li>DEBT</li>
                    <li>Management</li>
                    <li>Promoters Holding</li>
                    <li>Volume</li>
                    <li>Open Interest</li>
                    <li>Beta</li>
                    <li>Moving Average</li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <p className="heading">
                # Inclusive With Mastering Fundamental Analysis Strategies (MFA)
                -
              </p>
              <p className="para">
                This Strategy is based on Market & Data Analysis.
              </p>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven">
                <p
                  class="accordion-button collapsed accordionheading"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  Who Should Do This Course?
                </p>
              </h2>
              <div
                id="flush-collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ol>
                    <li>MBA & BBA/CA/CS/CPT Students</li>
                    <li>Anyone who wants experts in the financial market</li>
                    <li>10+2, BA. B.com. B.Sc. Pursuing Students</li>
                    <li>
                      Those who want to pursue the career in financial service
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <p className="allheading">Career Opportunity</p>
          <p className="para">
          You can become Equity Analyst & Stock Analyst and you become fit for various other posts in various other verticals depending on your overall Qualifications
          </p>

          <p className="para">
            <b>
          Who can take this course?
            </b>
          </p>
          <p className="para">It is designed to help Students, Day traders, Investors, Sub-brokers, stock Brokers, Chartered accountants, Housewives Relationship  Managers, Traders, Consultants, Entrepreneurs, etc</p>
          <p className="para"><b>Features & Benefits</b></p>
          <ol>
    <li>Instalment Facility</li>
    <li>Daily Live trading in the classroom</li>
    <li>3+ Mentors Cum Traders</li>
    <li>Retakes and Class Backups Available</li>
    <li>Lifetime Support</li>
    <li>Free Demat A/c Opening with Upstox</li>
</ol>
        </div>
      </div>
    </div>
  );
};

export default FundamentalAnalysis;
