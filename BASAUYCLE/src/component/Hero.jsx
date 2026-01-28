import Button from './Button';
import SearchBar from './SearchBar';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-image-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          PREMIUM MARKETPLACE
        </div>

        <h1 className="hero-title">
          Find Your Next{' '}
          <span className="hero-title-highlight">Peak Performance.</span>
        </h1>

        <p className="hero-description">
          The most trusted marketplace for modern cyclists. Buy, sell, and get certified expert inspections for high-performance bicycles.
        </p>

        <div className="hero-buttons">
          <Button 
            variant="primary"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
            iconPosition="right"
            className="hero-btn-primary"
          >
            Explore Marketplace
          </Button>
          <Button 
            variant="dark"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            className="hero-btn-secondary"
          >
            Certified Pre-Owned
          </Button>
        </div>
      </div>

      <div className="hero-search-wrapper">
        <SearchBar />
      </div>
    </section>
  );
}
