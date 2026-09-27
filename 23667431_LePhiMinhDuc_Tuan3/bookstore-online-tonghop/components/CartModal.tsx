import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { CartItem } from "../data";

interface CartModalProps {
  visible: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (bookId: number, delta: number) => void;
  onRemoveItem: (bookId: number) => void;
  onClearCart: () => void;
}

export function CartModal({
  visible,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartModalProps) {
  if (!visible) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  const totalItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <View style={styles.backdrop}>
      <Pressable style={styles.dimmedArea} onPress={onClose} />

      <View style={styles.modalContent}>
        {/* Tiêu đề & nút đóng */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>🛒 Giỏ hàng của bạn</Text>
            <Text style={styles.headerSubtitle}>
              {totalItemsCount} sản phẩm
            </Text>
          </View>
          <Pressable onPress={onClose} style={styles.closeBtn} hitSlop={8}>
            <Text style={styles.closeBtnText}>✕</Text>
          </Pressable>
        </View>

        {/* Danh sách sản phẩm trong giỏ */}
        {cartItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🛍️</Text>
            <Text style={styles.emptyTitle}>Giỏ hàng đang trống</Text>
            <Text style={styles.emptySub}>
              Hãy chọn những cuốn sách yêu thích để thêm vào giỏ nhé!
            </Text>
          </View>
        ) : (
          <ScrollView
            style={styles.itemsList}
            contentContainerStyle={styles.itemsContent}
            showsVerticalScrollIndicator={false}
          >
            {cartItems.map((item) => (
              <View key={item.book.id} style={styles.cartCard}>
                <Image
                  source={{ uri: item.book.cover }}
                  style={styles.cover}
                />

                <View style={styles.cardInfo}>
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    {item.book.title}
                  </Text>
                  <Text style={styles.itemAuthor}>{item.book.author}</Text>
                  <Text style={styles.itemPrice}>
                    {item.book.price.toLocaleString()} đ
                  </Text>

                  {/* Bộ điều khiển số lượng */}
                  <View style={styles.qtyControlRow}>
                    <View style={styles.qtyBox}>
                      <Pressable
                        style={styles.qtyBtn}
                        onPress={() => onUpdateQuantity(item.book.id, -1)}
                      >
                        <Text style={styles.qtyBtnText}>−</Text>
                      </Pressable>

                      <Text style={styles.qtyValue}>{item.quantity}</Text>

                      <Pressable
                        style={styles.qtyBtn}
                        onPress={() => onUpdateQuantity(item.book.id, 1)}
                      >
                        <Text style={styles.qtyBtnText}>+</Text>
                      </Pressable>
                    </View>

                    <Pressable
                      onPress={() => onRemoveItem(item.book.id)}
                      hitSlop={6}
                    >
                      <Text style={styles.deleteText}>Xoá</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        )}

        {/* Phần chân giỏ hàng: Tổng tiền & Thanh toán */}
        {cartItems.length > 0 && (
          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Tổng thanh toán:</Text>
              <Text style={styles.totalValue}>
                {totalAmount.toLocaleString()} đ
              </Text>
            </View>

            <View style={styles.footerActions}>
              <Pressable
                style={styles.clearBtn}
                onPress={onClearCart}
              >
                <Text style={styles.clearBtnText}>Dọn giỏ</Text>
              </Pressable>

              <Pressable
                style={styles.checkoutBtn}
                onPress={() => {
                  alert(
                    `Đặt hàng thành công!\nTổng tiền: ${totalAmount.toLocaleString()} đ`
                  );
                  onClearCart();
                  onClose();
                }}
              >
                <Text style={styles.checkoutBtnText}>
                  Đặt hàng ngay ({totalItemsCount})
                </Text>
              </Pressable>
            </View>
          </View>
        )}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    justifyContent: "flex-end",
  },
  dimmedArea: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "85%",
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
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
  itemsList: {
    maxHeight: 360,
  },
  itemsContent: {
    padding: 16,
    gap: 12,
  },
  cartCard: {
    flexDirection: "row",
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    padding: 10,
    gap: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  cover: {
    width: 60,
    height: 80,
    borderRadius: 6,
    backgroundColor: "#CBD5E1",
  },
  cardInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
  },
  itemAuthor: {
    fontSize: 11,
    color: "#64748B",
  },
  itemPrice: {
    fontSize: 13,
    fontWeight: "700",
    color: "#4338CA",
  },
  qtyControlRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },
  qtyBtn: {
    width: 28,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
  },
  qtyBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#334155",
  },
  qtyValue: {
    minWidth: 28,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },
  deleteText: {
    fontSize: 12,
    color: "#EF4444",
    fontWeight: "600",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#334155",
  },
  emptySub: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 4,
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    gap: 12,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#DC2626",
  },
  footerActions: {
    flexDirection: "row",
    gap: 10,
  },
  clearBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
  },
  clearBtnText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
  },
  checkoutBtn: {
    flex: 1,
    backgroundColor: "#4338CA",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});
