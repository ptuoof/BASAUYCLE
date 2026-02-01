import { createContext, useContext, useState, useCallback } from "react";
import { POSTING_STATUS } from "../constants/postingStatus";

const PostingContext = createContext(null);

function generatePostingId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `POST-2024-${n}`;
}

/**
 * Build posting from Post form data.
 * Payload: { bikeName, brand, category, frameSize, frameMaterial, price, imageUrl?, imageUrls?, status? }
 * sellerId: current user id (or email) so we can hide Buy Now on own listings.
 */
function buildPosting(
  payload,
  status = POSTING_STATUS.PENDING_REVIEW,
  sellerId = null,
) {
  const now = new Date();
  const imageUrls =
    payload.imageUrls?.length > 0
      ? payload.imageUrls
      : payload.imageUrl
        ? [payload.imageUrl]
        : [];
  return {
    id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    postingId: generatePostingId(),
    bikeName: payload.bikeName || "Untitled",
    brand: payload.brand,
    category: payload.category,
    frameSize: payload.frameSize || "",
    frameMaterial: payload.frameMaterial,
    price: payload.price || "",
    priceDisplay: payload.price ? `$${payload.price}` : "",
    imageUrl: payload.imageUrl || imageUrls[0] || null,
    imageUrls,
    status: payload.status ?? status,
    sellerId: sellerId ?? null,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
}

export function PostingProvider({ children }) {
  const [postings, setPostings] = useState([]);

  const addPosting = useCallback(
    (payload, status = POSTING_STATUS.PENDING_REVIEW, sellerId = null) => {
      const posting = buildPosting(payload, status, sellerId);
      setPostings((prev) => [posting, ...prev]);
      return posting;
    },
    [],
  );

  const updatePostingStatus = useCallback((id, status) => {
    setPostings((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status, updatedAt: new Date().toISOString() } : p,
      ),
    );
  }, []);

  const getPostingById = useCallback(
    (id) => postings.find((p) => p.id === id) ?? null,
    [postings],
  );

  const value = {
    postings,
    addPosting,
    updatePostingStatus,
    getPostingById,
  };
  return (
    <PostingContext.Provider value={value}>{children}</PostingContext.Provider>
  );
}

export function usePostings() {
  const ctx = useContext(PostingContext);
  if (!ctx) throw new Error("usePostings must be used within PostingProvider");
  return ctx;
}
