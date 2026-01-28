import Button from './Button';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-background-shape"></div>
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to upgrade your ride? <span className="cta-title-highlight">Sell your bike in minutes.</span>
          </h2>
          <p className="cta-description">
            List your bike for free and reach thousands of verified buyers in our premium cycling community.
          </p>
          <Button 
            variant="dark"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
            className="cta-button"
          >
            List Your Bike Now
          </Button>
        </div>
      </div>
    </section>
  );
}
