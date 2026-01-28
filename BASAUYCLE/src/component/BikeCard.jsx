import './BikeCard.css';

export default function BikeCard({ bike }) {
  return (
    <article className="bike-card">
      <div className="bike-card-image-wrapper">
        <img 
          src={bike.image} 
          alt={bike.name}
          className="bike-card-image"
        />
        {bike.badge && (
          <div className={`bike-card-badge ${
            bike.badge === 'NEW ARRIVAL' ? 'bike-card-badge-new' :
            bike.badge === 'INSPECTED' ? 'bike-card-badge-inspected' :
            bike.badge === 'TOP RATED' ? 'bike-card-badge-rated' : ''
          }`}>
            {bike.badge}
          </div>
        )}
        <button 
          className="bike-card-favorite"
          aria-label="Add to favorites"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="bike-card-content">
        <div className="bike-card-category">
          {bike.category}
        </div>

        <div className="bike-card-price">
          {bike.price}
        </div>

        <h3 className="bike-card-name">
          {bike.name}
        </h3>

        <div className="bike-card-specs">
          {bike.specs.weight && (
            <div className="bike-card-spec">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span>{bike.specs.weight}</span>
            </div>
          )}
          {bike.specs.groupset && (
            <div className="bike-card-spec">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{bike.specs.groupset}</span>
            </div>
          )}
          {bike.specs.motorPower && (
            <div className="bike-card-spec">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{bike.specs.motorPower}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
