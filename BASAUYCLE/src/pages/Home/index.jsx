import Header from '../../component/header';
import Hero from '../../component/Hero';
import CategoryFilter from '../../component/CategoryFilter';
import FeaturedBikes from '../../component/FeaturedBikes';
import Features from '../../component/Features';
import CTA from '../../component/CTA';
import Footer from '../../component/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryFilter />
      <FeaturedBikes />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
