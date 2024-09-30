import React, { useEffect } from "react";
import partner1 from "../../images/partner1.jpg";
import partner2 from "../../images/partner2.png";
import partner3 from "../../images/partner3.png";
import partner4 from "../../images/partner4.png";
import partner5 from "../../images/partner5.png";
import partner6 from "../../images/partner6.png";
import partner7 from "../../images/partner7.png";
import { Helmet } from "react-helmet";
const PlacementPartners = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>Placement Partners | Trading Smart Edge</title>
        <meta
          name="description"
          content="Explore our placement partners at Trading Smart Edge, where NSE certified professionals find rewarding job opportunities in financial institutions and banks."
        />
        <meta
          name="keywords"
          content="Placement Partners, Trading Smart Edge, NSE certified professionals, financial institutions jobs, banking careers, Adroit Financial, Motilal Oswal, Angel Broking, job opportunities"
        />
      </Helmet>
      <p className="head">
        Our <span style={{ color: "green" }}>Placement Partners</span>
      </p>

      <div className="container mt-5">
        <p>
          <b>
            SEBI has made it mandatory to employ only the NSE certified
            professionals in the industry and since the students passing out
            from DIPE have all the relevant NSE certifications thus getting a
            job is not at all difficult.
          </b>
        </p>
        <h1>Job market</h1>
        <p>
          It is estimated that more than 1 crore jobs will be available in the
          market in the forthcoming years. The job market in the sector of
          financial institutions, banks are ever-expanding and the banks are
          even setting up branches in rural places.
        </p>
        <p>
          All the placement partners are from the industry only and they are
          happy to recruit our NSE certified students. The major employers are
        </p>
        <ul>
          <li>• Adroit Financial</li>
          <li>• Parasram India</li>
          <li>• Motilal Oswal Asset management</li>
          <li>• Anand Rathi</li>
          <li>• Share Khan</li>
          <li>• Angel Broking</li>
          <li>• Reliance And lot more</li>
        </ul>
        <p>
          Jobs won't be a problem for the right candidate though it all depends
          on how the student fares in the interview. Based on the performance
          the student will be placed in different designations.
        </p>

        <div className="row">
          <div className="col-md-3 mb-5">
            <img
              width={"100%"}
              src={partner1}
              alt="trading smart edge images"
            />
          </div>
          <div className="col-md-3 mb-5">
            <img
              width={"100%"}
              src={partner2}
              alt="trading smart edge images"
            />
          </div>
          <div className="col-md-3 mb-5">
            <img
              width={"100%"}
              src={partner3}
              alt="trading smart edge images"
            />
          </div>
          <div className="col-md-3 mb-5">
            <img
              width={"100%"}
              src={partner4}
              alt="trading smart edge images"
            />
          </div>
          <div className="col-md-3 mb-5">
            <img
              width={"100%"}
              src={partner5}
              alt="trading smart edge images"
            />
          </div>
          <div className="col-md-3 mb-5">
            <img
              width={"100%"}
              src={partner6}
              alt="trading smart edge images"
            />
          </div>
          <div className="col-md-3 mb-5">
            <img
              width={"100%"}
              src={partner7}
              alt="trading smart edge images"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementPartners;
