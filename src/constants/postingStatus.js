/** Listing status for bike postings */

export const POSTING_STATUS = {
  ACTIVE: "ACTIVE",
  PENDING_REVIEW: "PENDING_REVIEW",
  SOLD: "SOLD",
  DRAFT: "DRAFT",
  EXPIRED: "EXPIRED",
};

export const POSTING_STATUS_LABEL = {
  [POSTING_STATUS.ACTIVE]: "Active",
  [POSTING_STATUS.PENDING_REVIEW]: "Pending Review",
  [POSTING_STATUS.SOLD]: "Sold",
  [POSTING_STATUS.DRAFT]: "Draft",
  [POSTING_STATUS.EXPIRED]: "Expired",
};

export const POSTING_STATUS_TAG_COLOR = {
  [POSTING_STATUS.ACTIVE]: "green",
  [POSTING_STATUS.PENDING_REVIEW]: "blue",
  [POSTING_STATUS.SOLD]: "default",
  [POSTING_STATUS.DRAFT]: "orange",
  [POSTING_STATUS.EXPIRED]: "default",
};
