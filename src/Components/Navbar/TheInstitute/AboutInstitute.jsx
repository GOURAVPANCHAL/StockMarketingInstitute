import React from "react";
import '../../Navbar/Navbar.css'
import image from '../../../images/banner.jpg'
const AboutInstitute = () => {
  return (
    <div className="backgroundd mb-5">
      <div className="container">
        <div className="main">
      <h1 className="head mt-5 mb-5">About <span style={{color:'green'}}> TSE</span></h1>
          <div className="row">
            <div className="col-md-6 mb-2">
              <img src={image} width='100%' alt="trading" />
            </div>
            <div className="col-md-6">
            <p className="para">
            At Trading Smart Edge (TSE), we're all about teaching you everything
            you need to know to succeed in the financial market world. Whether
            you prefer learning online or in-person, we've got you covered with
            a range of courses.
          </p>
           <p className="para">
            Our focus is on practical skills that will help you land a job or
            excel in your current role. We've done our homework to make sure our
            courses match the needs of the growing Indian economy. From basics
            to advanced strategies, we cover it all, including stocks,
            derivatives, commodities, forex trading, and both technical and
            fundamental analysis.
          </p>
            </div>
          </div>
 
          <p className="para">
            We're proud to offer quick, job-focused certification programs, with
            specialized courses in Technical and Fundamental Analysis. Whether
            you dream of being a successful investor or managing wealth for
            others, we have the tools and guidance to help you reach your goals.
          </p>
          <p className="para">
            Our goal isn't just to teach you about finance but also to help you
            develop important life skills and management abilities. We want to
            produce industry leaders who can confidently handle the challenges
            of the financial world.
          </p>
          <p className="para">
            At TSE, we're committed to giving you the best education and support
            to help you grow your wealth and make smart decisions. With a mix of
            theory and hands-on practice, we're preparing the next generation of
            finance pros to tackle anything the industry throws their way. Join
            us at TSE and start your journey toward a successful career in
            finance!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;
