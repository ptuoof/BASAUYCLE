import Button from './Button';

export default function CTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-500 shadow-xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to upgrade your ride? Sell your bike in minutes.
          </h2>
          <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
            List your bike for free and reach thousands of verified buyers in our premium cycling community.
          </p>
          <Button 
            variant="dark"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
            className="text-base px-8 py-4"
          >
            List Your Bike Now
          </Button>
        </div>
      </div>
    </section>
  );
}
