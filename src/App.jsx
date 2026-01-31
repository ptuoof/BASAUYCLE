import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { ConfigProvider } from "antd";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Wallet from "./pages/Wallet";
import PostBike from "./pages/Post";
import Wishlist from "./pages/Wishlist";
import UserDetail from "./pages/UserDetail";
import SetProfile from "./pages/SetProfile";
import ProductDetail from "./pages/ProductDetail";
import Marketplace from "./pages/Marketplace";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

const fontFamily =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif";

const muiTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily,
    allVariants: {
      fontFamily,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1ABC9C",
            borderRadius: 8,
            fontFamily,
          },
        }}
      >
        <BrowserRouter>
          <AuthProvider>
            <WishlistProvider>
              <NotificationProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    path="/payment"
                    element={
                      <ProtectedRoute>
                        <Payment />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/post"
                    element={
                      <ProtectedRoute>
                        <PostBike />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route
                    path="/user-detail"
                    element={
                      <ProtectedRoute>
                        <UserDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/set-profile"
                    element={
                      <ProtectedRoute>
                        <SetProfile />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/wallet"
                    element={
                      <ProtectedRoute>
                        <Wallet />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </NotificationProvider>
            </WishlistProvider>
          </AuthProvider>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
