import { Box } from '@mui/material';
import Header from '../../component/header';
import Hero from '../../component/Hero';
import CategoryFilter from '../../component/CategoryFilter';
import FeaturedBikes from '../../component/FeaturedBikes';
import Features from '../../component/Features';
import CTA from '../../component/CTA';
import Footer from '../../component/footer';

export default function Home() {
  const navLinks = [
    { label: 'Browse', href: '#' },
    { label: 'Inspections', href: '#' },
    { label: 'How It Works', href: '#' },
    { label: 'About', href: '#' }
  ];

  return (
    <Box component="main" sx={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header 
        navLinks={navLinks}
        showSearch={false}
        showAvatar={true}
        showSellButton={true}
        showLogin={true}
      />
      <Hero />
      <CategoryFilter />
      <FeaturedBikes />
      <Features />
      <CTA />
      <Footer 
        showSubscribe={true}
        companyLinks={[
          { label: 'About Us', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Help Center', href: '#' },
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' }
        ]}
        resourcesLinks={[
          { label: 'Buyer Protection', href: '#' },
          { label: 'Seller Guide', href: '#' },
          { label: 'Trust & Safety', href: '#' }
        ]}
      />
    </Box>
  );
}
