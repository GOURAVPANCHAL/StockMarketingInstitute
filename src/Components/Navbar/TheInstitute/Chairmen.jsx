import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Chairmen = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
    <Helmet>
        <title>Chairman Message - Trading Smart Edge (TSE)</title>
        <meta name="description" content="Read the Chairman's message on the mission of Trading Smart Edge (TSE) to shape future stock market leaders and provide financial literacy and skills." />
        <meta name="keywords" content="Chairman Message, TSE, Trading Smart Edge, stock market, financial literacy, NSE certification, diploma courses, financial market management, technical analysis" />
        <meta name="author" content="Trading Smart Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="container mb-5">
      <div className="main">
            <h2 className="contactHeading mt-5 mb-3">Chairman Message</h2>
            <p className="para">
              Trading Smart Edge (TSE) emerged with a mission: to mold today's
              students into future leaders of the stock market. Based in Delhi
              NCR, our institute is dedicated to developing individuals into
              skilled stock market analysts, equipped with technical and
              fundamental expertise to excel as equity analysts, research
              analysts, and industry professionals with a competitive edge.
            </p>
            <p className="para">
              With SEBI requiring professionals with NSE certifications in
              banks, stock exchanges, AMCs, mutual fund houses, and security
              markets, the demand for highly qualified candidates has surged.
              Consequently, the responsibility of providing quality
              professionals has significantly increased.
            </p>
            <p className="para">
              Recognizing Financial Skill Service as a crucial employable skill,
              the National Skill Development Corporation, a Government of India
              initiative, led by CBSE to introduce a Financial Market Management
              course. This joint certification program with NSE began in the
              2007-08 academic year under vocational education at the senior
              secondary level.
            </p>
            <p className="para">
              In India, where only 3.75% of the population engages in financial
              trading, there is a clear need for financial literacy. It's
              predicted that the field will require around 20 million
              professionals in the next decade, including students, investors,
              traders, job seekers, retirees, homemakers, and retired military
              personnel.
            </p>
            <p className="para">
              TSE addresses this need with a variety of job-oriented diploma
              courses, available both online and in classrooms, ensuring broad
              accessibility. Our short-term courses cover the capital market,
              derivative market, commodity market, currency market, options
              trading, technical analysis, and more. Focusing on developing
              analytical skills, our programs explore both micro and macro
              aspects of the subject.
            </p>
            <p className="para">
              <b>
                At TSE, we offer growth trading strategies in live market
                scenarios, providing a unique selling proposition that sharpens
                students' analytical prowess to the core.
              </b>
            </p>
            <p className="para">
              <b>
                All aspiring financial learners, I urge you to seize the
                opportunities presented by our courses, poised to enrich your
                personal and professional lives with a sound financial balance.
              </b>
            </p>
          </div>
      </div>
    </>
  )
}

export default Chairmen