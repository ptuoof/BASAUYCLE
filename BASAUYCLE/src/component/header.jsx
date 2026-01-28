import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Avatar, InputBase, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SearchOutlined } from '@ant-design/icons';
import bikeLogo from '../assets/bike-logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.94),
  backdropFilter: 'blur(16px)',
  borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
  boxShadow: 'none',
  color: theme.palette.text.primary,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  maxWidth: 1160,
  width: '100%',
  margin: '0 auto',
  padding: '14px 24px',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

const LogoLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  textDecoration: 'none',
  color: 'inherit',
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2.25),
  marginLeft: theme.spacing(3),
  fontSize: 14,
}));

const NavLink = styled('a')(({ theme, active }) => ({
  color: active ? '#020617' : '#4b5563',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: 14,
  transition: 'color 0.2s',
  '&:hover': {
    color: '#020617',
  },
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 999,
  backgroundColor: '#f3f4f6',
  padding: '8px 14px',
  maxWidth: 360,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const SearchIconWrapper = styled('div')({
  width: 16,
  height: 16,
  borderRadius: '50%',
  border: '2px solid #9ca3af',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 8,
    height: 2,
    borderRadius: 999,
    background: '#9ca3af',
    transform: 'rotate(45deg)',
    bottom: -4,
    right: -6,
  },
});

const StyledInputBase = styled(InputBase)({
  flex: 1,
  fontSize: 13,
  color: '#111827',
  '& input': {
    padding: 0,
    '&::placeholder': {
      color: '#9ca3af',
      opacity: 1,
    },
  },
});

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const SellButton = styled(Button)({
  backgroundColor: '#1ABC9C',
  color: 'white',
  padding: '10px 20px',
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#16A085',
  },
});

const LoginButton = styled(Button)({
  backgroundColor: 'white',
  color: '#1a1a1a',
  border: '1px solid #e5e7eb',
  padding: '10px 20px',
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#f9fafb',
    borderColor: '#d1d5db',
  },
});

export default function Header({
  showSearch = false,
  showAvatar = false,
  showSellButton = false,
  navLinks = [
    { label: 'Buy Bikes', href: '#' },
    { label: 'Sell Your Bike', href: '#' },
    { label: 'How it Works', href: '#' }
  ],
  activeLink = null,
  showLogin = true
}) {
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <LogoLink to="/" aria-label="36 Bikes Home">
          <img src={bikeLogo} alt="36 Bikes" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <Box component="span" sx={{ fontWeight: 700, fontSize: 18, color: '#020617' }}>
            36BIKES
          </Box>
        </LogoLink>

        {navLinks.length > 0 && (
          <NavLinks component="nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                active={activeLink === link.label ? 1 : 0}
              >
                {link.label}
              </NavLink>
            ))}
          </NavLinks>
        )}

        {showSearch && (
          <SearchWrapper>
            <Search>
              <SearchIconWrapper />
              <StyledInputBase placeholder="Search bikes..." />
            </Search>
          </SearchWrapper>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <RightSection>
          {showSellButton && (
            <SellButton component={Link} to="/post">Sell Your Bike</SellButton>
          )}
          {showLogin && (
            <LoginButton component={Link} to="/login">
              Login
            </LoginButton>
          )}
          {showAvatar && (
            <Avatar sx={{ width: 32, height: 32, bgcolor: '#e5e7eb', cursor: 'pointer' }} />
          )}
        </RightSection>
      </StyledToolbar>
    </StyledAppBar>
  );
}

