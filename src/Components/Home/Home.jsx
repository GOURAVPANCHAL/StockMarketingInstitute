import React from "react";
import OurCompany from "../ourCompany/OurCompany";
import Certificate_company from "../certificateCompany/Certificate_company";
import LearnCourse from "../learnCourse/LearnCourse";
import Header from "../Header/Header";
import Courses from "../Courses/Courses";
import ChoseInstitute from "../ChooseInstitute/ChoseInstitute";
import Faq from "../Faq/Faq";
import MeetOurTeam from "../MeetOurTeam/MeatOurTeam";
import Testimonial from "../testimonial/Testimonial";
import AboutForm from "../aboutForm/AboutForm";
const Home = () => {
  return (
    <>
      <Header />
      <Courses />
      <Certificate_company />
      <ChoseInstitute />
      <LearnCourse />
      {/* <MeetOurTeam /> */}
      <Testimonial />
      <AboutForm />
      <OurCompany />
      <Faq />
    </>
  );
};

export default Home;
