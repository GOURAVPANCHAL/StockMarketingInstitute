import React from "react";
import "../../images/career.jpg";
import market from "../../images/career1.jpg";
import dealer from "../../images/dealer.jpg";
import trader from "../../images/trader.jpg";
import consultant from "../../images/consultant.avif";
import financial from "../../images/financial.jpg";
import fundamental from "../../images/fundamental.jpg";
import risk from "../../images/risk.avif";
import equity from "../../images/equity.avif"
import banker from "../../images/banker.avif"
import technical from "../../images/technical.jpg"


const CareerOpportunities = () => {
  const content = [
    {
      image: market,
      name: "Market research analyst",
      title: "National average salary: ₹ 4,47,600 per year",
      desc: "Market research analysts are essential professionals within companies, tasked with gathering and organizing consumer and competitor data. They interpret this information to offer valuable insights to their clients or organizations. In the context of the stock market, these analysts delve into the historical performance of companies or their stocks, aiding potential investors in making informed decisions. Their research also supports companies in areas such as expansion and Initial Public Offerings (IPOs). Given that stocks operate similarly to products or commodities, their performance is influenced by supply and demand dynamics. Therefore, market research analysts leverage their expertise to analyze these market forces and devise tailored investment portfolios and financial strategies to navigate market conditions effectively.",
    },
    {
      image: dealer,
      name: "Dealer",
      title: "National average salary: ₹ 2,93,855 per year",
      desc: "Dealers engage in the buying, holding, and selling of shares and equity on stock exchanges. Their objective is to acquire stock before demand increases and then sell it to interested buyers at higher prices to generate profit. Unlike brokers who facilitate trades for a commission, dealers execute trades for their own financial gain and operate as a business entity, typically at a larger scale.",
      desc1:
        "For instance, a trader might purchase 100 shares of a stock and sell them individually for a modest profit that they might reinvest or withdraw. In contrast, a dealer might acquire a significantly larger volume of stock, such as 10,000 shares, and conduct transactions with multiple traders and buyers to achieve a substantially higher profit margin. A significant portion of these earnings often goes towards further investments and equity procurement.",
    },
    {
      image: trader,
      name: "Trader",
      title: "National average salary: ₹2,82,428 per year",
      desc: "In the realm of the stock market, traders are individuals who actively buy and sell equities and shares to pursue financial gains. Their approach involves strategic planning to identify the best times to enter and exit positions, enabling them to execute transactions that aim to maximize profits. Traders capitalize on short-term fluctuations in the market, distinguishing their practice from investors who generally use larger initial capital and follow long-term financial strategies to maximize returns. While trading offers substantial earning potential, it also entails significant risk.",
    },
    {
      image: consultant,
      name: "Investment consultant",
      title: "National average salary: ₹ 3,60,462 per year",
      desc: `Investment consultants leverage their expertise in equity markets and trends to assist clients in making sound investment decisions. Depending on the investment strategy, investors anticipate either short-term gains or long-term financial benefits. Investment consultants carefully assess their clients' financial objectives and provide crucial insights into stock prices, performance, company reputation, and historical data. They play a pivotal role in enhancing clients' comprehension of their financial circumstances and the potential outcomes of their choices. These professionals operate independently or collaborate with financial institutions such as banks to evaluate and refine clients' investment plans.`,
    },
    {
      image: financial,
      name: "Financial analyst",
      title: "National average salary: ₹ 4,13,194 per year",
      desc: `Financial analysts are experts who gather, structure, and analyze financial data to offer forecasts, monitor metrics, and develop simulations or financial models. Companies frequently rely on analysts to support significant financial decisions. Analysts deliver insights and interpretations to aid clients in gaining a comprehensive understanding of market conditions before committing to substantial investments. Professionals in this field operate either independently or as integral members of a company's regular staff.`,
    },
    {
      image: fundamental,
      name: "Fundamental analyst",
      title: "National average salary: ₹ 4,73,606 per year",
      desc: "Primary duties: Fundamental analysts are experts who conduct comprehensive research on companies, stocks, or markets to uncover their intrinsic value and assess the risks involved in financial decisions and transactions. They examine a variety of factors and indicators to produce these insights, including financial health, growth potential, overall capital structure, return on equity, and profit margins.",
    },
    {
      image: risk,
      name: "Risk analyst",
      title: "National average salary: ₹ 5,70,022 per year",
      desc: `Risk analysts play a pivotal role in assisting companies and clients in evaluating the financial and temporal implications of significant business decisions. They conduct thorough analyses of market trends and scrutinize clients' financial records to assess associated risks. Within the stock market, their expertise becomes particularly crucial during scenarios involving substantial alterations to portfolios or holdings by companies or investors. Risk analysts strive to provide an objective assessment, meticulously weighing the advantages and disadvantages of each business situation before offering informed advice.`,
    },
    {
      image: equity,
      name: "Equity analyst",
      title: "National average salary: ₹ 5,46,744 per year",
      desc: `Primary duties: Equity analysts assess a company or stock's performance history and analyse market trends to predict its performance for future periods. They use their specialised knowledge and understanding of finance to help clients make informed decisions relating to transactions and investments. They may also periodically track indicators to monitor the performance of stocks that their companies or clients hold. This job role involves heavy research and requires advanced analytical skills and business intelligence, along with financial and legal literacy.`,
    },
    {
      image: banker,
      name: "Investment banker",
      title: "National average salary: ₹ 4,91,064 per year",
      desc: "Primary duties: Investment banking is a subset of banking operations that enables companies or individual investors to raise money and resources for business activities and increase capital. Professionals in this domain are experts in economics and finance and devise methods and strategies to help clients meet their financial goals. They may act as a consultant and provide advice, or may even stand in as an intermediary to facilitate transactions following a systematic pre-determined strategy.",
      desc1: "Read more: What Is an Investment Banker?",
    },
    {
      image: technical,
      name: "Technical analyst",
      title: "National average salary: ₹ 7,23,725 per year",
      desc: "Primary duties: A technical analyst is a professional who uses statistical methods to evaluate investment decisions by analyzing market data and technical indicators. They aim to understand market behavior and price movements through raw data and often provide advisory services to clients. The technical indicators they employ are tools and methodologies that examine various aspects of a market or stock, such as volatility, strength, demand, and potential. Notable indicators include Bollinger Bands, Moving Average Convergence Divergence (MACD), Money Flow Index (MFI), and Relative Strength Index (RSI).",
      desc1: `A career in the stock market offers both significant rewards and inherent risks. Stock markets are inherently volatile and unpredictable environments. To excel in this field, a strong grasp of economics and finance concepts is essential, along with soft skills such as patience and determination.
In this industry, expertise, skill, and experience are often more valuable than academic credentials. Professionals with a solid track record and relevant work experience are better positioned to secure high-level positions in reputable companies. Beyond corporate roles, the stock market also presents numerous opportunities for independent work and entrepreneurship. The advent of the internet and online trading platforms has democratized the market, leading to a substantial increase in the number of participants and stakeholders. Here are some key employment sectors for stock market professionals:`,
      links1: "Financial consultancies",
      links2: "Insurance companies",
      links3: "Research institutions",
      links4: "Media organizations",
      links5: "Stockbroking firms",
      links6: "Mutual and pension fund providers",
      links7: "Multinational corporations",
      links8: "Banks and other financial institutions",
      links9: "Independent trading",
      desc2:
        "These sectors provide diverse career paths, each with its unique challenges and opportunities",
    },
  ];
  return (
    <div>
      <div className="careerBg">
        <div className="overlay">
          <div className="container">
            <p className="imageheading">
              What Are The <span style={{ color: "#4e7733", fontWeight: "700" }}>Career Options</span> In Stock
              <span style={{ color: "#4e7733", fontWeight: "700" }}> Trading?
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-5 mb-5">
          <p className="para">
            A stockbroker is a well-known profession within the stock market,
            where experts use their market knowledge to aid clients and
            facilitate transactions. Aside from brokerage, there are numerous
            other lucrative career paths available in stock trading. These
            include roles in data analytics, consultancy, research, and
            portfolio management services. The qualifications, skills, and
            on-the-job training required for these positions vary significantly.
          </p>
          <p className="para">
            For example, research professionals gather and synthesize
            information to draw conclusions and insights. Analysts interpret
            stock market data to provide valuable perspectives on market
            performance and associated risks. Administrative professionals
            oversee hedge funds and mutual funds, implementing financial
            strategies to enhance client portfolio performance.
          </p>
          <p className="para">
            Consultants engage regularly with clients and peers to ensure they
            are well-informed about industry developments and opportunities.
          </p>
          <p className="para">
            Overall, these roles offer diverse opportunities for professionals
            in the stock market, each requiring specialized skills and expertise
            to navigate the complexities of financial markets effectively.
          </p>
        </div>

        <div>
          <div className="row" style={{alignItems:'flex-start'}} >
            {content.map((item) => (
              <>
                <div className="col-md-5 mb-5">
                  <img src={item.image} width={"100%"} height={'100%'} alt="" />
                </div>
                <div className="col-md-7 mb-5">
                  <p className="allheading" style={{textAlign:'start'}}>{item.name}</p>
                  <p className="heading">{item.title}</p>
                  <p className="para">{item.desc}</p>
                  <p className="para">{item.desc1}</p>
                  <p className="para">{item.links2}</p>
                  <p className="para">{item.links3}</p>
                  <p className="para">{item.links4}</p>
                  <p className="para">{item.links5}</p>
                  <p className="para">{item.links6}</p>
                  <p className="para">{item.links7}</p>
                  <p className="para">{item.links8}</p>
                  <p className="para">{item.links9}</p>
                  <p className="para">{item.desc2}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunities;
