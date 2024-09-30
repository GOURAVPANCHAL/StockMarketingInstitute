import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import "../Resources/resources.css";
const AdmissionProcedure = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const card = [
    {
      title: "1. Enquiry Form Submission:",
      desc1: "* Candidates begin by filling out an enquiry form.",
      desc2: "* Once the form is submitted, the counselling process commences.",
    },
    {
      title: "2. Counselling and Needs Assessment:",
      desc1:
        "During counselling, a discussion takes place to understand the candidate’s specific needs and goals.",
    },
    {
      title: "3. Course Recommendation:",
      desc1:
        "Based on the discussion and assessment, the institute recommends the most suitable courses available.",
    },
    {
      title: "4. Admission Offer:",
      desc1:
        "Qualified candidates are offered admission into various short-term and long-term courses.",
    },
    {
      title: "5. Admission Form and Documentation:",
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
      title: "6. Fee Payment:",
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
      <Helmet>
        <title>Admission Procedure | TSE Institute</title>
        <meta
          name="description"
          content="Learn about the admission procedure at TSE Institute, including enquiry form submission, counselling, course recommendations, and fee payment details."
        />
        <meta
          name="keywords"
          content="Admission Procedure, TSE Institute, Course Enrollment, Education, Admission Steps, Counselling, Fee Payment, Student Enrollment"
        />
      </Helmet>
      
      <div>
        <div className="admisstionSection mt-5">
          <div className="container">
            <div className="row">
              {card.map((item, index) => (
                <div className="col-md-6" key={index}>
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
