// GIỜ 1 — Bài tập 2: Thẻ sách (Book Card) đơn, dạng HÀNG (row)
// Kỹ thuật: ảnh cố định bên trái + cột thông tin flex:1 bên phải, giá neo đáy cột
// bằng justifyContent 'space-between'. Tích hợp DiscountBadge của Giờ 3 trên ảnh bìa.
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Book } from "../data";
import { DiscountBadge } from "./DiscountBadge";

const COVER_WIDTH = 80;
const COVER_HEIGHT = 110;

interface BookRowCardProps {
  book: Book;
  onPress?: () => void;
  onAddToCart?: () => void;
}

export function BookRowCard({ book, onPress, onAddToCart }: BookRowCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* View bọc ảnh bìa: position 'relative' để DiscountBadge neo absolute theo nó */}
      <View style={styles.coverWrapper}>
        <Image source={{ uri: book.cover }} style={styles.cover} />
        <DiscountBadge discountPercent={book.discountPercent} isNew={book.isNew} />
      </View>

      {/* Cột thông tin: flex:1 để chiếm hết phần rộng còn lại */}
      <View style={styles.info}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {book.title}
          </Text>
          <Text style={styles.author}>{book.author}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
          {onAddToCart && (
            <Pressable
              style={styles.addButton}
              onPress={(e) => {
                e.stopPropagation?.();
                onAddToCart();
              }}
            >
              <Text style={styles.addButtonText}>+ Thêm</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", // ảnh bên trái, thông tin bên phải
    padding: 12,
    gap: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  coverWrapper: {
    position: "relative", // điểm tựa cho badge absolute bên trong
    width: COVER_WIDTH,
    height: COVER_HEIGHT,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#EEF2F7",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  info: {
    flex: 1, // chiếm trọn không gian còn lại
    height: COVER_HEIGHT, // bằng chiều cao ảnh để space-between hoạt động
    flexDirection: "column",
    justifyContent: "space-between", // đẩy giá/nút bấm xuống sát đáy cột
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },
  author: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 3,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E1B4B",
  },
  addButton: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#C7D2FE",
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4338CA",
  },
});
