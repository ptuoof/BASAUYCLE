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

const muiTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  try {
    return (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#1ABC9C',
              borderRadius: 8,
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
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    );
  } catch (error) {
    console.error('App Error:', error);
    return (
      <div style={{ padding: '20px' }}>
        <h1>Application Error</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }
}

export default App;
