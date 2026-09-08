import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  Heart,
  ShieldCheck,
  Truck,
  Leaf,
  Sparkles,
  Sun,
  Award,
  ArrowRight
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="about-page-wrapper">
      <Navbar />

      <main className="about-main container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-pill">
            <Leaf size={16} />
            <span>Rooted in Passion</span>
          </div>
          <h1 className="about-title">About Paradise Nursery</h1>
          <p className="about-lead">
            Welcome to Paradise Nursery, your premier botanical sanctuary dedicated to infusing every home, workspace, and life with vibrant, healthy, and mood-boosting greenery.
          </p>
        </section>

        {/* Company Story & Mission */}
        <section className="about-grid-section">
          <div className="about-card story-card">
            <div className="about-card-icon-bubble">
              <Sun size={28} />
            </div>
            <h2>Our Story</h2>
            <p>
              Founded in 2020 by a devoted team of botanists, horticulturists, and interior plant lovers, Paradise Nursery originated from a simple yet profound realization: modern indoor living deserves deeper reconnection with the natural world.
            </p>
            <p>
              What started as an artisan greenhouse has blossomed into a cherished destination for plant parents across the nation. Every specimen in our nursery is tenderly nurtured under optimal lighting, temperature, and organic soil conditions until it is robust and ready to flourish in your care.
            </p>
          </div>

          <div className="about-card mission-card">
            <div className="about-card-icon-bubble">
              <Heart size={28} />
            </div>
            <h2>Our Mission</h2>
            <p>
              At Paradise Nursery, our mission is to make plant parenthood accessible, uplifting, and joyful for everyone—from first-time green thumbs to seasoned botanical collectors.
            </p>
            <p>
              We are committed to eco-friendly propagation practices, zero harmful chemical pesticides, sustainable packaging, and delivering hand-selected indoor flora that elevate well-being, purify indoor air, and spark serenity every single day.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="about-offerings-section">
          <h2 className="section-heading">What Paradise Nursery Offers</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-icon">
                <Leaf size={24} />
              </div>
              <h3>Curated Plant Varieties</h3>
              <p>
                From striking statement Indoor Monsteras to resilient Succulents and NASA-grade Air Purifying plants, we offer varieties suited for every corner and light condition.
              </p>
            </div>

            <div className="offering-card">
              <div className="offering-icon">
                <Truck size={24} />
              </div>
              <h3>Safe & Secure Delivery</h3>
              <p>
                Proprietary eco-cushioned packaging designed specifically to safeguard root systems, soil, and delicate foliage during door-to-door transit.
              </p>
            </div>

            <div className="offering-card">
              <div className="offering-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>30-Day Guarantee</h3>
              <p>
                Every plant arrives happy, healthy, and thriving. If your botanical companion shows any distress within 30 days, our experts will make it right.
              </p>
            </div>

            <div className="offering-card">
              <div className="offering-icon">
                <Award size={24} />
              </div>
              <h3>Lifetime Plant Care Support</h3>
              <p>
                Detailed care guides with watering schedules, light requirements, repotting tips, and direct access to our in-house horticulturalists.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us-section">
          <div className="why-choose-card">
            <div className="why-content">
              <h2>Why Choose Paradise Nursery?</h2>
              <ul className="why-list">
                <li>
                  <strong>100% Healthy & Pest-Free Guarantee:</strong> Hand-inspected before shipment to ensure premium vigor and leaf health.
                </li>
                <li>
                  <strong>Sustainably Grown:</strong> Nurtured with organic soil blends and energy-efficient climate-controlled greenhousing.
                </li>
                <li>
                  <strong>Beginner Friendly:</strong> Clearly labeled light, moisture, and pet-safety ratings on every plant profile.
                </li>
                <li>
                  <strong>Seamless Shopping:</strong> Instant cart updates, clear transparent pricing, and fast customer assistance.
                </li>
              </ul>

              <div className="why-cta-wrapper">
                <Link to="/plants" className="btn-start-shopping">
                  <span>Explore Plant Collection</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
