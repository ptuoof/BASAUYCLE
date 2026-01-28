import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CheckCircleOutlined, CarOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: 'white',
}));

const FeatureCard = styled(Card)({
  borderRadius: 16,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  padding: 32,
  textAlign: 'center',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
});

const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 24,
});

const IconBox = styled(Box)({
  width: 64,
  height: 64,
  borderRadius: 12,
  backgroundColor: '#dff7f3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#1ABC9C',
});

const features = [
  {
    title: '36-Point Inspection',
    description: 'Every certified bike undergoes rigorous mechanical checks.',
    icon: <CheckCircleOutlined style={{ fontSize: 32 }} />,
  },
  {
    title: 'White Glove Delivery',
    description: 'Fully insured, professional bike shipping.',
    icon: <CarOutlined style={{ fontSize: 32 }} />,
  },
  {
    title: 'Secure Transactions',
    description: 'Escrow system ensures safe payments.',
    icon: <SafetyCertificateOutlined style={{ fontSize: 32 }} />,
  },
];

export default function Features() {
  return (
    <FeaturesSection component="section">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardContent sx={{ p: 0 }}>
                  <IconWrapper>
                    <IconBox>
                      {feature.icon}
                    </IconBox>
                  </IconWrapper>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#1a1a1a' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  );
}
