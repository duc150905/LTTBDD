import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Book } from "../data";
import { DiscountBadge } from "./DiscountBadge";

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

export function BookDetailModal({
  book,
  onClose,
  onAddToCart,
}: BookDetailModalProps) {
  if (!book) return null;

  return (
    <View style={styles.backdrop}>
      <Pressable style={styles.dimmedArea} onPress={onClose} />

      <View style={styles.modalContent}>
        {/* Nút đóng */}
        <View style={styles.topBar}>
          <Text style={styles.categoryPill}>
            {book.category ?? "Sách chọn lọc"}
          </Text>
          <Pressable onPress={onClose} style={styles.closeBtn} hitSlop={8}>
            <Text style={styles.closeBtnText}>✕</Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Ảnh bìa to có nhãn Giảm giá / Mới (Giờ 3) */}
          <View style={styles.coverWrap}>
            <Image source={{ uri: book.cover }} style={styles.coverImage} />
            <DiscountBadge
              discountPercent={book.discountPercent}
              isNew={book.isNew}
            />
          </View>

          {/* Thông tin chi tiết */}
          <View style={styles.infoWrap}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>Tác giả: {book.author}</Text>
            <Text style={styles.price}>
              {book.price.toLocaleString()} đ
            </Text>

            <View style={styles.divider} />

            <Text style={styles.descTitle}>Giới thiệu nội dung</Text>
            <Text style={styles.descContent}>{book.description}</Text>
          </View>
        </ScrollView>

        {/* Nút thêm vào giỏ */}
        <View style={styles.bottomBar}>
          <Pressable
            style={styles.addButton}
            onPress={() => {
              onAddToCart(book);
              onClose();
            }}
          >
            <Text style={styles.addButtonText}>🛒 Thêm vào giỏ hàng</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    zIndex: 999,
    justifyContent: "flex-end",
  },
  dimmedArea: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "85%",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  categoryPill: {
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    fontSize: 12,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtnText: {
    fontSize: 16,
    color: "#475569",
    fontWeight: "700",
  },
  scrollArea: {
    maxHeight: 400,
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
    gap: 16,
  },
  coverWrap: {
    position: "relative",
    width: 140,
    height: 196,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    backgroundColor: "#E2E8F0",
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  infoWrap: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },
  author: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1E1B4B",
    textAlign: "center",
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 14,
  },
  descTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 6,
  },
  descContent: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 20,
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  addButton: {
    backgroundColor: "#4338CA",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
