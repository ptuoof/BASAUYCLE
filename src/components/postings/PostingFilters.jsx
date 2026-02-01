import { Select, Button } from "antd";
import { Calendar, Tag, Filter } from "lucide-react";

const DATE_OPTIONS = [
  { value: "30", label: "Last 30 Days" },
  { value: "14", label: "Last 14 Days" },
  { value: "7", label: "Last 7 Days" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "All Status" },
  { value: "ACTIVE", label: "Active" },
  { value: "PENDING_REVIEW", label: "Pending Review" },
  { value: "SOLD", label: "Sold" },
  { value: "DRAFT", label: "Draft" },
  { value: "EXPIRED", label: "Expired" },
];

export default function PostingFilters({
  dateRange = "30",
  status = "all",
  onDateRangeChange,
  onStatusChange,
  onMoreFilters,
}) {
  return (
    <div className="posting-filters">
      <div className="posting-filters-item">
        <label className="posting-filters-label">Date Range</label>
        <Select
          value={dateRange}
          onChange={onDateRangeChange}
          options={DATE_OPTIONS}
          suffixIcon={<Calendar size={14} color="#94a3b8" />}
          className="posting-filters-select"
        />
      </div>
      <div className="posting-filters-item">
        <label className="posting-filters-label">Status</label>
        <Select
          value={status}
          onChange={onStatusChange}
          options={STATUS_OPTIONS}
          suffixIcon={<Tag size={14} color="#94a3b8" />}
          className="posting-filters-select"
        />
      </div>
      <div className="posting-filters-item posting-filters-more">
        <label className="posting-filters-label posting-filters-label-invisible">
          More
        </label>
        <Button
          type="default"
          size="middle"
          icon={<Filter size={14} />}
          onClick={onMoreFilters}
          className="posting-filters-more-btn"
        >
          More Filters
        </Button>
      </div>
    </div>
  );
}
