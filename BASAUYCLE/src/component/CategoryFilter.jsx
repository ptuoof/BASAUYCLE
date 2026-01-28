import { useState } from 'react';
import { Box, Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

const categories = [
  { id: 'all', label: 'All Bikes', icon: '☰' },
  { id: 'mountain', label: 'Mountain', icon: '⛰' },
  { id: 'road', label: 'Road', icon: '🛣' },
  { id: 'gravel', label: 'Gravel', icon: '🪨' },
  { id: 'ebikes', label: 'E-Bikes', icon: '⚡' },
];

const FilterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: 'white',
}));

const FilterContainer = styled(Container)({
  maxWidth: 1160,
});

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: 999,
  padding: '10px 20px',
  fontSize: 14,
  fontWeight: 500,
  textTransform: 'none',
  border: '1px solid #e5e7eb',
  color: '#374151',
  '&.Mui-selected': {
    backgroundColor: '#1ABC9C',
    color: 'white',
    borderColor: '#1ABC9C',
    '&:hover': {
      backgroundColor: '#16A085',
    },
  },
  '&:hover': {
    backgroundColor: '#f9fafb',
    borderColor: '#d1d5db',
  },
}));

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleChange = (event, newCategory) => {
    if (newCategory !== null) {
      setActiveCategory(newCategory);
    }
  };

  return (
    <FilterSection component="section">
      <FilterContainer>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
          <ToggleButtonGroup
            value={activeCategory}
            exclusive
            onChange={handleChange}
            aria-label="bike category filter"
          >
            {categories.map((category) => (
              <StyledToggleButton key={category.id} value={category.id}>
                {category.icon} {category.label}
              </StyledToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </FilterContainer>
    </FilterSection>
  );
}
