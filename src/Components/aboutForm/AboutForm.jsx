import React from "react";
import "../aboutForm/aboutform.css";
const AboutForm = () => {
  const formSubmit = () => {};
  return (
    <div className="container mt-5">
     <form
  action="https://api.web3forms.com/submit"
  method="POST"
  onSubmit={formSubmit}
>
  <div style={{ backgroundColor: "#181d38", padding: "2rem" }}>
    <h1 className="allheading formheading mb-5" style={{ color: "white" }}>
      Fill Out Form Below To Get Details About Course
    </h1>

    {/* Access Key for Web3Forms */}
    <input
      type="hidden"
      name="access_key"
      value="757a79bf-f594-4093-a93d-c6f07db7ac6c"
    />

    {/* Honeypot Spam Protection */}
    <input
      type="checkbox"
      name="botcheck"
      className="hidden"
      style={{ display: "none" }}
    />

    {/* Redirect URL to your thank-you page */}
    <input type="hidden" name="redirect" value="https://tradingsmartedge.com/" />

    {/* Form Content */}
    <div className="row">
      <div className="col-md-4 mb-3">
        <input
          className="form-control"
          placeholder="Full Name"
          type="text"
          name="name"
          required
        />
      </div>
      <div className="col-md-4 mb-3">
        <input
          placeholder="Phone Number"
          className="form-control"
          type="number"
          name="number"
          required
        />
      </div>
      <div className="col-md-4 mb-3">
        <input
          className="form-control"
          placeholder="Email Id"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="col-md-4 mb-3">
        <select
          className="form-select"
          name="course"
          aria-label="Select Course"
          required
        >
          <option value="">Select Course</option>
          <option value="Professional Trader Course">Professional Trader Course</option>
          <option value="Professional Investor Course">Professional Investor Course</option>
          <option value="Advance Technical Course">Advance Technical Course</option>
          <option value="Option Trading Course">Option Trading Course</option>
          <option value="Fundamental Analysis">Fundamental Analysis</option>
          <option value="Intraday Trading Setup">Intraday Trading Setup</option>
          <option value="Equity Market Trader">Equity Market Trader</option>
          <option value="Diploma in Financial Management"> Diploma in Financial Management</option>
          <option value="Advance Diploma in Financial Management">Advance Diploma in Financial Management</option>
          <option value="NCFM Capital Market Module"> NCFM Capital Market Module</option>
          <option value="NISM Series VIII Derivatives Market Module">NISM Series VIII Derivatives Market Module</option>
          <option value="NISM Series I Currency Market">NISM Series I Currency Market</option>
          <option value="NISM Series I Currency Market">NISM Series I Currency Market</option>
          <option value="NISM Series XXV Research Analyst">NISM Series XXV Research Analyst</option>
        </select>
      </div>
      <div className="col-md-4 mb-3">
        <input
          className="form-control"
          placeholder="City"
          type="text"
          name="city"
          required
        />
      </div>
      <div className="col-md-4">
        <input
          className="form-control"
          placeholder="Any Query"
          type="text"
          name="query"
        />
      </div>

      {/* Submit Button */}
      <div className="col-md-12 text-center mt-3">
        <button
          type="submit"
          style={{
            border: "1px solid white",
            backgroundColor: "transparent",
            borderRadius: "22px",
            padding: "10px 30px",
          }}
          className="btn btn-success"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</form>

    </div>
  );
};

export default AboutForm;
