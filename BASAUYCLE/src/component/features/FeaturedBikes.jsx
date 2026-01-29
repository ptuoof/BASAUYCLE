import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MUILink,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowRightOutlined } from "@ant-design/icons";
import BikeCard from "../card";
import bikeTarmac from "../../assets/bike-tarmac-sl7.png";
import santaCruzNomadCC from "../../assets/SantaCruzNomaCC.png";
import canyonGrizlCFSL from "../../assets/CanyonGrizlCFSL.jpg";
import specializedTurboLevo from "../../assets/SpecializedTurboLevo.png";
// Thêm ảnh vào src/assets/bike-tarmac-sl7-new.png rồi bật 2 dòng dưới và đổi image thành bikeTarmacSL7New
// import bikeTarmacSL7New from "../../assets/bike-tarmac-sl7-new.png";

const featuredBikes = [
  {
    id: 1,
    name: "Specialized Tarmac SL7",
    price: "$4,250",
    category: "ROAD / CARBON",
    image: bikeTarmac,
    badge: "NEW ARRIVAL",
    specs: {
      weight: "7.2kg",
      groupset: "SRAM Force",
    },
  },
  {
    id: 2,
    name: "Santa Cruz Nomad CC",
    price: "$5,800",
    category: "MTB / FULL SUSPENSION",
    image: santaCruzNomadCC,
    badge: "INSPECTED",
    specs: {
      weight: "13.5kg",
      groupset: "FOX Factory",
    },
  },
  {
    id: 3,
    name: "Canyon Grizl CF SL",
    price: "$2,900",
    category: "GRAVEL / ADVENTURE",
    image: canyonGrizlCFSL,
    specs: {
      weight: "9.8kg",
      groupset: "Shimano GRX",
    },
  },
  {
    id: 4,
    name: "Specialized Turbo Levo",
    price: "$8,100",
    category: "E-MTB / ELECTRIC",
    image: specializedTurboLevo,
    badge: "TOP RATED",
    specs: {
      weight: "22.5kg",
      groupset: "Brose 2.2",
      motorPower: "700Wh",
    },
  },
];

const FeaturedBikesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#f9fafa",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(7.5, 0),
  },
}));

const FeaturedBikesContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1160,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBottom: theme.spacing(5),
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const SectionTitle = styled(Typography)({
  fontSize: 40,
  fontWeight: 700,
  color: "#1a1a1a",
  marginBottom: 8,
});

const SectionDescription = styled(Typography)({
  fontSize: 16,
  color: "#6b7280",
});

const ViewGalleryLink = styled(MUILink)({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  color: "#00ccad",
  fontWeight: 700,
  fontSize: 16,
  textDecoration: "none",
  "&:hover": {
    color: "#00b89a",
  },
});

const BikesGrid = styled(Grid)(({ theme }) => ({
  marginTop: 0,
  "& > .MuiGrid-item": {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    "& > .MuiGrid-item": {
      maxWidth: "100%",
    },
  },
}));

export default function FeaturedBikes() {
  return (
    <FeaturedBikesSection component="section">
      <FeaturedBikesContainer>
        <SectionHeader>
          <Box>
            <SectionTitle variant="h2">Featured Bikes</SectionTitle>
            <SectionDescription>
              The best deals curated by our experts this week.
            </SectionDescription>
          </Box>
          <ViewGalleryLink href="#">
            View Gallery
            <ArrowRightOutlined />
          </ViewGalleryLink>
        </SectionHeader>

        <BikesGrid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {featuredBikes.map((bike) => (
            <Grid item xs={12} sm={6} md={6} key={bike.id}>
              <Box
                className="bike-card-wrapper"
                sx={{
                  width: "100%",
                  height: "100%",
                  ...(bike.id === 4 && {
                    marginLeft: { xs: "48px", sm: "80px", md: "280px" },
                    width: { xs: "calc(100% - 48px)", sm: "calc(100% - 80px)", md: "calc(100% - 280px)" },
                  }),
                  "& .ant-card": { height: "100%", display: "flex", flexDirection: "column" },
                  "& .ant-card-body": {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 160,
                    padding: "20px",
                  },
                }}
              >
                <BikeCard bike={bike} />
              </Box>
            </Grid>
          ))}
        </BikesGrid>
      </FeaturedBikesContainer>
    </FeaturedBikesSection>
  );
}
