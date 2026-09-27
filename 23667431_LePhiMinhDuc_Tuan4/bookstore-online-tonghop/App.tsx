// =============================================================================
// BÀI TỔNG HỢP TUẦN 4 — BOOKSTORE ONLINE
// Tích hợp đầy đủ kiến thức từ 2 giờ thực hành:
//   - GIỜ 4: Layout toàn màn hình: ScrollView & SafeAreaView
//            • HomeScreen (Header cố định, ScrollView flex:1, FloatingCartButton absolute)
//            • BookDetailScreen (Back button, ScrollView ảnh & mô tả dài, bottomBar cố định)
//   - GIỜ 5: Bottom Tab Layout & Hoàn thiện ứng dụng
//            • TabBar (Cố định đáy màn hình, height: 64, 4 tab chia đều flex:1)
//            • CartScreen (3 vùng độc lập: header, ScrollView CartLineItem, totalBar cố định)
// =============================================================================

import React, { useState, useMemo, useRef } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Import dữ liệu
import { BOOKS, Book, CartItem, INITIAL_CART } from "./data";

// Import components
import { TabBar, TabKey } from "./components/TabBar";
import { ToastBanner } from "./components/ToastBanner";

// Import screens
import { HomeScreen } from "./screens/HomeScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { CartScreen } from "./screens/CartScreen";
import { CategoryScreen } from "./screens/CategoryScreen";
import { AccountScreen } from "./screens/AccountScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<any>(null);

  // Hiển thị thông báo Toast trong 2.5s
  const showToast = (msg: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Cuốn sách đang được chọn xem chi tiết (nếu có)
  const selectedBook = useMemo(() => {
    return BOOKS.find((b) => b.id === selectedBookId) ?? null;
  }, [selectedBookId]);

  // Tổng số lượng sách trong giỏ
  const totalCartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

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

  // Cập nhật số lượng sách trong giỏ (+1 hoặc -1)
  const handleUpdateQuantity = (bookId: number, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.book.id === bookId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
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

  // Thanh toán giỏ hàng
  const handleCheckout = () => {
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.book.price * item.quantity,
      0
    );
    Alert.alert(
      "Đặt Hàng Thành Công! 🎉",
      `Bạn đã đặt ${totalCartCount} cuốn sách với tổng tiền ${totalAmount.toLocaleString()} đ.\nCảm ơn bạn đã ủng hộ Bookstore!`,
      [
        {
          text: "Đồng ý",
          onPress: () => {
            setCartItems([]);
            setActiveTab("home");
            showToast("✨ Đơn hàng đã được ghi nhận!");
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {/* THÔNG BÁO TOAST NỔI */}
        <ToastBanner message={toastMessage} />

        {/* ĐIỀU HƯỚNG MÀN HÌNH:
            Nếu đang chọn 1 cuốn sách -> Hiển thị BookDetailScreen toàn màn hình (Giờ 4 Bài 2).
            Nếu không -> Hiển thị theo TabBar đang active (Giờ 5 Bài 1 & 2). */}
        {selectedBook ? (
          <BookDetailScreen
            book={selectedBook}
            onBack={() => setSelectedBookId(null)}
            onAddToCart={() => handleAddToCart(selectedBook)}
          />
        ) : (
          <>
            {activeTab === "home" && (
              <HomeScreen
                cartCount={totalCartCount}
                onPressBook={(id) => setSelectedBookId(id)}
                onPressCart={() => setActiveTab("cart")}
                onAddToCart={handleAddToCart}
                selectedCategory={selectedCategory}
                onSelectCategory={(cat) => setSelectedCategory(cat)}
                onPressSearch={() => showToast("🔍 Tìm kiếm sách nhanh")}
              />
            )}

            {activeTab === "category" && (
              <CategoryScreen
                onPressBook={(id) => setSelectedBookId(id)}
                onAddToCart={handleAddToCart}
              />
            )}

            {activeTab === "cart" && (
              <CartScreen
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
                onCheckout={handleCheckout}
                onGoShopping={() => setActiveTab("home")}
              />
            )}

            {activeTab === "account" && <AccountScreen />}

            {/* THANH TAB BAR CỐ ĐỊNH DƯỚI CÙNG (GIỜ 5 — Bài tập 1) */}
            <TabBar
              active={activeTab}
              onChange={(tab) => setActiveTab(tab)}
              cartCount={totalCartCount}
            />
          </>
        )}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  body: {
    flex: 1,
    position: "relative",
  },
});
