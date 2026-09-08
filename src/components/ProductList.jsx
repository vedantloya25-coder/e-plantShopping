import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import { plantsData, plantCategories } from '../data/plants';
import { Sparkles, Filter, Leaf } from 'lucide-react';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter categories if user selects a tab filter, while preserving default grouped view
  const filteredCategories = selectedCategory === 'All'
    ? plantCategories
    : plantCategories.filter((cat) => cat === selectedCategory);

  return (
    <div className="product-list-page">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="product-list-main container">
        {/* Header Banner */}
        <section className="catalog-hero">
          <div className="catalog-hero-content">
            <div className="hero-pill">
              <Sparkles size={16} />
              <span>Handpicked Botanicals</span>
            </div>
            <h1 className="catalog-title">Explore Our Plant Sanctuary</h1>
            <p className="catalog-subtitle">
              Bring tranquility, fresh oxygen, and natural elegance to your home with our curated, sustainably nurtured houseplants.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filter-tabs">
            <button
              type="button"
              className={`filter-tab ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Plants ({plantsData.length})
            </button>
            {plantCategories.map((category) => {
              const count = plantsData.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories & Product Cards Grid */}
        <div className="categories-wrapper">
          {filteredCategories.map((category) => {
            const plantsInCategory = plantsData.filter((plant) => plant.category === category);

            return (
              <section
                key={category}
                className="category-section"
                id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Category Header */}
                <div className="category-header">
                  <div className="category-header-title">
                    <Leaf className="category-icon" size={24} />
                    <h2 className="category-name">{category}</h2>
                  </div>
                  <span className="category-count">{plantsInCategory.length} Varieties Available</span>
                </div>

                {/* Plant Cards Grid */}
                <div className="plants-grid">
                  {plantsInCategory.map((plant) => (
                    <ProductCard key={plant.id} plant={plant} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
