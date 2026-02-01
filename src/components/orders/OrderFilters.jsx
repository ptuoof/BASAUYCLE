import { Select, Button } from "antd";
import { Calendar, DollarSign, Filter } from "lucide-react";

const DATE_OPTIONS = [
  { value: "30", label: "Last 30 Days" },
  { value: "14", label: "Last 14 Days" },
  { value: "7", label: "Last 7 Days" },
];

const AMOUNT_OPTIONS = [
  { value: "all", label: "All Prices" },
  { value: "0-1m", label: "Under 1M" },
  { value: "1m-5m", label: "1M - 5M" },
  { value: "5m+", label: "5M+" },
];

/**
 * Reusable filter bar for Orders page (date range, amount, more filters).
 */
export default function OrderFilters({
  dateRange = "30",
  amount = "all",
  onDateRangeChange,
  onAmountChange,
  onMoreFilters,
}) {
  return (
    <div className="order-filters">
      <div className="order-filters-item">
        <label className="order-filters-label">Date Range</label>
        <Select
          value={dateRange}
          onChange={onDateRangeChange}
          options={DATE_OPTIONS}
          suffixIcon={<Calendar size={14} color="#94a3b8" />}
          className="order-filters-select"
        />
      </div>
      <div className="order-filters-item">
        <label className="order-filters-label">Amount</label>
        <Select
          value={amount}
          onChange={onAmountChange}
          options={AMOUNT_OPTIONS}
          suffixIcon={<DollarSign size={14} color="#94a3b8" />}
          className="order-filters-select"
        />
      </div>
      <div className="order-filters-item order-filters-more">
        <label className="order-filters-label order-filters-label-invisible">
          More
        </label>
        <Button
          type="default"
          size="middle"
          icon={<Filter size={14} />}
          onClick={onMoreFilters}
          className="order-filters-more-btn"
        >
          More Filters
        </Button>
      </div>
    </div>
  );
}
