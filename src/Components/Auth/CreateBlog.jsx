import React, { useEffect } from "react";
import "../Navbar/Navbar.css";


const CreateBlog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <p className="contactHeading text-center mt-5">Create Blog</p>
            <div className="col-md-12">
              <div className="formdiv">
                <form action="">
                  <div className="mb-4">
                    <label htmlFor="">Image</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id=""
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="">Title</label>
                    <input
                      className="form-control inputField"
                      type="text"
                      name="title"
                      id=""
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="">Description</label>
                    <input
                      className="form-control inputField"
                      type="text"
                      name="city"
                      id=""
                    />
                  </div>
                  <div className="btnupdate">
                    <button className="updateblogbtn">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
