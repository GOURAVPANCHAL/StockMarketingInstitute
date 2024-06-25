import React from "react";
import "../MeetOurTeam/meet.css";
import Slider from "react-slick";
import teamImage1 from "../../images/team-img-01.jpg";
import teamImage2 from "../../images/team-img-02.jpg";
import teamImage3 from "../../images/team-img-03.jpg";
import teamImage4 from "../../images/team-img-04.jpg";
import teamImage5 from "../../images/team-img-05.jpg";
import teamImage6 from "../../images/team-img-06.jpg";
import google from "../../images/google.webp";
import justdial from "../../images/justdial.png";
import { Link } from "react-router-dom";

const MeatOurTeam = () => {
  const aboutTeam = [
    {
      desination: "business manager",
      image: teamImage1,
      name: "Julia Taylor",
    },
    {
      desination: "business manager",
      image: teamImage2,
      name: "Julia Taylor",
    },
    {
      desination: "business manager",
      image: teamImage3,
      name: "Julia Taylor",
    },
    {
      desination: "business manager",
      image: teamImage4,
      name: "Julia Taylor",
    },
    {
      desination: "business manager",
      image: teamImage5,
      name: "Julia Taylor",
    },
    {
      desination: "business manager",
      image: teamImage6,
      name: "Julia Taylor",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
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
  return (
    <>
    
      <div className="container mt-3 mb-3">
        <div className="row">
          {/* <div className="col-md-4">
            <div className="mb-3">
              <a className="boder" href="#">
                MEET OUR TEAM
              </a>
            </div>
            <h1 className="sideheading">Meet our team of experts</h1>
            <p className="paragraph">
              We welcome and celebrate different perspectives to help our firm,
              our clients and our people.
            </p>
          </div> */}
          <div className="col-md-12">
            <div className="slider-container">
              <Slider {...settings}>
                {aboutTeam.map((item) => (
                  <div className="cardabout" key={item.id}>
                    <div className="p-2">
                      <div className="designation">
                        <ul>
                          <li>{item.desination}</li>
                        </ul>
                      </div>
                      <img
                        className="pb-3"
                        width={"100%"}
                        height={"100%"}
                        src={item.image}
                        alt={item.caption}
                      />
                      <p className="name">{item.name}</p>
                      <div
                        className="d-flex"
                        style={{
                          justifyContent: "space-between",
                          maxWidth: "30%",
                        }}
                      >
                        <div>
                          <svg
                            cursor="pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#feda75"
                            width="15"
                            height="15"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                          </svg>
                        </div>
                        <div>
                          <svg
                            cursor="pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#FF0000"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </div>
                        <div>
                          <svg
                            cursor="pointer"
                            color="#0077b5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="currentColor"
                            class="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                          </svg>
                        </div>
                        <div>
                          <svg
                            cursor="pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#25D366"
                            width="15"
                            height="15"
                            fill="currentColor"
                            class="bi bi-whatsapp"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <section className="callingSection">
        <div className="container">
          <div className="row lineHeight">
            <div className="col-md-3">
              <Link to={'/contact'}>
              <button className="btn btn-success demo">Book Demo <i class="bi bi-hand-index-thumb"></i></button>
              </Link>
            </div>
            <div className="col-md-6">
              <h2>Call Us Today To Book A Free Demo</h2>
            </div>
            <div className="col-md-3">
              <button className="btn btn-success demo">Call Now <i class="bi bi-telephone-outbound"></i></button>
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default MeatOurTeam;
