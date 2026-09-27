// GIỜ 5 — Bài tập 2 (1 dòng trong màn Giỏ hàng)
// Kỹ thuật: row với 3 vùng tỉ lệ khác nhau — ảnh cố định, tên flex:1 (co giãn),
// số lượng+giá width cố định. Khác BookRowCard (Giờ 1): ở đây giá KHÔNG neo đáy
// cột, mà nằm ngang hàng với tên, bên phải cùng.
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { CartItem } from "../data";

interface CartLineItemProps {
  item: CartItem;
  onUpdateQuantity?: (bookId: number, delta: number) => void;
  onRemoveItem?: (bookId: number) => void;
}

export function CartLineItem({
  item,
  onUpdateQuantity,
  onRemoveItem,
}: CartLineItemProps) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.book.cover }} style={styles.thumb} />

      {/* flex:1 -> chiếm hết phần rộng còn lại sau ảnh, đẩy khối số lượng/giá
          sang tận bên phải dù tên sách ngắn hay dài. */}
      <View style={styles.titleWrap}>
        <Text style={styles.title} numberOfLines={2}>
          {item.book.title}
        </Text>
        <Text style={styles.author}>{item.book.author}</Text>
        <Text style={styles.unitPrice}>
          {item.book.price.toLocaleString()} đ / cuốn
        </Text>
      </View>

      <View style={styles.meta}>
        <Text style={styles.price}>
          {(item.book.price * item.quantity).toLocaleString()} đ
        </Text>

        {onUpdateQuantity ? (
          <View style={styles.qtyBox}>
            <Pressable
              style={styles.qtyBtn}
              onPress={() => onUpdateQuantity(item.book.id, -1)}
              hitSlop={4}
            >
              <Text style={styles.qtyBtnText}>−</Text>
            </Pressable>
            <Text style={styles.qtyVal}>{item.quantity}</Text>
            <Pressable
              style={styles.qtyBtn}
              onPress={() => onUpdateQuantity(item.book.id, 1)}
              hitSlop={4}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </Pressable>
          </View>
        ) : (
          <Text style={styles.qty}>x{item.quantity}</Text>
        )}

        {onRemoveItem && (
          <Pressable
            onPress={() => onRemoveItem(item.book.id)}
            style={styles.removeBtn}
            hitSlop={6}
          >
            <Text style={styles.removeText}>Xoá</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",       // ảnh - tên - số lượng/giá nằm cùng 1 hàng ngang
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 8,
  },
  thumb: {
    width: 48,
    height: 66,                 // ảnh cố định, không co giãn theo flex
    borderRadius: 6,
    backgroundColor: "#EEF2F7",
  },
  titleWrap: {
    flex: 1,                    // co giãn ăn hết phần dư -> khối bên phải luôn dính sát mép phải
  },
  title: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },
  author: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 2,
  },
  unitPrice: {
    fontSize: 11,
    color: "#4338CA",
    marginTop: 2,
  },
  meta: {
    minWidth: 100,              // giữ bề rộng cố định phía bên phải
    alignItems: "flex-end",
    gap: 4,
  },
  qty: {
    fontSize: 12,
    color: "#5B6B7F",
  },
  price: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginTop: 4,
  },
  qtyBtn: {
    width: 24,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF2FF",
  },
  qtyBtnText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#4338CA",
  },
  qtyVal: {
    minWidth: 24,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "700",
    color: "#1E293B",
  },
  removeBtn: {
    marginTop: 2,
  },
  removeText: {
    fontSize: 11,
    color: "#EF4444",
    fontWeight: "600",
  },
});
