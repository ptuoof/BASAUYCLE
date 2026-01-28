import Button from './Button';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        <div className="w-full h-full bg-gray-900"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gray-900/95 backdrop-blur-sm shadow-2xl p-8 md:p-12 lg:p-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wide">
              Premium Marketplace
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Next{' '}
            <span className="text-emerald-400">Peak Performance</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            The most trusted marketplace for modern cyclists. Buy, sell, and get certified expert inspections for high-performance bicycles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              variant="primary"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
              iconPosition="right"
              className="text-base px-8 py-4"
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
              className="text-base px-8 py-4"
            >
              Certified Pre-Owned
            </Button>
          </div>

          <SearchBar />
        </div>
      </div>
    </section>
  );
}
