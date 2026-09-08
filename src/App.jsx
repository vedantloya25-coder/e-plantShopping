import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './redux/CartSlice';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './pages/AboutUs';
import { Sprout, ArrowRight, ShieldCheck, Truck, Sparkles, ShoppingCart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';

// ─── Landing Page (required: company name "Welcome to Paradise Nursery" & Get Started button) ───
function LandingPage() {
  const navigate = useNavigate();
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className="landing-page-container">
      {/* Landing Navbar */}
      <header className="landing-header">
        <nav className="landing-nav container">
          <Link to="/" className="landing-brand" id="landing-brand-logo">
            <div className="landing-logo-circle">
              <Sprout size={28} className="landing-logo-icon" />
            </div>
            <div className="landing-brand-names">
              <span className="landing-company-name">Paradise Nursery</span>
              <span className="landing-tagline">Botanical Sanctuary</span>
            </div>
          </Link>

          <div className="landing-nav-actions">
            <Link to="/about" className="landing-nav-link" id="landing-about-link">About Us</Link>
            <Link to="/plants" className="landing-nav-link" id="landing-plants-link">Plants</Link>
            <Link to="/cart" className="landing-cart-pill" id="landing-cart-link">
              <ShoppingCart size={18} />
              <span>Cart ({totalQuantity})</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section — background-image is in App.css (.landing-hero-section) */}
      <main className="landing-hero-section" id="landing-hero">
        <div className="landing-hero-overlay">
          <div className="landing-hero-content container">

            {/* Required: Company Name — "Welcome to Paradise Nursery" */}
            <div className="hero-badge animate-fade-in">
              <Sparkles size={16} className="badge-sparkle" />
              <span>Welcome to Paradise Nursery</span>
            </div>

            <h1 className="hero-main-title animate-slide-up">
              Where Greenery Meets <span className="highlight-text">Serenity</span>
            </h1>

            {/* Company Description */}
            <p className="hero-description animate-slide-up delay-1">
              At <strong>Paradise Nursery</strong>, we cultivate an exquisite selection of premium
              houseplants, drought-tolerant succulents, and NASA-grade air-purifying greenery
              designed to breathe life, color, and tranquility into your living and working spaces.
            </p>

            {/* Required: "Get Started" button — navigates to product listing */}
            <div className="hero-cta-group animate-slide-up delay-2">
              <button
                type="button"
                id="get-started-btn"
                className="btn-get-started"
                onClick={() => navigate('/plants')}
                aria-label="Get Started and browse plants"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="btn-arrow-icon" />
              </button>

              <Link to="/about" className="btn-learn-more" id="learn-more-btn">
                <span>Learn Our Story</span>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="hero-features-strip animate-slide-up delay-3">
              <div className="feature-pill">
                <Leaf size={18} className="pill-icon" />
                <span>18+ Hand-Grown Varieties</span>
              </div>
              <div className="feature-pill">
                <ShieldCheck size={18} className="pill-icon" />
                <span>30-Day Healthy Plant Guarantee</span>
              </div>
              <div className="feature-pill">
                <Truck size={18} className="pill-icon" />
                <span>Safe Eco-Friendly Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── App Root with Routes ────────────────────────────────────────────────────
function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
