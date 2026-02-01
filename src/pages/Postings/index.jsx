import { useMemo, useState } from "react";
import { Row, Col, Card, Typography } from "antd";
import { FileText, Megaphone, BarChart2 } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import PostingFilters from "../../components/postings/PostingFilters";
import PostingCard from "../../components/postings/PostingCard";
import { usePostings } from "../../contexts/PostingContext";
import "./index.css";

const BREADCRUMB_ITEMS = [
  { label: "Account", path: "/user-detail" },
  { label: "My Postings" },
];

const INFO_CARDS = [
  {
    key: "tips",
    icon: <FileText size={28} color="#16a34a" />,
    title: "Listing Tips",
    description:
      "Use clear photos and detailed descriptions to attract buyers. Verified listings get more views.",
  },
  {
    key: "promote",
    icon: <Megaphone size={28} color="#0ea5e9" />,
    title: "Promote Your Listing",
    description:
      "Boost your listing to reach more buyers. Featured listings appear at the top of search results.",
  },
  {
    key: "insights",
    icon: <BarChart2 size={28} color="#0d9488" />,
    title: "View Insights",
    description:
      "Track views and interest on your listings. See how your postings perform over time.",
  },
];

function filterPostings(postings, dateRange, statusFilter) {
  const now = new Date();
  let start = new Date(now);
  const days = parseInt(dateRange, 10) || 30;
  start.setDate(start.getDate() - days);

  return postings.filter((p) => {
    const created = p.createdAt ? new Date(p.createdAt) : new Date(0);
    if (created < start) return false;
    if (statusFilter === "all") return true;
    return p.status === statusFilter;
  });
}

export default function PostingsPage() {
  const [dateRange, setDateRange] = useState("30");
  const [statusFilter, setStatusFilter] = useState("all");
  const { postings } = usePostings();

  const filteredPostings = useMemo(
    () => filterPostings(postings, dateRange, statusFilter),
    [postings, dateRange, statusFilter],
  );

  return (
    <div className="postings-page">
      <Header />
      <main className="postings-main">
        <div className="postings-container">
          <PageBreadcrumb items={BREADCRUMB_ITEMS} />
          <Typography.Title level={2} className="postings-title">
            My Postings
          </Typography.Title>
          <Typography.Text
            type="secondary"
            className="postings-subtitle"
            style={{ display: "block" }}
          >
            Manage your bike listings: active, pending review, or sold
          </Typography.Text>

          <PostingFilters
            dateRange={dateRange}
            status={statusFilter}
            onDateRangeChange={setDateRange}
            onStatusChange={setStatusFilter}
            onMoreFilters={() => {}}
          />

          <div className="postings-list">
            {filteredPostings.length === 0 ? (
              <Typography.Text type="secondary">
                No listings yet. Post a bike from the Sell page.
              </Typography.Text>
            ) : (
              filteredPostings.map((posting) => (
                <PostingCard key={posting.id} posting={posting} />
              ))
            )}
          </div>

          <Row
            gutter={[16, 16]}
            className="postings-info-cards"
            style={{ marginTop: 32 }}
          >
            {INFO_CARDS.map((item) => (
              <Col xs={24} md={8} key={item.key}>
                <Card
                  style={{
                    borderRadius: 10,
                    height: "100%",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="postings-info-card-icon">{item.icon}</div>
                  <Typography.Title
                    level={5}
                    style={{ marginBottom: 6, fontSize: 15 }}
                  >
                    {item.title}
                  </Typography.Title>
                  <Typography.Text
                    type="secondary"
                    style={{ fontSize: 13, lineHeight: 1.45 }}
                  >
                    {item.description}
                  </Typography.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </main>
      <Footer />
    </div>
  );
}
