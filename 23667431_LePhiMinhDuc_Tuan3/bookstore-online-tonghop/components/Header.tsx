// GIỜ 1 — Bài tập 1: Header ứng dụng BookStore
// Kỹ thuật: flexDirection 'row' + justifyContent 'space-between' + alignItems 'center'
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface HeaderProps {
  cartCount?: number;
  onPressCart?: () => void;
  onPressSearch?: () => void;
}

export function Header({ cartCount = 0, onPressCart, onPressSearch }: HeaderProps) {
  return (
    // Container header: xếp NGANG (row), 2 đầu cách xa nhau (space-between),
    // căn GIỮA theo chiều dọc (center) — đúng 3 thuộc tính yêu cầu của Giờ 1.
    <View style={styles.header}>
      <Text style={styles.logo}>📚 BookStore</Text>

      {/* Nhóm 2 icon bên phải: 1 View con riêng, cũng dùng flexDirection 'row' */}
      <View style={styles.iconGroup}>
        <Pressable onPress={onPressSearch} hitSlop={8}>
          <Text style={styles.icon}>🔍</Text>
        </Pressable>

        <Pressable onPress={onPressCart} hitSlop={8} style={styles.cartIconWrapper}>
          <Text style={styles.icon}>🛒</Text>
          {cartCount > 0 && (
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>{cartCount > 99 ? "99+" : cartCount}</Text>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", // xếp logo và nhóm icon theo hàng ngang
    justifyContent: "space-between", // đẩy 2 đầu ra xa nhau tối đa
    alignItems: "center", // căn giữa theo trục dọc (trục chéo của row)
    height: 56, // chiều cao cố định
    paddingHorizontal: 16, // padding ngang 16
    backgroundColor: "#1E1B4B", // navy/indigo — màu chủ đạo
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  iconGroup: {
    flexDirection: "row", // 2 icon nằm ngang cạnh nhau
    alignItems: "center",
    gap: 16, // khoảng cách đều giữa 2 icon
  },
  cartIconWrapper: {
    position: "relative",
  },
  icon: {
    fontSize: 20,
  },
  headerBadge: {
    position: "absolute",
    top: -6,
    right: -8,
    backgroundColor: "#DC2626",
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  headerBadgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
  },
});
