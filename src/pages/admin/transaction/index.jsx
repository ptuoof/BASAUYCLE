import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  BadgeCheck,
  Tags,
  ReceiptText,
  BarChart3,
  Search,
  Eye,
} from "lucide-react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import bikeLogo from "../../../assets/bike-logo.png";
import "./index.css";

const NAV_ITEMS = [
  { id: "dashboard", label: "Admin Dashboard", icon: <LayoutGrid />, path: "/admin-dashboard" },
  { id: "users", label: "User Management", icon: <Users />, path: "/admin-users" },
  { id: "listing", label: "Listing Approval", icon: <BadgeCheck />, path: "/admin-listings" },
  { id: "categories", label: "Category Management", icon: <Tags />, path: "/admin-categories" },
  { id: "transactions", label: "Transaction Management", icon: <ReceiptText /> },
  { id: "reports", label: "Reports & Statistics", icon: <BarChart3 />, path: "/admin-reports" },
];

const STATS = [
  {
    label: "Total Volume",
    value: "$142,480.00",
    note: "↑12% vs last month",
    tone: "green",
  },
  {
    label: "Platform Fees",
    value: "$8,548.80",
    note: "↑8.5% margin avg",
    tone: "green",
  },
  {
    label: "Pending Payouts",
    value: "$3,240.50",
    note: "12 active orders",
    tone: "orange",
  },
  {
    label: "Success Rate",
    value: "99.2%",
    note: "Industry leading",
    tone: "green",
  },
];

const TRANSACTIONS = [
  {
    id: "#TXN-88219",
    datetime: "Oct 24, 2023 · 14:22",
    buyer: "John Doe (B)",
    seller: "Mike Smith (S)",
    amount: "$1,250.00",
    fee: "$75.00",
    status: "Completed",
  },
  {
    id: "#TXN-88218",
    datetime: "Oct 24, 2023 · 12:05",
    buyer: "Sarah Wilson (B)",
    seller: "ProBike Shop (S)",
    amount: "$3,400.00",
    fee: "$204.00",
    status: "Pending",
  },
  {
    id: "#TXN-88217",
    datetime: "Oct 23, 2023 · 18:45",
    buyer: "Alice Johnson (B)",
    seller: "David G. (S)",
    amount: "$850.00",
    fee: "$51.00",
    status: "Completed",
  },
];

export default function TransactionManagement() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [range, setRange] = useState("30");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return TRANSACTIONS.filter((row) => {
      const matchesQuery =
        !q ||
        row.id.toLowerCase().includes(q) ||
        row.buyer.toLowerCase().includes(q) ||
        row.seller.toLowerCase().includes(q);
      const matchesStatus =
        status === "all" || row.status.toLowerCase() === status;
      return matchesQuery && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="admin-transactions-page">
      <Header
        navLinks={[]}
        showSearch={false}
        showAvatar={false}
        showSellButton={false}
        showLogin={false}
      />

      <div className="admin-transactions-shell">
        <aside className="admin-transactions-sidebar">
          <nav className="admin-transactions-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`admin-transactions-nav-item ${
                  item.id === "transactions" ? "active" : ""
                }`}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  }
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="admin-transactions-main">
          <div className="admin-transactions-top">
            <div>
              <h1>Transaction Management</h1>
              <p>Monitor and manage all bicycle marketplace financial activities.</p>
            </div>
          </div>

          <div className="admin-transactions-stats">
            {STATS.map((card) => (
              <div key={card.label} className="stats-card">
                <div className="stats-label">{card.label}</div>
                <div className="stats-value">{card.value}</div>
                <div className={`stats-note ${card.tone}`}>{card.note}</div>
              </div>
            ))}
          </div>

          <div className="admin-transactions-filters">
            <div className="filter-block">
              <div className="filter-label">Search</div>
              <div className="filter-input">
                <Search />
                <input
                  type="text"
                  placeholder="ID, Buyer, or Seller..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="filter-block">
              <div className="filter-label">Status</div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="filter-block">
              <div className="filter-label">Date Range</div>
              <select value={range} onChange={(e) => setRange(e.target.value)}>
                <option value="30">Last 30 days</option>
                <option value="14">Last 14 days</option>
                <option value="7">Last 7 days</option>
              </select>
            </div>
            <button type="button" className="reset-btn">
              Reset Filters
            </button>
          </div>

          <div className="admin-transactions-table">
            <div className="table-row header">
              <div>Transaction ID</div>
              <div>Date & Time</div>
              <div>Buyer & Seller</div>
              <div>Amount</div>
              <div>Fee (6%)</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            {filtered.map((row) => (
              <div key={row.id} className="table-row">
                <div className="tx-id">{row.id}</div>
                <div>{row.datetime}</div>
                <div className="buyer-seller">
                  <div>{row.buyer}</div>
                  <span>{row.seller}</span>
                </div>
                <div className="amount">{row.amount}</div>
                <div className="fee">{row.fee}</div>
                <div>
                  <span className={`status ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </div>
                <div>
                  <button type="button" className="view-btn">
                    <Eye />
                  </button>
                </div>
              </div>
            ))}
            <div className="table-footer">
              <span>Showing 1 to 5 of 1,248 results</span>
              <div className="pagination">
                <button type="button">‹</button>
                <button type="button" className="active">
                  1
                </button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">…</button>
                <button type="button">12</button>
                <button type="button">›</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
