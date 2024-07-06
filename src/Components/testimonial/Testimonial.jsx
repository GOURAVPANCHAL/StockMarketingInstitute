import React from "react";
import testimonial1 from "../../images/1.png";
import testimonial2 from "../../images/2.png";
import testimonial3 from "../../images/3.png";
import testimonial4 from "../../images/4.png";
import testimonial5 from "../../images/5.png";
import testimonial6 from "../../images/6.png";

import Slider from "react-slick";
import "../testimonial/testimonial.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonial = [
    {
      name: "Shivam",
      image: testimonial1,
      position: "Aspiring Trader",
      desc: (
        <p>
          <span style={{ fontSize: "60px" }}>❝</span>
          <br />
          The courses at [Trading Smart Edge] transformed my understanding of
          stock markets. The hands-on approach and expert guidance equipped me
          with practical skills that I apply daily in my career.
        </p>
      ),
    },
    {
      name: "Pankaj",
      image: testimonial2,
      position: "Aspiring Trader",
      desc: (
        <p>
          <span style={{ fontSize: "60px" }}>❝</span>
          <br />
          The comprehensive curriculum at [Trading Smart Edge] covers everything
          from basic to advanced trading strategies. The real-world case studies
          and simulations were particularly beneficial.
        </p>
      ),
    },
    {
      name: "Govind",
      image: testimonial3,
      position: "Aspiring Trader",
      desc: (
        <p>
          <span style={{ fontSize: "60px" }}>❝</span>
          <br />I joined [Trading Smart Edge] with zero knowledge about trading.
          The step-by-step learning modules and supportive mentors made it easy
          for me to grasp complex concepts.
        </p>
      ),
    },
    {
      name: "Alok",
      image: testimonial4,
      position: "Entrepreneur",
      desc: (
        <p>
          <span style={{ fontSize: "60px" }}>❝</span>
          <br />
          The insights I gained from [Trading Smart Edge] have been invaluable.
          The course structure is well-organized, and the instructors are highly
          knowledgeable, making learning both enjoyable and effective.
        </p>
      ),
    },
    {
      name: "Prince",
      image: testimonial5,
      position: "Entrepreneur",
      desc: (
        <p>
          <span style={{ fontSize: "60px" }}>❝</span>
          <br />
          The insights I gained from [Trading Smart Edge] have been invaluable.
          The course structure is well-organized, and the instructors are highly
          knowledgeable, making learning both enjoyable and effective.
        </p>
      ),
    },
    ,
    {
      name: "Ishant",
      image: testimonial6,
      position: "Entrepreneur",
      desc: (
        <p>
          <span style={{ fontSize: "60px" }}>❝</span>
          <br />
          The insights I gained from [Trading Smart Edge] have been invaluable.
          The course structure is well-organized, and the instructors are highly
          knowledgeable, making learning both enjoyable and effective.
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <div className="text-center mt-5 mb-3">
          <a className="testimonialboder" href="#">
            Testimonial
          </a>
          <h1 className="allheading mt-3">Our Student Reviews</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {testimonial.map((item, index) => (
              <div className="testimonialcard">
                <div className="imagesection d-flex">
                  <img className="image" src={item.image} alt="" />
                  <div className="content">
                    <h5>
                      <b>{item.name}</b>
                    </h5>
                    <h6 style={{ color: "gray" }}>{item.position}</h6>
                  </div>
                </div>
                <div>
                <div className="star d-flex gap-2">
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  <i class="bi bi-star-fill" style={{color:'#fed800'}}></i>
                  </div>
                </div>
                <div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
