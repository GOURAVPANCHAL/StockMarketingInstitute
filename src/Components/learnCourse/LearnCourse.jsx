import React from "react";
import learn1 from "../../images/learnCourse1.png";
import learn2 from "../../images/learnCourse2.png";
import learn3 from "../../images/learnCourse3.png";
import learn4 from "../../images/learnCourse4.png";
import learn5 from "../../images/learnCourse5.png";
import learn6 from "../../images/learnCourse6.png";
const LearnCourse = () => {
  return (
    <div style={{ background: "white" }}>
      <div className="container">
        <div
          className="row"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          <p className="allheading mt-5 mb-0">
            Software And App That You Will Learn In Our share market classes
          </p>
          <div className="col-md-2 col-6">
            <img width={"100%"} src={learn1} alt="trading smart edge images" />
          </div>
          <div className="col-md-2 col-6">
            <img width={"100%"} src={learn2} alt="trading smart edge images" />
          </div>
          <div className="col-md-2 col-6">
            <img width={"100%"} src={learn3} alt="trading smart edge images" />
          </div>
          <div className="col-md-2 col-6">
            <img width={"100%"} src={learn4} alt="trading smart edge images" />
          </div>
          <div className="col-md-2 col-6">
            <img width={"100%"} src={learn5} alt="trading smart edge images" />
          </div>
          <div className="col-md-2 col-6">
            <img width={"100%"} src={learn6} alt="trading smart edge images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCourse;
