export default function BikeCard({ bike }) {
  return (
    <article className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={bike.image} 
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {bike.badge && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-semibold text-white ${
            bike.badge === 'NEW ARRIVAL' ? 'bg-green-500' :
            bike.badge === 'INSPECTED' ? 'bg-emerald-500' :
            bike.badge === 'TOP RATED' ? 'bg-emerald-400' : 'bg-gray-900'
          }`}>
            {bike.badge}
          </div>
        )}
        <button 
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Add to favorites"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {bike.category}
          </span>
        </div>

        <div className="mb-3">
          <span className="text-2xl font-bold text-gray-900">{bike.price}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
          {bike.name}
        </h3>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {bike.specs.weight && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span>{bike.specs.weight}</span>
            </div>
          )}
          {bike.specs.groupset && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{bike.specs.groupset}</span>
            </div>
          )}
          {bike.specs.motorPower && (
            <div className="flex items-center gap-1.5">
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
