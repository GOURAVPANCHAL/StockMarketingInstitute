import React from "react";
import "../Courses/Courses.css";
import online from "../../images/online-classes.png";
import practical from "../../images/practical-learning.png";
import support from "../../images/lifetime-support.png";
import certificate from "../../images/certificate.png";
import backup from "../../images/backup-class.png";
import installment from "../../images/installment.png";
import jobassistance from "../../images/job-assistance.png";
import freeBooks from "../../images/free-books.png";
const   Courses = () => {
  const courses = [
    {
      icon: online,
      title: "ONLINE & OFFLINE CLASSES",
    },
    {
      icon: support,
      title: "LIFETIME SUPPORT",
    },
    {
      icon: backup,
      title: "BACKUP CLASSES",
    },

    {
      icon: installment,
      title: "FEES INSTALLMENT",
    },
    {
      icon: jobassistance,
      title: "100% JOB ASSISTANCE",
    },
    {
      icon: freeBooks,
      title: "FREE BOOKS",
    },
    {
      icon: practical,
      title: "PRACTICAL LEARNING",
    },
    {
      icon: certificate,
      title: "NISM / NSE / NCFM Certification Courses",
    },
  ];
  return (
    <>
      <div>
        <div className="container">
            <p className="allheading">Feature & Facilities Available In share market training in delhi trading smart edge
            Institute</p>
          <div className="row">
            {courses.map((item, index) => (
              <div className="col-md-3 col-6 mb-2">
                <div className="coursesbox">
                  <img width="40%" src={item.icon} alt="" />
                </div>
                <p className="title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
