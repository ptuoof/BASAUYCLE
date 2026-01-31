import { createContext, useContext, useState, useCallback } from "react";
import { defaultWishlistItems } from "../data/defaultWishlist";

const WishlistContext = createContext(null);
const STORAGE_KEY = "basauycle-wishlist";

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) return parsed;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultWishlistItems));
      return defaultWishlistItems;
    } catch {
      return defaultWishlistItems;
    }
  });

  const saveToStorage = useCallback((items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, []);

  const addToWishlist = useCallback(
    (product) => {
      setWishlist((prev) => {
        if (prev.some((p) => p.id === product.id)) return prev;
        const next = [...prev, { ...product, addedAt: Date.now() }];
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage],
  );

  const removeFromWishlist = useCallback(
    (productId) => {
      setWishlist((prev) => {
        const next = prev.filter((p) => p.id !== productId);
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage],
  );

  const isInWishlist = useCallback(
    (productId) => wishlist.some((p) => p.id === productId),
    [wishlist],
  );

  const value = { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
