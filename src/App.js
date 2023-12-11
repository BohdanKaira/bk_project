import './scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Default from './layouts/default';
import Home from './pages/Home';
import About from './pages/About';
import PricingPlan from './pages/PricingPlan'
import FAQ from './pages/FAQ'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/Contact';
import Article from './pages/Article';
import ServicePage from './pages/Service';
import DetailService from './pages/DetailService';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<Default />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={<ServicePage />} />
            <Route path='service/detail-service' element={<DetailService />} />
            <Route path='pricing-plan' element={<PricingPlan />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='terms-conditions' element={<TermsAndConditions />} />
            <Route path='privacy-police' element={<PrivacyPolicy />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:hash' element={<Article />} />
            <Route path='team' element={<OurTeam />} />
            <Route path='contact' element={<ContactUs />} />
          </Route>
        </Routes>
      </div>  
    </div>
  );
}

export default App;
