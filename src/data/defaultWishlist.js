import bikeTarmac from "../assets/bike-tarmac-sl7.png";
import canyonGrizl from "../assets/CanyonGrizlCFSL.jpg";
import santaCruz from "../assets/SantaCruzNomaCC.png";

export const defaultWishlistItems = [
  {
    id: 1,
    name: "S-WORKS TARMAC SL7",
    brand: "SPECIALIZED",
    year: "2023",
    price: "$12,500",
    originalPrice: "$13,800",
    image: bikeTarmac,
    badges: [
      { type: "price", label: "PRICE DROP" },
      { type: "certified", label: "CERTIFIED" },
    ],
    specs: { frame: "Fact 12r Carbon", groupset: "Dura-Ace Di2", size: "56cm" },
    category: "road",
    status: "available",
  },
  {
    id: 2,
    name: "CANYON GRIZL CF SLX",
    brand: "CANYON",
    year: "2024",
    price: "$4,800",
    image: canyonGrizl,
    badges: [{ type: "available", label: "AVAILABLE" }],
    specs: { frame: "CF SLX Carbon", groupset: "GRX 800", size: "L (58cm)" },
    category: "gravel",
    status: "available",
  },
  {
    id: 3,
    name: "TREK MADONE SLR 9",
    brand: "TREK",
    year: "2022",
    price: "$8,200",
    image: santaCruz,
    specs: { frame: "800 OCLV", size: "54cm" },
    category: "road",
    status: "sold",
  },
];
