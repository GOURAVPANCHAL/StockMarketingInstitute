import React, { useEffect } from "react";
import '../../Navbar/Navbar.css'
import { Helmet } from "react-helmet";
const TheInstitute = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
     <Helmet>
        <title>About The Institute | Trading Smart Edge (TSE)</title>
        <meta name="description" content="Learn about Trading Smart Edge (TSE), an institute that offers practical financial market courses covering stocks, derivatives, commodities, forex trading, technical and fundamental analysis." />
        <meta name="keywords" content="Trading Smart Edge, financial market courses, stock trading institute, forex trading, technical analysis, fundamental analysis, financial education, wealth management" />
        <meta name="author" content="Trading Smart Edge Institute" />
        <meta property="og:title" content="About The Institute | Trading Smart Edge (TSE)" />
        <meta property="og:description" content="Join Trading Smart Edge (TSE) to gain practical skills in finance and trading. Explore our range of courses designed for the financial market." />
        <meta property="og:image" content="https://example.com/path-to-image.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <div className="container mb-5">
          <div className="main">
            <p className="contactHeading text-center">
              The Institute
            </p>
            <h2 className="mb-3 mt-5" style={{ color: "green" }}>About The Institute</h2>
            <p className="para">
              At Trading Smart Edge (TSE), we're all about teaching you
              everything you need to know to succeed in the financial market
              world. Whether you prefer learning online or in-person, we've got
              you covered with a range of courses.
            </p>
            <p className="para">
              Our focus is on practical skills that will help you land a job or
              excel in your current role. We've done our homework to make sure
              our courses match the needs of the growing Indian economy. From
              basics to advanced strategies, we cover it all, including stocks,
              derivatives, commodities, forex trading, and both technical and
              fundamental analysis.
            </p>
            <p className="para">
              We're proud to offer quick, job-focused certification programs,
              with specialized courses in Technical and Fundamental Analysis.
              Whether you dream of being a successful investor or managing
              wealth for others, we have the tools and guidance to help you
              reach your goals.
            </p>
            <p className="para">
              Our goal isn't just to teach you about finance but also to help
              you develop important life skills and management abilities. We
              want to produce industry leaders who can confidently handle the
              challenges of the financial world.
            </p>
            <p className="para">
              At TSE, we're committed to giving you the best education and
              support to help you grow your wealth and make smart decisions.
              With a mix of theory and hands-on practice, we're preparing the
              next generation of finance pros to tackle anything the industry
              throws their way. Join us at TSE and start your journey toward a
              successful career in finance!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheInstitute;
