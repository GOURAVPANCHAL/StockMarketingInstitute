import React from "react";
import image1 from "../../images/1.svg";
import image2 from "../../images/2.svg";
import image3 from "../../images/3.svg";
import image4 from "../../images/4.svg";
import image5 from "../../images/5.svg";
import image6 from "../../images/6.svg";
import '../certificateCompany/certificate.css'
const Certificate_company = () => {
  return (
    <>

      <div className="background">
    <div className="overlay">

        <div className="container">
          <h3 className="text-center mb-5">
            <b>
            TSE ONLINE & CLASSROOM STOCK MARKET INSTITUTE IS BENEFITING
            </b>
          </h3>
          <div>
            <div className="row">
              <div className="col-md-6" style={{borderRight:'1px solid gray'}}>
             <div className="d-flex" style={{justifyContent:'space-evenly', alignItems:'center', marginBottom:'1rem'}}>
                  <img width={"10%"} style={{backgroundColor:'white'}} height={'100%'} src={image1} alt="" />
                  <p className="TSE">
                  Stock Market Trador Losing Money in Stock Market.
                  </p>
                </div>
                <div className="d-flex" style={{justifyContent:'space-evenly', alignItems:'center', marginBottom:'1rem'}}>
                  <img width={"10%"} style={{backgroundColor:'white'}} height={'100%'} src={image2} alt="" />
                  <p className="TSE">
                    Anyone who want to trade in indian stock market for Extra
                    Returns.
                  </p>
                </div>
                <div className="d-flex" style={{justifyContent:'space-evenly', alignItems:'center', marginBottom:'1rem' }}>
                  <img width={"10%"} style={{backgroundColor:'white'}} height={'100%'} src={image3} alt="" />
                  <p className="TSE">
                    Housewives and Retired Professional who want to generate
                    Extra Income.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex" style={{justifyContent:'space-evenly', alignItems:'center', marginBottom:'1rem'}}>
                  <img width={"10%"} style={{backgroundColor:'white'}} height={'100%'} src={image4} alt="" />
                  <p className="TSE">Anyone who want to be a consultant and sub-broker.</p>
                </div>
                <div className="d-flex" style={{justifyContent:'space-evenly', alignItems:'center', marginBottom:'1rem'}}>
                  <img width={"10%"} style={{backgroundColor:'white'}} height={'100%'} src={image5} alt="" />
                  <p className="TSE">
                    Student of CA / CS / ICWA / CFA who want to upgrade their
                    knowledge.
                  </p>
                </div>
                <div className="d-flex" style={{justifyContent:'space-evenly', alignItems:'center', marginBottom:'1rem'}}>
                  <img width={"10%"} style={{backgroundColor:'white'}} height={'100%'} src={image6} alt="" />
                  <p className="TSE">
                    After Graduation / Post Graduation / MBA - Skilled Training
                    Course of Quick job / Career Oriented Course on Stock
                    Market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </>
  );
};

export default Certificate_company;
