import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Slider,
  Switch,
  Checkbox,
} from "@mui/material";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BikeCard from "../../components/card";
import {
  marketplaceBikes,
  TOTAL_MARKETPLACE_COUNT,
} from "../../data/marketplaceBikes";
import { usePostings } from "../../contexts/PostingContext";
import { POSTING_STATUS } from "../../constants/postingStatus";
import defaultBikeImage from "../../assets/bike-tarmac-sl7.png";
import "./index.css";

/** Convert a posting (from Post form) to bike shape for BikeCard */
function postingToBike(p) {
  return {
    id: p.id,
    name: p.bikeName || "Untitled",
    price: p.priceDisplay || (p.price ? `$${p.price}` : "$0"),
    category: p.category || "BIKE",
    image: p.imageUrl || defaultBikeImage,
    badge: p.status === POSTING_STATUS.ACTIVE ? "VERIFIED" : "PENDING",
    specs: {},
    sellerId: p.sellerId ?? null,
  };
}

const BIKE_TYPES = [
  { id: "all", label: "All Bikes", icon: "🚴" },
  { id: "road", label: "Road", icon: "🛣️" },
  { id: "mountain", label: "Mountain", icon: "⛰️" },
  { id: "e-bikes", label: "E-Bikes", icon: "⚡" },
];

const FRAME_SIZES = ["48cm", "52cm", "54cm", "56cm", "58cm"];
const BRANDS = [
  { id: "specialized", label: "Specialized" },
  { id: "trek", label: "Trek" },
  { id: "giant", label: "Giant" },
];

export default function Marketplace() {
  const { postings } = usePostings();
  const [bikeType, setBikeType] = useState("all");
  const [priceRange, setPriceRange] = useState([450, 2800]);
  const [verifiedOnly, setVerifiedOnly] = useState(true);
  const [frameSize, setFrameSize] = useState("52cm");
  const [brands, setBrands] = useState({ trek: true });
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");

  const allBikes = useMemo(() => {
    const fromPostings = postings
      .filter(
        (p) =>
          p.status === POSTING_STATUS.ACTIVE ||
          p.status === POSTING_STATUS.PENDING_REVIEW,
      )
      .map(postingToBike);
    return [...fromPostings, ...marketplaceBikes];
  }, [postings]);

  const displayedCount = allBikes.length;

  const toggleBrand = (id) => {
    setBrands((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const clearFilters = () => {
    setBikeType("all");
    setPriceRange([450, 2800]);
    setVerifiedOnly(true);
    setFrameSize(null);
    setBrands({});
  };

  return (
    <Box className="marketplace-page">
      <Header />
      <Box className="marketplace-layout">
        {/* Sidebar Filters */}
        <aside className="marketplace-sidebar">
          <Box className="marketplace-filters-header">
            <Typography className="marketplace-filters-title">
              Filters
            </Typography>
            <Button
              variant="text"
              className="marketplace-clear-btn"
              onClick={clearFilters}
            >
              Clear All
            </Button>
          </Box>

          <Box className="marketplace-filter-section">
            <Typography className="marketplace-filter-label">
              BIKE TYPE
            </Typography>
            <Box className="marketplace-bike-types">
              {BIKE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`marketplace-bike-type-btn ${bikeType === t.id ? "active" : ""}`}
                  onClick={() => setBikeType(t.id)}
                >
                  <span className="marketplace-bike-type-icon">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </Box>
          </Box>

          <Box className="marketplace-filter-section">
            <Typography className="marketplace-filter-label">
              PRICE RANGE
            </Typography>
            <Box className="marketplace-price-inputs">
              <input
                type="text"
                value={`$${priceRange[0]}`}
                readOnly
                className="marketplace-price-input"
              />
              <input
                type="text"
                value={`$${priceRange[1].toLocaleString()}`}
                readOnly
                className="marketplace-price-input"
              />
            </Box>
            <Slider
              value={priceRange}
              onChange={(_, v) => setPriceRange(v)}
              valueLabelDisplay="auto"
              min={100}
              max={10000}
              sx={{ color: "#00ccad", mt: 1 }}
            />
          </Box>

          <Box className="marketplace-filter-section marketplace-verified-row">
            <Typography className="marketplace-filter-label">
              Verified Only
            </Typography>
            <Switch
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": { color: "#00ccad" },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#00ccad",
                },
              }}
            />
          </Box>

          <Box className="marketplace-filter-section">
            <Typography className="marketplace-filter-label">
              FRAME SIZE
            </Typography>
            <Box className="marketplace-frame-sizes">
              {FRAME_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`marketplace-frame-btn ${frameSize === size ? "active" : ""}`}
                  onClick={() => setFrameSize(size)}
                >
                  {size}
                </button>
              ))}
            </Box>
          </Box>

          <Box className="marketplace-filter-section">
            <Typography className="marketplace-filter-label">
              POPULAR BRANDS
            </Typography>
            <Box className="marketplace-brands">
              {BRANDS.map((b) => (
                <label key={b.id} className="marketplace-brand-label">
                  <Checkbox
                    checked={!!brands[b.id]}
                    onChange={() => toggleBrand(b.id)}
                    sx={{
                      color: "#9ca3af",
                      "&.Mui-checked": { color: "#00ccad" },
                    }}
                  />
                  {b.label}
                </label>
              ))}
            </Box>
          </Box>
        </aside>

        {/* Main Content */}
        <main className="marketplace-main">
          <Box className="marketplace-results-header">
            <Typography className="marketplace-results-title">
              Search Results ({displayedCount} bikes)
            </Typography>
            <Box className="marketplace-results-actions">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="marketplace-sort-select"
              >
                <option value="newest">Newest Listings</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <Box className="marketplace-view-toggle">
                <button
                  type="button"
                  className={`marketplace-view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <AppstoreOutlined style={{ fontSize: 18 }} />
                </button>
                <button
                  type="button"
                  className={`marketplace-view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <UnorderedListOutlined style={{ fontSize: 18 }} />
                </button>
              </Box>
            </Box>
          </Box>

          <Box
            className={`marketplace-grid ${viewMode === "list" ? "list" : ""}`}
          >
            {allBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </Box>

          <Box className="marketplace-load-more">
            <Button
              component={Link}
              to="/marketplace"
              className="marketplace-show-more-btn"
              sx={{
                backgroundColor: "#00ccad",
                color: "#0f172a",
                fontWeight: 700,
                padding: "14px 48px",
                borderRadius: 12,
                "&:hover": { backgroundColor: "#00b89a" },
              }}
            >
              SHOW MORE RESULTS
            </Button>
            <Typography className="marketplace-result-count">
              Showing {displayedCount} bikes
            </Typography>
          </Box>
        </main>
      </Box>

      <Footer
        marketplaceLinks={[
          { label: "Browse All Bikes", href: "/marketplace" },
          { label: "Road Bikes", href: "/marketplace?type=road" },
          { label: "Mountain Bikes", href: "/marketplace?type=mountain" },
          { label: "Electric Bikes", href: "/marketplace?type=e-bikes" },
          { label: "Gravel & Cyclocross", href: "/marketplace?type=gravel" },
        ]}
        servicesLinks={[
          { label: "How it Works", href: "#" },
          { label: "Verification Process", href: "#" },
          { label: "Safety Center", href: "#" },
          { label: "Success Stories", href: "#" },
          { label: "Contact Support", href: "#" },
        ]}
      />
    </Box>
  );
}
