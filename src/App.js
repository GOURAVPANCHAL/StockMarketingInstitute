import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Navbar/Contact";
import TheInstitute from "./Components/Navbar/TheInstitute/TheInstitute";
import Resources from "./Components/Navbar/Resources";
import Blog from "./Components/Navbar/Blog";
import Franchise from "./Components/Navbar/Franchise";
import Home from "./Components/Home/Home";
import AboutInstitute from "./Components/Navbar/TheInstitute/AboutInstitute";
import Chairmen from "./Components/Navbar/TheInstitute/Chairmen";
import AboutHemant from "./Components/Navbar/TheInstitute/AboutHemant";
import Placement from "./Components/Navbar/TheInstitute/Placement";
import TrainingSeminar from "./Components/Navbar/TheInstitute/TrainingSeminar";
import Corporate from "./Components/Navbar/TheInstitute/Corporate";
import AdvanceDiplomaFinancial from "./Components/Navbar/ClassromBootcamp.jsx/AdvanceDiplomaFinancial";
import ProfessionalTraderCourse from "./Components/Navbar/ClassromBootcamp.jsx/ProfessionalTraderCourse";
import ProfessionalInvestorCourse from "./Components/Navbar/ClassromBootcamp.jsx/ProfessionalInvestorCourse";
import AdvanceTechnicalCourse from "./Components/Navbar/ClassromBootcamp.jsx/AdvanceTechnicalCourse";
import OptionTradingCourse from "./Components/Navbar/ClassromBootcamp.jsx/OptionTradingCourse";
import FundamentalAnalysis from "./Components/Navbar/ClassromBootcamp.jsx/FundamentalAnalysis";
import IntradayTradingSetup from "./Components/Navbar/ClassromBootcamp.jsx/IntradayTradingSetup";
import EquityMarketTrader from "./Components/Navbar/ClassromBootcamp.jsx/EquityMarketTrader";
import DiplomaFinancial from "./Components/Navbar/ClassromBootcamp.jsx/DiplomaFinancial";
import NCFMCapitalMarketModule from "./Components/Navbar/ClassromBootcamp.jsx/NCFMCapitalMarketModule";
import NISMSeriesVIIIDerivativesMarket from "./Components/Navbar/ClassromBootcamp.jsx/NISMSeriesVIIIDerivativesMarket";
import NISMSeriesICurrency from "./Components/Navbar/ClassromBootcamp.jsx/NISMSeriesICurrency";
import NISMSeriesXXVResearch from "./Components/Navbar/ClassromBootcamp.jsx/NISMSeriesXXVResearch";
import AdmissionProcedure from "./Components/Resources/AdmissionProcedure";
import Testimonial from "./Components/testimonial/Testimonial";
import CareerOpportunities from "./Components/Resources/CareerOpportunities";
import PlacementPartners from "./Components/Resources/PlacementPartners";
import BookRecommended from "./Components/Resources/BookRecommended";
import LifeAtTSE from "./Components/Resources/LifeAtTse";
import Gallery from "./Components/Resources/Gallery";
import Auth from "./Components/Auth/Auth";
import UpdateBlog from "./Components/Auth/UpdateBlog";
import CreateBlog from "./Components/Auth/CreateBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/institute" element={<TheInstitute />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/about-institute" element={<AboutInstitute />} />
          <Route path="/chairmen-message" element={<Chairmen />} />
          <Route path="/about-hemant-sharma" element={<AboutHemant />} />
          <Route path="/placement-story" element={<Placement />} />
          <Route path="/training-seminar" element={<TrainingSeminar />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route
            path="/Professional-Trader-Course"
            element={<ProfessionalTraderCourse />}
          />
          <Route
            path="/Professional-Investor-Course"
            element={<ProfessionalInvestorCourse />}
          />
          <Route
            path="/Advance-Technical-Course"
            element={<AdvanceTechnicalCourse />}
          />
          <Route
            path="/Option-Trading-Course"
            element={<OptionTradingCourse />}
          />
          <Route
            path="/Fundamental-Analysis"
            element={<FundamentalAnalysis />}
          />
          <Route
            path="/Intraday-Trading-Setup"
            element={<IntradayTradingSetup />}
          />
          <Route
            path="/Equity-Market-Trader"
            element={<EquityMarketTrader />}
          />
          <Route path="/Diploma-Financial" element={<DiplomaFinancial />} />
          <Route
            path="/Advance-Diploma-Financial"
            element={<AdvanceDiplomaFinancial />}
          />
          <Route
            path="/NCFM-Capital-Market-Module"
            element={<NCFMCapitalMarketModule />}
          />
          <Route
            path="/NISM-Series-VIII-Derivatives"
            element={<NISMSeriesVIIIDerivativesMarket />}
          />
          <Route
            path="/NISM-Series-I-Currency-Market"
            element={<NISMSeriesICurrency />}
          />
          <Route
            path="/NISM-Series-XXV-Research-Analyst"
            element={<NISMSeriesXXVResearch />}
          />
          <Route path="/admission-procedure" element={<AdmissionProcedure />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route
            path="/career_opportunities"
            element={<CareerOpportunities />}
          />
          <Route path="/placement-partner" element={<PlacementPartners />} />
          <Route path="/book-recommended" element={<BookRecommended />} />
          <Route path="/life-at-tse" element={<LifeAtTSE />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin/auth" element={<Auth />} />
          <Route path="/admin/auth/update-blog" element={<UpdateBlog />} />
          <Route path="/admin/auth/create-blog" element={<CreateBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
