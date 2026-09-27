// GIỜ 5 — Bài tập 2: Màn hình Giỏ hàng
// Đủ 3 vùng theo yêu cầu: nội dung cuộn (danh sách) + thanh tổng tiền cố định
// (không cuộn) + TabBar cố định (vẽ ở App.tsx, không vùng nào chồng lấp vùng nào).
import React from "react";
import { View, ScrollView, Text, Pressable, StyleSheet, Alert } from "react-native";
import { CartLineItem } from "../components/CartLineItem";
import { CartItem } from "../data";

interface CartScreenProps {
  items: CartItem[];
  onUpdateQuantity?: (bookId: number, delta: number) => void;
  onRemoveItem?: (bookId: number) => void;
  onClearCart?: () => void;
  onCheckout?: () => void;
  onGoShopping?: () => void;
}

export function CartScreen({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
  onGoShopping,
}: CartScreenProps) {
  const total = items.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutPress = () => {
    if (onCheckout) {
      onCheckout();
    } else {
      Alert.alert(
        "Thanh toán thành công!",
        `Bạn đã đặt ${totalCount} cuốn sách với tổng số tiền ${total.toLocaleString()} đ. Cảm ơn bạn đã mua hàng!`
      );
    }
  };

  return (
    <View style={styles.screen}>
      {/* VÙNG 1: Header cố định */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.header}>🛒 Giỏ hàng</Text>
          <Text style={styles.subHeader}>
            {totalCount > 0
              ? `${totalCount} sản phẩm trong giỏ`
              : "Chưa có sản phẩm nào"}
          </Text>
        </View>

        {items.length > 0 && onClearCart && (
          <Pressable onPress={onClearCart} style={styles.clearBtn} hitSlop={6}>
            <Text style={styles.clearBtnText}>Xoá hết</Text>
          </Pressable>
        )}
      </View>

      {/* VÙNG 2: Danh sách sản phẩm: CUỘN được (flex:1), nằm GIỮA header và thanh tổng tiền */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {items.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🛍️</Text>
            <Text style={styles.emptyTitle}>Giỏ hàng đang trống</Text>
            <Text style={styles.emptySub}>
              Hãy khám phá kho sách và chọn cho mình những cuốn sách ưng ý nhé!
            </Text>
            {onGoShopping && (
              <Pressable style={styles.shopNowBtn} onPress={onGoShopping}>
                <Text style={styles.shopNowText}>Tiếp tục mua sắm</Text>
              </Pressable>
            )}
          </View>
        ) : (
          items.map((item) => (
            <CartLineItem
              key={item.book.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          ))
        )}
      </ScrollView>

      {/* VÙNG 3: Thanh tổng tiền + nút thanh toán: KHÔNG cuộn, đứng cố định ngay trên
          TabBar (TabBar vẽ riêng ở App.tsx, cả 2 cùng "cố định" nhưng độc lập).
          marginBottom = chiều cao TabBar (64) -> không bị TabBar đè lên. */}
      {items.length > 0 && (
        <View style={styles.totalBar}>
          <View>
            <Text style={styles.totalLabel}>Tổng cộng</Text>
            <Text style={styles.totalValue}>{total.toLocaleString()} đ</Text>
          </View>
          <Pressable style={styles.checkoutButton} onPress={handleCheckoutPress}>
            <Text style={styles.checkoutText}>Thanh toán ({totalCount})</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  header: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
  },
  subHeader: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  clearBtn: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#FEE2E2",
  },
  clearBtnText: {
    color: "#DC2626",
    fontSize: 12,
    fontWeight: "600",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  emptyIcon: {
    fontSize: 56,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#334155",
  },
  emptySub: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
  },
  shopNowBtn: {
    marginTop: 20,
    backgroundColor: "#4338CA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  shopNowText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  totalBar: {
    flexDirection: "row", // tổng tiền bên trái, nút thanh toán bên phải
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    // marginBottom = chiều cao TabBar (64) -> thanh này luôn nổi NGAY TRÊN TabBar,
    // không bị TabBar (position absolute ở tầng App.tsx) đè lên.
    marginBottom: 64,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: -2 },
    elevation: 4,
  },
  totalLabel: {
    fontSize: 12,
    color: "#5B6B7F",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  checkoutButton: {
    backgroundColor: "#4338CA",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
