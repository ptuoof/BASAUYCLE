import { Box, Typography } from "@mui/material";
import Header from "../../component/header";

export default function UserDetail() {
  return (
    <Box
      component="main"
      sx={{ minHeight: "100vh", backgroundColor: "#f9fafa" }}
    >
      <Header
        navLinks={[
          { label: "Browse", href: "#" },
          { label: "Inspections", href: "#" },
          { label: "How It Works", href: "#" },
          { label: "About", href: "#" },
        ]}
        showSearch={false}
        showAvatar={true}
        showSellButton={true}
        showLogin={true}
      />
      <Box sx={{ maxWidth: 1160, margin: "0 auto", padding: 4 }}>
        <Typography variant="h4" fontWeight={700} color="#1a1a1a" gutterBottom>
          User Detail
        </Typography>
        <Typography color="#6b7280">
          View and manage your account information.
        </Typography>
      </Box>
    </Box>
  );
}
