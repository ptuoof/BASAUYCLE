import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Wallet from "./pages/Wallet";
import PostBike from "./pages/Post";

const fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif";

const muiTheme = createTheme({
  palette: {
    mode: 'light',
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
            colorPrimary: '#1ABC9C',
            borderRadius: 8,
            fontFamily,
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/post" element={<PostBike />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
