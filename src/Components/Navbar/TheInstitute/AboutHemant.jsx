import React, { useEffect } from "react";
import hemant from "../../../images/hemant.jpg";
import { Helmet } from "react-helmet";
const AboutHemant = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>About Hemant Sharma | Trading Smart Edge</title>
        <meta
          name="description"
          content="Learn about Hemant Sharma, a full-time trader with a Bachelor's Degree in Finance and expertise in stock market trading and analysis."
        />
        <meta
          name="keywords"
          content="Hemant Sharma, stock market, trading, finance, trading strategies, technical analysis, risk management, entrepreneurship"
        />
      </Helmet>
      <div className="container mb-5">
        <div className="main">
          <div className="row mt-5">
            <div className="col-md-4">
              <img src={hemant} width={"100%"} alt="Hemant Sharma" />
            </div>
            <div className="col-md-8">
              <h2 className="contactHeading">About Hemant Sharma</h2>
              <p className="para">
                Hemant Sharma's journey exemplifies the transformative power of
                passion and dedication. With a Bachelor's Degree in Finance and
                affiliation with ACCA, he shifted his career to the dynamic
                world of the stock market. By 2018, driven by a desire for
                autonomy, he became a full-time trader, choosing
                entrepreneurship over traditional employment.
              </p>
              <p className="para">
                Hemant's success is built on a blend of self-education and
                hands-on experience at a proprietary trading desk for about
                three years. During this time, he managed funds ranging from Rs
                2.5 to 3 CR, mastering various option trading strategies,
                including Hedge and Arbitrage Trading Strategies. His
                professional expertise is further validated by the prestigious
                NISM License, highlighting his commitment to excellence and
                regulatory compliance in the stock market.
              </p>
              <p className="para">
                One of Hemant's standout qualities is his ability to apply
                theoretical knowledge to real-world scenarios. With a strong
                command of Technical Analysis, especially chart analysis, he is
                a well-rounded authority in trading and chart reading.
              </p>
            </div>
          </div>

          <p className="para">
            Hemant's insights go beyond technical skills. He strongly believes
            in the critical role of a trader's psychology in navigating market
            complexities. While trading strategies may change with market
            dynamics, he emphasizes the enduring importance of core principles
            like effective risk management and sound money management practices.
            Hemant stresses the need for psychological resilience, particularly
            in dealing with the ups and downs of trading. For him, acknowledging
            losses is not a sign of weakness but a vital step towards preserving
            capital and ensuring long-term sustainability.
          </p>
          <p className="para">
            Central to Hemant's philosophy is the belief that trading, whether
            full-time or part-time, should generate consistent income. He
            envisions trading income becoming a stable monthly revenue stream,
            similar to a traditional salary or a self-sustaining business.
            Achieving this goal requires a deep understanding of the stock
            market's intricacies—a journey Hemant pursues with unwavering
            determination and commitment to excellence.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHemant;
