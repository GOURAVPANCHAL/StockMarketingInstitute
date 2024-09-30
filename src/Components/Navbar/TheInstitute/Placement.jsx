import React, { useEffect } from "react";
import testimonial2 from "../../../images/1.png";
import testimonial1 from "../../../images/2.png";
import testimonial3 from "../../../images/harsh.jpg";
import testimonial4 from "../../../images/3.png";
import testimonial5 from "../../../images/4.png";
import testimonial6 from "../../../images/5.png";
import testimonial7 from "../../../images/6.png";
import { Helmet } from "react-helmet";

const Placement = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const placementStory = [
    {
      image: testimonial1,
      name: "Pankaj’s Journey",
      desc: "Pankaj joined our Professional Trader Course program with a passion for the stock market. His dedication and hard work paid off when he secured a position at a prestigious proprietary trading firm. With our comprehensive training and interview preparation, Pankaj now thrives as a skilled trader, managing substantial portfolios and excelling in various trading strategies.",
    },
    {
      image: testimonial2,
      name: "Shivam Success",
      desc: `Shivam's dream was to become a top-tier trader. Through our hands-on training and real-time market simulations, Shivam mastered technical analysis and chart reading. Our placement cell's personalized interview coaching helped him land a job at a leading trading firm, where he now collaborates with experienced traders and continually hones his skills.`,
    },
    {
      image: testimonial3,
      name: `Harsh's Transformation`,
      desc: "Harsh journey at Trading Smart Edge Institute is a story of determination and growth. Enrolling in our course, Harsh quickly grasped complex trading concepts and strategies. Our extensive interview preparation ensured his success in securing a role at a renowned trading desk. Harsh now enjoys a dynamic career, trading with significant capital and achieving impressive results.",
    },
    {
      image: testimonial4,
      name: `Govind Achievement`,
      desc: `Govind joined our institute with a strong desire to excel in the financial markets. Through rigorous training and mentorship, Govind developed a deep understanding of trading strategies. Our placement support helped him navigate the interview process, leading to a job offer from a top proprietary trading firm. Govind's career is now marked by continuous learning and professional growth.`,
    },
    {
      image: testimonial5,
      name: "Alok Aspiration",
      desc: `Alok aspiration to become a successful trader became a reality at Trading Smart Edge Institute. Our program's focus on practical experience and technical analysis equipped Alok with the necessary skills. With our guidance, he secured a position at a reputable trading firm, where he collaborates with seasoned traders and explores diverse trading strategies.`,
    },
    {
      image: testimonial6,
      name: `Prince's Milestone`,
      desc: `Prince's milestone achievement in the trading world started with our institute's comprehensive education and training. Prince excelled in understanding both micro and macro aspects of trading. Our interview preparation workshops prepared him for success, resulting in a job offer from a leading trading desk. Prince now thrives in a role that offers continuous learning and growth opportunities.`,
    },
    {
      image: testimonial7,
      name: `Ishant's Success`,
      desc: `Ishant joined our program with a shared passion for trading. Their dedication and hard work, combined with our institute's robust training and placement support, led to successful careers in the trading industry. Ishant now enjoy dynamic roles at top proprietary trading firms, where they continue to develop their trading expertise.`,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Placement Stories | Trading Smart Edge Institute</title>
        <meta
          name="description"
          content="Read about the success stories of students from Trading Smart Edge Institute. Our dedicated training and placement support has transformed students into successful traders."
        />
        <meta
          name="keywords"
          content="Placement stories, success stories, stock trading institute, trader placements, stock market training, Trading Smart Edge Institute, trading careers, financial markets, proprietary trading"
        />
        <meta name="author" content="Trading Smart Edge Institute" />
        <meta
          property="og:title"
          content="Placement Stories | Trading Smart Edge Institute"
        />
        <meta
          property="og:description"
          content="Explore the journeys of students who transformed into successful traders with the help of Trading Smart Edge Institute."
        />
        <meta
          property="og:image"
          content="https://example.com/path-to-image.jpg"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container mb-5">
        <div className="main">
          <h2 className="contactHeading mt-5 mb-3">Placement Story’s</h2>
          <p className="para">
            <b>
              Success Stories: From Students to Star Traders at Trading Smart
              Edge Institute
            </b>
          </p>
          <p className="para">
            At Trading Smart Edge Institute, our students' success stories are a
            testament to our commitment to excellence in trading education and
            placement support. Here, we highlight the journeys of seven
            remarkable students who have transformed their careers through our
            institute.
          </p>

          <div className="row">
            {placementStory.map((item, index) => (
              <>
                <div className="col-md-3">
                  <img
                    src={item.image}
                    width={"100%"}
                    style={{ borderRadius: "50%" }}
                    alt="stock"
                  />
                </div>
                <div className="col-md-9">
                  <p className="allheading">{item.name}</p>
                  <p className="para">{item.desc}</p>
                </div>
              </>
            ))}
          </div>
          <p className="para">
            <b>Our Commitment to Students Success</b>
          </p>
          <p className="para">
            At Trading Smart Edge Institute, we are dedicated to providing our
            students with the best education, practical training, and placement
            support. Our goal is to ensure that every student who joins us is
            well-placed in their career, ready to take on the challenges of the
            trading world.
          </p>
          <p className="para">
            With a long list of students successfully placed on trading floors
            and proprietary desks, our institute continues to be a beacon of
            excellence for aspiring traders. We are proud to be a part of our
            students' journeys, helping them see the sky bluer and the future
            brighter.
          </p>
          <p className="para">
            Join Trading Smart Edge Institute today and be the next success
            story. Transform your passion for trading into a rewarding career
            with our expert guidance and support.
          </p>
        </div>
      </div>
    </>
  );
};

export default Placement;
