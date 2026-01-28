import './SearchBar.css';

export default function SearchBar() {
  const bikeTypes = ['All Types', 'Mountain', 'Road', 'Gravel', 'E-Bikes'];
  const priceRanges = ['Any Price', 'Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', 'Over $10,000'];

  return (
    <div className="search-bar">
      <div className="search-bar-grid">
        <div className="search-bar-input-wrapper">
          <div className="search-bar-icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="search-bar-label">SEARCH ANYTHING</div>
          <input
            type="text"
            placeholder="Brand or model..."
            className="search-bar-input"
          />
        </div>

        <div className="search-bar-select-wrapper">
          <div className="search-bar-icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="search-bar-label">BIKE TYPE</div>
          <select className="search-bar-select">
            {bikeTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="search-bar-select-wrapper">
          <div className="search-bar-icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="search-bar-label">PRICE RANGE</div>
          <select className="search-bar-select">
            {priceRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <button className="search-bar-button">
          Find My Ride
        </button>
      </div>
    </div>
  );
}
