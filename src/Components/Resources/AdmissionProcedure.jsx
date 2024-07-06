import React from "react";
import "../Resources/resources.css";
import image from '../../images/05 (1).png'
const AdmissionProcedure = () => {
  
  const card = [
    {
      title: "1. Enquiry Form Submission:",
      desc1: "* Candidates begin by filling out an enquiry form.",
      desc2: "* Once the form is submitted, the counselling process commences.",
    },
    {
      title: "2.Counselling and Needs Assessment:",
      desc1:
        "During counselling, a discussion takes place to understand the candidate’s specific needs and goals.",
    },
    {
      title: "3.Course Recommendation:",
      desc1:
        "Based on the discussion and assessment, the institute recommends the most suitable courses available.",
    },
    {
      title: "4.Admission Offer:",
      desc1:
        "Qualified candidates are offered admission into various short-term and long-term courses.",
    },
    {
      title: "5.Admission Form and Documentation:",
      desc1: "Selected candidates are required to fill out an admission form.",
      desc2: "Necessary documents to be attached include:",
      desc3: (
        <ul>
          <li>ID proof</li>
          <li>Address proof</li>
          <li>Two passport-size photographs</li>
          <li>Qualification certificates</li>
        </ul>
      ),
    },
    {
      title: "6.Fee Payment:",
      desc1:
        "Candidates are required to make a payment, which can vary based on options:",
      desc2: (
        <ul>
          <li>Registration fee</li>
          <li>First instalment of the course fee</li>
          <li>
            One-time fee payment: Candidates need to deposit the registration
            fee or the full course fee.
          </li>
        </ul>
      ),
    },
  ];
  return (

    <>
    <div>
      <div className="admisstionSection mt-5">
        <div className="container">
          <div className="row">
            {card.map((item) => (
              <div className="col-md-6">
                <div className="admissionCard">
                  <p className="title">{item.title}</p>
                  <p className="description">{item.desc1}</p>
                  <p className="description">{item.desc2}</p>
                  <p className="description">{item.desc3}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdmissionProcedure;
