import React from "react";
import '../aboutForm/aboutform.css'
const AboutForm = () => {
  const formSubmit = () => {};
  return (
    <div className="container mt-5">
      <form onSubmit={formSubmit} action="">
        <div style={{backgroundColor:'#181d38', padding:'2rem'}}>
            <h1 className="allheading formheading mb-5" style={{color:'white'}}>
                Fill Out Form Below To Get Details About Course
            </h1>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input className="form-control" placeholder="Full Name" type="text" name="name" id="" />
            </div>
            <div className="col-md-4 mb-3">
              <input
              placeholder="Phone Number"
                className="form-control"
                type="number"
                name="number"
                id=""
              />
            </div>
            <div className="col-md-4 mb-3">
              <input className="form-control" placeholder="Email Id" type="email" name="email" id="" />
            </div>

            <div className="col-md-4 mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Select Course</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <input className="form-control" placeholder="City" type="text" name="city" id="" />
            </div>
            <div className="col-md-4">
              <input className="form-control" placeholder="Any Query" type="text" name="query" id="" />
            </div>
            <div className="col-md-12 text-center mt-3">
             <button style={{border:'1px solid white', backgroundColor:'transparent', borderRadius:'22px', padding:'10px 30px'}} className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;
