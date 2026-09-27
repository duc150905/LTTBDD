// Tab "Danh mục" trong ứng dụng Bookstore Online — Tuần 4 Tổng Hợp
// Sử dụng CategoryChips (Giờ 2) và BookGrid (Giờ 2 + Giờ 3) trong ScrollView (Giờ 4).
import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { BOOKS, Book } from "../data";

interface CategoryScreenProps {
  onPressBook: (id: number) => void;
  onAddToCart?: (book: Book) => void;
}

export function CategoryScreen({
  onPressBook,
  onAddToCart,
}: CategoryScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filtered =
    selectedCategory === "Tất cả"
      ? BOOKS
      : BOOKS.filter((b) => b.category === selectedCategory);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📂 Khám Phá Danh Mục</Text>
        <Text style={styles.headerSub}>
          Chọn thể loại để duyệt qua những tác phẩm nổi bật nhất
        </Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CategoryChips
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>
            {selectedCategory === "Tất cả"
              ? "Tất cả tác phẩm"
              : `Thể loại: ${selectedCategory}`}
          </Text>
          <Text style={styles.resultCount}>({filtered.length} cuốn sách)</Text>
        </View>

        {filtered.length > 0 ? (
          <BookGrid
            books={filtered}
            onPressBook={onPressBook}
            onAddToCart={onAddToCart}
          />
        ) : (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>
              Chưa có tác phẩm nào thuộc thể loại "{selectedCategory}"
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
  },
  headerSub: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 90, // tránh bị che bởi TabBar (64px)
  },
  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 12,
  },
  resultTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },
  resultCount: {
    fontSize: 13,
    color: "#64748B",
    fontWeight: "500",
  },
  emptyView: {
    paddingVertical: 40,
    alignItems: "center",
  },
  emptyText: {
    color: "#94A3B8",
    fontSize: 14,
  },
});
