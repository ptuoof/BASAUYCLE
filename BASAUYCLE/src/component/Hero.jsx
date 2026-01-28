import { Box, Container, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Button from './Button';
import SearchBar from './SearchBar';

const HeroSection = styled(Box)({
  position: 'relative',
  minHeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: '#0f172a',
});

const BackgroundOverlay = styled(Box)({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  width: '50%',
  background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)',
});

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  padding: theme.spacing(10, 3, 25),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(7.5, 3, 22.5),
  },
}));

const HeroBadge = styled(Chip)({
  backgroundColor: 'rgba(26, 188, 156, 0.2)',
  border: '1px solid rgba(26, 188, 156, 0.3)',
  color: 'white',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: 24,
  height: 24,
});

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: 56,
  fontWeight: 700,
  lineHeight: 1.1,
  color: 'white',
  marginBottom: 20,
  maxWidth: 700,
  [theme.breakpoints.down('md')]: {
    fontSize: 36,
  },
}));

const TitleHighlight = styled('span')({
  color: '#1ABC9C',
});

const HeroDescription = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: 32,
  maxWidth: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));

const HeroButtons = styled(Box)({
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
});

const SecondaryButton = styled(Button)({
  padding: '14px 28px',
  fontSize: 16,
  fontWeight: 600,
  background: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.15)',
  },
});

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 20,
  maxWidth: 1160,
  margin: '-80px auto 0',
  padding: theme.spacing(0, 3),
  [theme.breakpoints.down('md')]: {
    margin: '-60px auto 0',
  },
}));

export default function Hero() {
  return (
    <HeroSection component="section">
      <BackgroundOverlay />
      <HeroContent>
        <HeroBadge label="PREMIUM MARKETPLACE" />
        <HeroTitle variant="h1">
          Find Your Next{' '}
          <TitleHighlight>Peak Performance.</TitleHighlight>
        </HeroTitle>
        <HeroDescription>
          The most trusted marketplace for modern cyclists. Buy, sell, and get certified expert inspections for high-performance bicycles.
        </HeroDescription>
        <HeroButtons>
          <Button 
            variant="primary"
            icon={<ArrowRightOutlined />}
            iconPosition="right"
            sx={{ padding: '14px 28px', fontSize: 16, fontWeight: 600 }}
          >
            Explore Marketplace
          </Button>
          <SecondaryButton 
            icon={<CheckCircleOutlined />}
          >
            Certified Pre-Owned
          </SecondaryButton>
        </HeroButtons>
      </HeroContent>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
    </HeroSection>
  );
}
