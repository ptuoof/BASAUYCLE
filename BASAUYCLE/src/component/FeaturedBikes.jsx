import BikeCard from './BikeCard';
import bikeTarmac from '../assets/bike-tarmac-sl7.png';

const featuredBikes = [
  {
    id: 1,
    name: 'Specialized Tarmac SL7',
    price: '$4,250',
    category: 'ROAD / CARBON',
    image: bikeTarmac,
    badge: 'NEW ARRIVAL',
    specs: {
      weight: '7.2kg',
      groupset: 'SRAM Force'
    }
  },
  {
    id: 2,
    name: 'Santa Cruz Nomad CC',
    price: '$5,800',
    category: 'MTB / FULL SUSPENSION',
    image: bikeTarmac,
    badge: 'INSPECTED',
    specs: {
      weight: '13.5kg',
      groupset: 'FOX Factory'
    }
  },
  {
    id: 3,
    name: 'Canyon Grizl CF SL',
    price: '$2,900',
    category: 'GRAVEL / ADVENTURE',
    image: bikeTarmac,
    specs: {
      weight: '9.8kg',
      groupset: 'Shimano GRX'
    }
  },
  {
    id: 4,
    name: 'Specialized Turbo Levo',
    price: '$8,100',
    category: 'E-MTB / ELECTRIC',
    image: bikeTarmac,
    badge: 'TOP RATED',
    specs: {
      weight: '22.5kg',
      groupset: 'Brose 2.2',
      motorPower: '700Wh'
    }
  }
];

export default function FeaturedBikes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Bikes
            </h2>
            <p className="text-gray-600">
              The best deals curated by our experts this week.
            </p>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-emerald-500 font-semibold hover:text-emerald-600 transition-colors mt-4 md:mt-0"
          >
            View Gallery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
}
