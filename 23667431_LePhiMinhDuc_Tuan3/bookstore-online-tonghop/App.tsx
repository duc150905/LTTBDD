// =============================================================================
// BÀI TỔNG HỢP TUẦN 3 — BOOKSTORE ONLINE
// Tích hợp đầy đủ kiến thức từ 3 giờ thực hành:
//   - GIỜ 1: Nền tảng Flexbox (Header cố định, BookRowCard, ScrollView flex:1)
//   - GIỜ 2: Kích thước, flexWrap & Lưới Grid 2 cột (CategoryChips, BookGrid)
//   - GIỜ 3: Định vị vị trí Absolute / Relative (DiscountBadge, FloatingCartButton)
// KÈM THEO: Giao diện Modal Giỏ hàng, Chi tiết sách và Toast thông báo trực quan!
// =============================================================================

import React, { useState, useMemo, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Import các component
import { Header } from "./components/Header";
import { CategoryChips } from "./components/CategoryChips";
import { BookRowCard } from "./components/BookRowCard";
import { BookGrid } from "./components/BookGrid";
import { FloatingCartButton } from "./components/FloatingCartButton";
import { CartModal } from "./components/CartModal";
import { BookDetailModal } from "./components/BookDetailModal";
import { ToastBanner } from "./components/ToastBanner";
import { BOOKS, Book, CartItem, INITIAL_CART } from "./data";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<any>(null);

  // Hiển thị thông báo Toast trong 2.5 giây
  const showToast = (msg: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Tổng số lượng sách trong giỏ
  const totalCartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  // Lọc sách theo danh mục (Giờ 2 - Category Filter)
  const filteredBooks = useMemo(() => {
    if (selectedCategory === "Tất cả") return BOOKS;
    return BOOKS.filter((b) => b.category === selectedCategory);
  }, [selectedCategory]);

  // Sách đề xuất (Giờ 1 - BookRowCard)
  const featuredBooks = useMemo(() => BOOKS.slice(0, 2), []);

  // Thêm sách vào giỏ
  const handleAddToCart = (book: Book) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { book, quantity: 1 }];
    });
    showToast(`✅ Đã thêm "${book.title}" vào giỏ hàng!`);
  };

  // Tăng / giảm số lượng trong giỏ
  const handleUpdateQuantity = (bookId: number, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.book.id === bookId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  // Xoá 1 món khỏi giỏ
  const handleRemoveItem = (bookId: number) => {
    setCartItems((prev) => prev.filter((item) => item.book.id !== bookId));
    showToast("🗑️ Đã xoá sách khỏi giỏ hàng");
  };

  // Xoá trắng giỏ hàng
  const handleClearCart = () => {
    setCartItems([]);
    showToast("🧹 Đã làm trống giỏ hàng");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        {/* THÔNG BÁO TOAST NỔI */}
        <ToastBanner message={toastMessage} />

        {/* 1. HEADER CỐ ĐỊNH (GIỜ 1) */}
        <Header
          cartCount={totalCartCount}
          onPressCart={() => setIsCartOpen(true)}
          onPressSearch={() => showToast("🔍 Tính năng tìm kiếm sách")}
        />

        {/* 2. NỘI DUNG CUỘN flex:1 (GIỜ 1 & GIỜ 2) */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* BANNER TỔNG HỢP */}
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>📚 Ứng dụng Bookstore Online</Text>
            <Text style={styles.bannerSubtitle}>
              Bấm vào từng cuốn sách để xem chi tiết, hoặc bấm vào nút giỏ hàng 🛒 để xem & chỉnh sửa giỏ hàng thực tế!
            </Text>
          </View>

          {/* SECTION 1: DANH MỤC THỂ LOẠI (GIỜ 2 - flexWrap) */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📂 Danh mục thể loại (flexWrap)</Text>
            <CategoryChips
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                showToast(`Đang lọc: ${cat}`);
              }}
            />
          </View>

          {/* SECTION 2: SÁCH BÁN CHẠY / ĐỀ XUẤT (GIỜ 1 - BookRowCard + GIỜ 3 Badge) */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⭐ Sách đề xuất (Layout Hàng ngang)</Text>
            <View style={styles.rowCardList}>
              {featuredBooks.map((book) => (
                <BookRowCard
                  key={book.id}
                  book={book}
                  onPress={() => setSelectedBook(book)}
                  onAddToCart={() => handleAddToCart(book)}
                />
              ))}
            </View>
          </View>

          {/* SECTION 3: LƯỚI TẤT CẢ SÁCH (GIỜ 2 - BookGrid + GIỜ 3 Badge) */}
          <View style={styles.section}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>
                📖 {selectedCategory === "Tất cả" ? "Tất cả sách" : `Sách ${selectedCategory}`}
              </Text>
              <Text style={styles.countText}>({filteredBooks.length} cuốn)</Text>
            </View>

            {filteredBooks.length > 0 ? (
              <BookGrid
                books={filteredBooks}
                onPressBook={(id) => {
                  const book = BOOKS.find((b) => b.id === id);
                  if (book) setSelectedBook(book);
                }}
                onAddToCart={(book) => handleAddToCart(book)}
              />
            ) : (
              <View style={styles.emptyWrap}>
                <Text style={styles.emptyText}>
                  Chưa có sách trong danh mục "{selectedCategory}"
                </Text>
              </View>
            )}
          </View>
        </ScrollView>

        {/* 3. NÚT GIỎ HÀNG NỔI (GIỜ 3 - position: 'absolute') */}
        <FloatingCartButton
          count={totalCartCount}
          onPress={() => setIsCartOpen(true)}
        />

        {/* 4. MODAL GIỎ HÀNG (HIỂN THỊ CHI TIẾT & TÍNH TOÁN TIỀN THỰC TẾ) */}
        <CartModal
          visible={isCartOpen}
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* 5. MODAL CHI TIẾT SÁCH KHI BẤM VÀO SÁCH */}
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onAddToCart={handleAddToCart}
        />

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1E1B4B",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    position: "relative",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 110, // Chừa khoảng trống để nút giỏ hàng nổi không che nội dung
    gap: 20,
  },
  banner: {
    backgroundColor: "#EEF2FF",
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#4338CA",
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#312E81",
  },
  bannerSubtitle: {
    fontSize: 12,
    color: "#475569",
    marginTop: 4,
    lineHeight: 18,
  },
  section: {
    gap: 10,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  countText: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },
  rowCardList: {
    gap: 12,
  },
  emptyWrap: {
    paddingVertical: 32,
    alignItems: "center",
  },
  emptyText: {
    color: "#94A3B8",
    fontSize: 14,
  },
});
