// GIỜ 4 — Bài tập 2: Màn hình Chi tiết sách
// Cấu trúc 3 vùng: Thanh quay lại trên cùng, ScrollView flex:1 chứa ảnh bìa lớn + mô tả dài,
// và thanh "Thêm vào giỏ" dưới cùng cố định nằm NGOÀI ScrollView.
import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { Book } from "../data";
import { DiscountBadge } from "../components/DiscountBadge";

export function BookDetailScreen({
  book,
  onBack,
  onAddToCart,
}: {
  book: Book;
  onBack: () => void;
  onAddToCart: () => void;
}) {
  return (
    <View style={styles.screen}>
      {/* 1. Thanh quay lại */}
      <View style={styles.topNav}>
        <Pressable style={styles.backButton} onPress={onBack} hitSlop={10}>
          <Text style={styles.backText}>← Quay lại</Text>
        </Pressable>
        {book.category && (
          <View style={styles.categoryPill}>
            <Text style={styles.categoryPillText}>{book.category}</Text>
          </View>
        )}
      </View>

      {/* 2. ScrollView flex:1 chứa TOÀN BỘ nội dung dài (ảnh + tên + mô tả) để phần
          mô tả dài không đẩy tràn thanh "Thêm vào giỏ" cố định phía dưới. */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.coverWrapper}>
          <Image
            source={{ uri: book.cover }}
            // alignSelf:'center' ghi đè alignItems của View cha để ảnh được căn giữa
            style={styles.cover}
          />
          <DiscountBadge
            discountPercent={book.discountPercent}
            isNew={book.isNew}
          />
        </View>

        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>Tác giả: {book.author}</Text>
        <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>

        <View style={styles.divider} />

        <Text style={styles.descLabel}>Giới thiệu nội dung</Text>
        <Text style={styles.description}>{book.description}</Text>
      </ScrollView>

      {/* 3. Thanh dưới cùng: row, 2 đầu cách xa nhau, KHÔNG nằm trong ScrollView
          -> luôn đứng yên một chỗ dù nội dung mô tả dài bao nhiêu. */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>Giá bán:</Text>
          <Text style={styles.bottomPrice}>{book.price.toLocaleString()} đ</Text>
        </View>
        <Pressable style={styles.addButton} onPress={onAddToCart}>
          <Text style={styles.addButtonText}>🛒 Thêm vào giỏ</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  backText: {
    color: "#4338CA",
    fontWeight: "700",
    fontSize: 15,
  },
  categoryPill: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryPillText: {
    color: "#4338CA",
    fontSize: 12,
    fontWeight: "600",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  coverWrapper: {
    alignSelf: "center",
    width: "65%",
    aspectRatio: 3 / 4,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    backgroundColor: "#EEF2F7",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },
  author: {
    marginTop: 4,
    fontSize: 14,
    color: "#5B6B7F",
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 16,
  },
  descLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#374151",
  },
  bottomBar: {
    flexDirection: "row", // giá bên trái, nút bên phải
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: -2 },
    elevation: 4,
  },
  priceLabel: {
    fontSize: 11,
    color: "#6B7280",
  },
  bottomPrice: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  addButton: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
