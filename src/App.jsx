import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { OrderProvider } from "./contexts/OrderContext";
import { PostingProvider } from "./contexts/PostingContext";
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
import CategoryManagement from "./pages/admin/category";
import AdminDashboard from "./pages/admin/dashboard";
import AdminReports from "./pages/admin/reports";
import AdminUsers from "./pages/admin/user";
import AdminListings from "./pages/admin/listing";
import AdminTransactions from "./pages/admin/transaction";
import Orders from "./pages/Orders";
import Postings from "./pages/Postings";

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
              <OrderProvider>
                <PostingProvider>
                  <NotificationProvider>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/marketplace" element={<Marketplace />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                      />
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
                      <Route
                        path="/orders"
                        element={
                          <ProtectedRoute>
                            <Orders />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/postings"
                        element={
                          <ProtectedRoute>
                            <Postings />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/admin-dashboard"
                        element={<AdminDashboard />}
                      />
                      <Route path="/admin-reports" element={<AdminReports />} />
                      <Route path="/admin-users" element={<AdminUsers />} />
                      <Route
                        path="/admin-listings"
                        element={<AdminListings />}
                      />
                      <Route
                        path="/admin-listing"
                        element={<Navigate to="/admin-listings" replace />}
                      />
                      <Route
                        path="/admin-transactions"
                        element={<AdminTransactions />}
                      />
                      <Route
                        path="/admin-categories"
                        element={<CategoryManagement />}
                      />
                      <Route
                        path="/admin/category"
                        element={<Navigate to="/admin-categories" replace />}
                      />
                    </Routes>
                  </NotificationProvider>
                </PostingProvider>
              </OrderProvider>
            </WishlistProvider>
          </AuthProvider>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
