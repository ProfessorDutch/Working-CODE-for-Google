import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';
import DonationPage from './pages/DonationPage';
import CareerPaths from './pages/CareerPaths';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BusinessDirectory from './pages/BusinessDirectory';
import BusinessSupport from './pages/BusinessSupport';
import ClaimBusiness from './pages/ClaimBusiness';
import ChurchFinderPage from './pages/ChurchFinderPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-patriot-cream to-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/careers" element={<CareerPaths />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/business-directory" element={<BusinessDirectory />} />
          <Route path="/business-support" element={<BusinessSupport />} />
          <Route path="/claim-business" element={<ClaimBusiness />} />
          <Route path="/church-finder" element={<ChurchFinderPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}