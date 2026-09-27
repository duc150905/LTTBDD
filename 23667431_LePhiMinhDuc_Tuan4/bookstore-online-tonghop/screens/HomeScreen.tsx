// GIỜ 4 — Bài tập 1: Màn hình Trang chủ hoàn chỉnh
// Ghép: Header (cố định, KHÔNG cuộn) + ScrollView (Chips + Grid, CUỘN được)
// + FloatingCartButton (absolute, cùng cấp với ScrollView, KHÔNG cuộn theo).
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { BOOKS, Book } from "../data";

interface HomeScreenProps {
  cartCount: number;
  onPressBook: (id: number) => void;
  onPressCart: () => void;
  onAddToCart?: (book: Book) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  onPressSearch?: () => void;
}

export function HomeScreen({
  cartCount,
  onPressBook,
  onPressCart,
  onAddToCart,
  selectedCategory = "Tất cả",
  onSelectCategory,
  onPressSearch,
}: HomeScreenProps) {
  // Lọc sách theo danh mục nếu được chọn
  const displayedBooks =
    selectedCategory === "Tất cả"
      ? BOOKS
      : BOOKS.filter((b) => b.category === selectedCategory);

  return (
    // flex:1 + position mặc định 'relative' -> làm containing block cho
    // FloatingCartButton absolute bên dưới, thoát khỏi mọi quan hệ cha khác.
    <View style={styles.screen}>
      {/* 1. Header cố định phía trên cùng (Giờ 1 + Giờ 4) */}
      <Header
        cartCount={cartCount}
        onPressCart={onPressCart}
        onPressSearch={onPressSearch}
      />

      {/* 2. ScrollView flex:1 cuộn toàn bộ nội dung giữa header và tabbar */}
      <ScrollView
        style={styles.scroll} // flex:1 bắt buộc trên chính ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner giới thiệu */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            📚 Bookstore Online — Tuần 4 Tổng Hợp
          </Text>
          <Text style={styles.bannerSubtitle}>
            Tích hợp toàn diện Giờ 4 (ScrollView & SafeAreaView) và Giờ 5 (Bottom Tab Layout & Cart Screen).
          </Text>
        </View>

        <Text style={styles.sectionTitle}>📂 Danh mục thể loại (flexWrap)</Text>
        <CategoryChips
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />

        <View style={styles.gridHeaderRow}>
          <Text style={styles.sectionTitle}>
            📖 {selectedCategory === "Tất cả" ? "Sách nổi bật" : `Sách ${selectedCategory}`}
          </Text>
          <Text style={styles.countText}>({displayedBooks.length} cuốn)</Text>
        </View>

        <BookGrid
          books={displayedBooks}
          onPressBook={onPressBook}
          onAddToCart={onAddToCart}
        />
      </ScrollView>

      {/* 3. Nút nổi nằm NGOÀI ScrollView, song song với nó -> không bị cuộn theo
          nội dung, luôn nổi cố định ở góc màn hình.
          bottom: 80 để nổi phía TRÊN thanh TabBar 64px của Giờ 5. */}
      <FloatingCartButton
        count={cartCount}
        onPress={onPressCart}
        bottom={80}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    // paddingBottom đủ lớn để phần tử cuối của Grid không bị FloatingCartButton
    // (cao ~80px tính cả khoảng cách đáy) hoặc TabBar (64px) che mất.
    paddingBottom: 150,
  },
  banner: {
    backgroundColor: "#EEF2FF",
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#4338CA",
    marginBottom: 16,
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
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 6,
  },
  gridHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  countText: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },
});
