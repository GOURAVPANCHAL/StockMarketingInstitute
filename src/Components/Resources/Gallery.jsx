import React from "react";
import im1 from "../../images/gallery1.jpg";
import im2 from "../../images/gallery2.jpg";
import im3 from "../../images/gallery3.jpg";
import im4 from "../../images/gallery4.jpg";
import im5 from "../../images/gallery5.jpg";
import im6 from "../../images/gallery6.jpg";
import im7 from "../../images/gallery7.jpg";
import im8 from "../../images/gallery8.jpg";
import im9 from "../../images/gallery9.jpg";
import im10 from "../../images/gallery10.jpg";
import im11 from "../../images/gallery11.jpg";
import im12 from "../../images/gallery12.jpg";
import im13 from "../../images/gallery13.jpg";
import im14 from "../../images/gallery14.jpg";
import im15 from "../../images/gallery15.jpg";
import im16 from "../../images/gallery16.jpg";
import im17 from "../../images/gallery17.jpg";
import im18 from "../../images/gallery18.jpg";
import im19 from "../../images/gallery19.jpg";
import im20 from "../../images/gallery20.jpg";
import im21 from "../../images/gallery21.jpg";
import im22 from "../../images/gallery22.jpg";
import im23 from "../../images/gallery23.jpg";
import im24 from "../../images/gallery24.jpg";
import im25 from "../../images/gallery25.jpg";
import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";
import video3 from "../../images/video3.mp4";
import video4 from "../../images/video4.mp4";
import video5 from "../../images/video5.mp4";
import video6 from "../../images/video6.mp4";
import video7 from "../../images/video7.mp4";
import video8 from "../../images/video8.mp4";
const Gallery = () => {
  const gallery = [
    im1,
    im2,
    im3,
    im4,
    im5,
    im6,
    im7,
    im8,
    im9,
    im10,
    im11,
    im12,
    im13,
    im14,
    im15,
    im16,
    im17,
    im18,
    im19,
    im20,
    im21,
    im22,
    im23,
    im24,
    im25,
  ];

  const videoUrls = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
  ];
  return (
    <>
      <div className="container">
        <p className="head">
          Our <span style={{ color: "green" }}>Gallery</span>
        </p>

        <div className="row">
          {gallery.map((item, index) => (
            <div key={index} className="col-md-3 mb-5">
              <img
                src={item}
                alt={`Image ${index + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
        <div className="row">
          {videoUrls.map((videoUrl, index) => (
            <div className="col-md-3">
              <div key={index} className="video-item">
                <video width={"100%"} controls className="video-player">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
