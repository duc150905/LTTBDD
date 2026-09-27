// GIỜ 2 — Bài tập 2: Lưới sản phẩm (Grid) nhiều cột
// Kỹ thuật: flexDirection 'row' + flexWrap 'wrap' + width 48% (2 cột)
// Kết hợp GIỜ 3: DiscountBadge nổi góc ảnh bìa (position absolute lồng relative)
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Book } from "../data";
import { DiscountBadge } from "./DiscountBadge";

interface BookGridProps {
  books: Book[];
  onPressBook?: (id: number) => void;
  onAddToCart?: (book: Book) => void;
}

export function BookGrid({ books, onPressBook, onAddToCart }: BookGridProps) {
  return (
    <View style={styles.grid}>
      {books.map((book) => (
        <Pressable
          key={book.id}
          style={styles.item}
          onPress={() => onPressBook && onPressBook(book.id)}
        >
          {/* View bọc ảnh bìa: position 'relative' để DiscountBadge neo absolute theo nó */}
          <View style={styles.coverWrap}>
            <Image source={{ uri: book.cover }} style={styles.cover} />
            <DiscountBadge discountPercent={book.discountPercent} isNew={book.isNew} />
          </View>

          <Text style={styles.title} numberOfLines={2}>
            {book.title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>
            {book.author}
          </Text>

          <View style={styles.bottomRow}>
            <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
            {onAddToCart && (
              <Pressable
                style={styles.addMiniBtn}
                onPress={(e) => {
                  e.stopPropagation?.();
                  onAddToCart(book);
                }}
              >
                <Text style={styles.addMiniBtnText}>+</Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row", // xếp các card theo hàng...
    flexWrap: "wrap", // ...tự rớt dòng tạo thành lưới
    justifyContent: "space-between", // chia đều 2 cột sang 2 mép
  },
  item: {
    width: "48%", // mỗi cột chiếm gần 1 nửa chiều rộng
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  coverWrap: {
    position: "relative", // điểm neo containing block cho DiscountBadge
    width: "100%",
    aspectRatio: 3 / 4, // giữ tỷ lệ ảnh chuẩn không lo méo
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#EEF2F7",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },
  author: {
    marginTop: 2,
    fontSize: 11,
    color: "#64748B",
  },
  bottomRow: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
  },
  addMiniBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4338CA",
    alignItems: "center",
    justifyContent: "center",
  },
  addMiniBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16,
  },
});
