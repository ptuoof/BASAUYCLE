import { Box, Container, Typography, Grid, Link as MUILink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowRightOutlined } from '@ant-design/icons';
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

const FeaturedBikesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: 'white',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(7.5, 0),
  },
}));

const FeaturedBikesContainer = styled(Container)({
  maxWidth: 1160,
});

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(6),
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const SectionTitle = styled(Typography)({
  fontSize: 40,
  fontWeight: 700,
  color: '#1a1a1a',
  marginBottom: 8,
});

const SectionDescription = styled(Typography)({
  fontSize: 16,
  color: '#6b7280',
});

const ViewGalleryLink = styled(MUILink)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  color: '#1ABC9C',
  fontWeight: 600,
  fontSize: 16,
  textDecoration: 'none',
  '&:hover': {
    color: '#16A085',
  },
});

const BikesGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '& > .MuiGrid-item': {
      maxWidth: '100%',
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

        <BikesGrid container spacing={3}>
          {featuredBikes.map((bike) => (
            <Grid item xs={12} sm={6} md={3} key={bike.id}>
              <BikeCard bike={bike} />
            </Grid>
          ))}
        </BikesGrid>
      </FeaturedBikesContainer>
    </FeaturedBikesSection>
  );
}
