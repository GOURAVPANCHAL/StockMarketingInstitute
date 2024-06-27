import React from "react";
import "../Resources/resources.css";
const BookRecommended = () => {
  return (
    <>
      <div>
        <div className="book">
          <div className="overlay">
            <p className="imageheading mb-0">
              Book <span style={{ color: "#4e7733", fontWeight: "800" }}>
                Recommended
              </span>
            </p>
          </div>
        </div>
        <div className="bookbackground">

        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-4 sm-12 mb-5">
              <div className="card p-3" style={{backgroundColor:'rgb(19 28 35)'}}>
                <h2 className="allheading" style={{color:'white'}}>Beginner Level</h2>
                <hr />
                <ol>
                  <li className="para" style={{color:'white'}}>The Intelligent Investor by Benjamin Graham</li>
                  <li className="para" style={{color:'white'}}>Rich Dad's Guide to Investing by Robert T. Kiyosaki</li>
                  <li className="para" style={{color:'white'}}>
                    The Little Book That Still Beats the Market by Joel
                    Greenblatt
                  </li>
                  <li className="para" style={{color:'white'}}>
                    The Bogleheads' Guide to Investing by Taylor Larimore, Mel
                    Lindauer, and Michael LeBoeuf
                  </li>
                  <li className="para" style={{color:'white'}}>
                    Investing 101: From Stocks and Bonds to ETFs and IPOs, an
                    Essential Primer on Building a Profitable Portfolio by
                    Michele Cagan
                  </li>
                  <li className="para" style={{color:'white'}}>Stock Investing For Dummies by Paul Mladjenovic</li>
                  <li className="para" style={{color:'white'}}>
                    The Little Book of Common Sense Investing by John C. Bogle
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-md-4 sm-12 mb-5">
              <div className="card p-3" style={{backgroundColor:'rgb(40 97 138)'}}>

              <h2 className="allheading" style={{color:'white'}}>Medium Level</h2>
              <hr />
              <ol>
                <li className="para" style={{color:'white'}}>"A Random Walk Down Wall Street" by Burton G. Malkiel</li>
                <li className="para" style={{color:'white'}}>"Common Stocks and Uncommon Profits" by Philip Fisher</li>
                <li className="para" style={{color:'white'}}>"Market Wizards" by Jack D. Schwager</li>
                <li className="para" style={{color:'white'}}>"The Warren Buffett Way" by Robert G. Hagstrom</li>
                <li className="para" style={{color:'white'}}>
                  "The Essays of Warren Buffett: Lessons for Corporate America"
                  by Warren Buffett
                </li>
                <li className="para" style={{color:'white'}}>"One Up On Wall Street" by Peter Lynch</li>
                <li className="para" style={{color:'white'}}>"Beating the Street" by Peter Lynch</li>

              </ol>
              </div>

            </div>
            <div className="col-md-4 sm-12 mb-5">
              <div className="card p-3" style={{backgroundColor:'#2E4054'}}>
              <h2 className="allheading" style={{color:'white'}}>Advanced Level</h2>
              <hr />
              <ol>
                <li className="para" style={{color:'white'}}>"Security Analysis" by Benjamin Graham and David Dodd</li>
                <li className="para" style={{color:'white'}}>"The Big Short" by Michael Lewis</li>
                <li className="para" style={{color:'white'}}>"Reminiscences of a Stock Operator" by Edwin Lefèvre</li>
                <li className="para" style={{color:'white'}}>
                  "The Black Swan: The Impact of the Highly Improbable" by
                  Nassim Nicholas Taleb
                </li>
                <li className="para" style={{color:'white'}}>
                  "Fooled by Randomness: The Hidden Role of Chance in Life and
                  in the Markets" by Nassim Nicholas Taleb
                </li>
                <li className="para" style={{color:'white'}}>"Flash Boys: A Wall Street Revolt" by Michael Lewis</li>
                <li className="para" style={{color:'white'}}>
                  "When Genius Failed: The Rise and Fall of Long-Term Capital
                  Management" by Roger Lowenstein
                </li>
              </ol>
              </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3" style={{backgroundColor:'#CC274C'}}>
              <h2 className="allheading" style={{color:'white'}}>Advanced Level</h2>
              <hr />
              <ol>
                <li className="para" style={{color:'white'}}>
                  "The Essays of Warren Buffett: Lessons for Corporate America"
                  by Warren Buffett
                </li>
                <li className="para" style={{color:'white'}}>"One Up On Wall Street" by Peter Lynch</li>
                <li className="para" style={{color:'white'}}>"Common Stocks and Uncommon Profits" by Philip Fisher</li>
                <li className="para" style={{color:'white'}}>
                  "The Little Book of Value Investing" by Christopher H. Browne
                </li>
                <li className="para" style={{color:'white'}}>
                  "The Dhandho Investor: The Low-Risk Value Method to High
                  Returns" by Mohnish Pabrai
                </li>
                <li className="para" style={{color:'white'}}>"You Can Be a Stock Market Genius" by Joel Greenblatt</li>
                <li className="para" style={{color:'white'}}>
                  "Value Investing: From Graham to Buffett and Beyond" by Bruce
                  Greenwald
                </li>
              </ol>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default BookRecommended;
