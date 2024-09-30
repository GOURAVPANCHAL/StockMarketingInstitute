import React, { useEffect } from "react";
import "../Resources/resources.css";
import { Helmet } from "react-helmet";
const BookRecommended = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
     <Helmet>
        <title>Book Recommendations - Trading Smart Edge</title>
        <meta
          name="description"
          content="Discover recommended books for trading at Trading Smart Edge. Explore titles for beginners, intermediates, and advanced traders to enhance your financial knowledge."
        />
        <meta
          name="keywords"
          content="Trading Smart Edge, book recommendations, trading books, beginner trading books, advanced trading books, financial literacy"
        />
        <meta name="author" content="Trading Smart Edge Team" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <p className="head">
          Book <span style={{ color: "green" }}>Recommended</span>
        </p>

        <div className="bookbackground">
          <div className="overlay">
            <div className="container">
              <div className="row mt-5 mb-5">
                <div className="col-md-4 sm-12 mb-5">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "rgb(19 28 35)" }}
                  >
                    <h2 className="allheading" style={{ color: "white" }}>
                      Beginner Level
                    </h2>
                    <hr />
                    <ol>
                      <li class="para" style={{ color: "white" }}>
                        "The Intelligent Investor" by Benjamin Graham
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "A Random Walk Down Wall Street" by Burton G. Malkiel
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "One Up On Wall Street" by Peter Lynch
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Little Book of Common Sense Investing" by John C.
                        Bogle
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Warren Buffett Way" by Robert G. Hagstrom
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Coffeehouse Investor" by Bill Schultheis
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Common Stocks and Uncommon Profits" by Philip Fisher
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Bogleheads' Guide to Investing" by Taylor Larimore,
                        Mel Lindauer, and Michael LeBoeuf
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "How to Make Money in Stocks" by William J. O'Neil
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Only Investment Guide You'll Ever Need" by Andrew
                        Tobias
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-4 sm-12 mb-5">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "rgb(40 97 138)" }}
                  >
                    <h2 className="allheading" style={{ color: "white" }}>
                      Intermediate:
                    </h2>
                    <hr />
                    <ol>
                      <li class="para" style={{ color: "white" }}>
                        "Market Wizards" by Jack D. Schwager
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Reminiscences of a Stock Operator" by Edwin Lefèvre
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Little Book That Still Beats the Market" by Joel
                        Greenblatt
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Security Analysis" by Benjamin Graham and David L. Dodd
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "You Can Be a Stock Market Genius" by Joel Greenblatt
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Big Short" by Michael Lewis
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Against the Gods: The Remarkable Story of Risk" by
                        Peter L. Bernstein
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Thinking, Fast and Slow" by Daniel Kahneman
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Flash Boys" by Michael Lewis
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Irrational Exuberance" by Robert J. Shiller
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-4 sm-12 mb-5">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "#2E4054" }}
                  >
                    <h2 className="allheading" style={{ color: "white" }}>
                      Advanced:
                    </h2>
                    <hr />
                    <ol>
                      <li class="para" style={{ color: "white" }}>
                        "The Alchemy of Finance" by George Soros
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "When Genius Failed: The Rise and Fall of Long-Term
                        Capital Management" by Roger Lowenstein
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Fooled by Randomness" by Nassim Nicholas Taleb
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Black Swan" by Nassim Nicholas Taleb
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Misbehavior of Markets" by Benoit B. Mandelbrot and
                        Richard L. Hudson
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Quantitative Value" by Wesley R. Gray and Tobias E.
                        Carlisle
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Adaptive Markets: Financial Evolution at the Speed of
                        Thought" by Andrew W. Lo
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The (Mis)Behavior of Markets: A Fractal View of Risk,
                        Ruin, and Reward" by Benoit Mandelbrot
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Capital Ideas: The Improbable Origins of Modern Wall
                        Street" by Peter L. Bernstein
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Man Who Solved the Market: How Jim Simons Launched
                        the Quant Revolution" by Gregory Zuckerman
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "#CC274C" }}
                  >
                    <h2 className="allheading" style={{ color: "white" }}>
                      Fundamental Analysis:
                    </h2>
                    <hr />
                    <ol>
                      <li class="para" style={{ color: "white" }}>
                        "Financial Statements: A Step-by-Step Guide to
                        Understanding and Creating Financial Reports" by Thomas
                        Ittelson
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Financial Shenanigans: How to Detect Accounting
                        Gimmicks & Fraud in Financial Reports" by Howard Schilit
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Interpretation of Financial Statements" by Benjamin
                        Graham and Spencer B. Meredith
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Valuation: Measuring and Managing the Value of
                        Companies" by McKinsey & Company Inc.
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Investment Valuation: Tools and Techniques for
                        Determining the Value of Any Asset" by Aswath Damodaran
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Security Analysis on Wall Street: A Comprehensive Guide
                        to Today’s Valuation Methods" by Jeffrey C. Hooke
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Financial Intelligence: A Manager's Guide to Knowing
                        What the Numbers Really Mean" by Karen Berman and Joe
                        Knight
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Earnings Magic and the Unbalance Sheet: The Search for
                        Financial Reality" by Gary Giroux
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "Accounting for Value" by Stephen Penman
                      </li>
                      <li class="para" style={{ color: "white" }}>
                        "The Art of Value Investing: How the World's Best
                        Investors Beat the Market" by John Heins and Whitney
                        Tilson
                      </li>
                    </ol>
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

export default BookRecommended;
