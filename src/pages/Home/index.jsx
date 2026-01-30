import { Box } from "@mui/material";
import Header from "../../component/header";
import Hero from "../../component/hero";
import CategoryFilter from "../../component/category/CategoryFilter";
import FeaturedBikes from "../../component/features/FeaturedBikes";
import Features from "../../component/features/Features";
import CTA from "../../component/category/CTA";
import Footer from "../../component/footer";

export default function Home() {
  const navLinks = [
    { label: "Browse", href: "#" },
    { label: "Inspections", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <Box
      component="main"
      sx={{ minHeight: "100vh", backgroundColor: "#f9fafa" }}
    >
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
        showSubscribe={false}
        companyLinks={[
          { label: "About Us", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Help Center", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ]}
      />
    </Box>
  );
}
