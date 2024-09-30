import React from "react";
import OurCompany from "../ourCompany/OurCompany";
import Certificate_company from "../certificateCompany/Certificate_company";
import LearnCourse from "../learnCourse/LearnCourse";
import Header from "../Header/Header";
import Courses from "../Courses/Courses";
import ChoseInstitute from "../ChooseInstitute/ChoseInstitute";
import Faq from "../Faq/Faq";
import Testimonial from "../testimonial/Testimonial";
import AboutForm from "../aboutForm/AboutForm";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
     <Helmet>
        <title>Trading Smart Edge - Your Gateway to Trading Success</title>
        <meta name="description" content="Explore our courses, certifications, and testimonials to enhance your trading skills with Trading Smart Edge." />
        <meta name="keywords" content="trading, courses, certifications, testimonials, Trading Smart Edge" />
        <meta name="author" content="Hemant Sharma" />
      </Helmet>
      <Header />
      <Courses />
      <Certificate_company />
      <ChoseInstitute />
      <LearnCourse />
      <Testimonial />
      <AboutForm />
      <OurCompany />
      <Faq />
    </>
  );
};

export default Home;
