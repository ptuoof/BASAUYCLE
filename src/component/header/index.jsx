import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Avatar,
  InputBase,
  alpha,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { SearchOutlined } from "@ant-design/icons";
import {
  HeartOutlined,
  WalletOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import bikeLogo from "../../assets/bike-logo.png";
import "./index.css";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.94),
  backdropFilter: "blur(16px)",
  borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
  boxShadow: "none",
  color: theme.palette.text.primary,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  maxWidth: 1160,
  width: "100%",
  margin: "0 auto",
  padding: "14px 24px",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

const LogoLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  color: "inherit",
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2.25),
  marginLeft: theme.spacing(3),
  fontSize: 14,
}));

const NavLink = styled("a")(({ active }) => ({
  color: active ? "#020617" : "#4b5563",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: 14,
  transition: "color 0.2s",
  "&:hover": {
    color: "#020617",
  },
}));

const SearchWrapper = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 12,
  backgroundColor: "#f3f4f6",
  padding: "8px 14px",
  height: 40,
  maxWidth: 360,
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
}));

const SearchIcon = styled(SearchOutlined)({
  fontSize: 18,
  color: "#9ca3af",
});

const StyledInputBase = styled(InputBase)({
  flex: 1,
  fontSize: 14,
  color: "#6b7280",
  "& input": {
    padding: 0,
    "&::placeholder": {
      color: "#9ca3af",
      opacity: 1,
    },
  },
});

const RightSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const SellButton = styled(Button)({
  backgroundColor: "#00ccad",
  color: "#0f172a",
  padding: "10px 20px",
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 700,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#00b89a",
  },
});

const LoginButton = styled(Button)({
  backgroundColor: "#f1f5f9",
  color: "#0f172a",
  border: "none",
  padding: "10px 20px",
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 700,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#e2e8f0",
  },
});

const UserMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
    minWidth: 200,
    marginTop: theme.spacing(1.5),
  },
  "& .MuiMenuItem-root": {
    fontSize: 14,
    padding: "10px 16px",
    gap: 12,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    color: "#6b7280",
  },
}));

const userMenuItems = [
  {
    label: "Wishlist",
    path: "/wishlist",
    icon: <HeartOutlined style={{ fontSize: 18 }} />,
  },
  {
    label: "Wallet",
    path: "/wallet",
    icon: <WalletOutlined style={{ fontSize: 18 }} />,
  },
  {
    label: "User Detail",
    path: "/user-detail",
    icon: <UserOutlined style={{ fontSize: 18 }} />,
  },
  {
    label: "Set Profile",
    path: "/set-profile",
    icon: <SettingOutlined style={{ fontSize: 18 }} />,
  },
];

export default function Header({
  showSearch = false,
  showAvatar = false,
  showSellButton = false,
  navLinks = [
    { label: "Buy Bikes", href: "#" },
    { label: "Sell Your Bike", href: "#" },
    { label: "How it Works", href: "#" },
  ],
  activeLink = null,
  showLogin = true,
}) {
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const openUserMenu = Boolean(userMenuAnchor);

  const handleUserMenuOpen = (e) => {
    e.preventDefault();
    setUserMenuAnchor(e.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <LogoLink to="/" aria-label="Home">
          <img
            src={bikeLogo}
            alt=""
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "0.02em",
              color: "#000",
              textTransform: "uppercase",
            }}
          >
            BASAUYCLE
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
              <SearchIcon />
              <StyledInputBase placeholder="Search bikes..." />
            </Search>
          </SearchWrapper>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <RightSection>
          {showSellButton && (
            <SellButton component={Link} to="/post">
              Sell Your Bike
            </SellButton>
          )}
          {showLogin && (
            <LoginButton component={Link} to="/login">
              Sign In
            </LoginButton>
          )}
          {showAvatar && (
            <>
              <Avatar
                onClick={handleUserMenuOpen}
                aria-controls={openUserMenu ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openUserMenu ? "true" : undefined}
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: "#00ccad",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 16,
                  "&:hover": { bgcolor: "#00b89a" },
                }}
              >
                U
              </Avatar>
              <UserMenu
                id="user-menu"
                anchorEl={userMenuAnchor}
                open={openUserMenu}
                onClose={handleUserMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {userMenuItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={handleUserMenuClose}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </MenuItem>
                ))}
              </UserMenu>
            </>
          )}
        </RightSection>
      </StyledToolbar>
    </StyledAppBar>
  );
}
