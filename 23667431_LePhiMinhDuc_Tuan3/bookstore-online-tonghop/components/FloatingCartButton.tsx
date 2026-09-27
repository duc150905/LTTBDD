// GIỜ 3 — Bài tập 2: Nút giỏ hàng nổi (Floating Cart Button)
// Kỹ thuật: containing block LỒNG NHAU — số lượng neo theo nút tròn,
// còn nút tròn neo theo toàn màn hình (2 tầng position:'absolute' khác nhau).
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const SIZE = 56;

interface FloatingCartButtonProps {
  count: number;
  onPress: () => void;
}

export function FloatingCartButton({ count, onPress }: FloatingCartButtonProps) {
  return (
    // Nút chính: absolute, neo theo containing block là màn hình cha ngoài cùng
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonIcon}>🛒</Text>

      {/* Số lượng: absolute LẦN 2, neo theo góc của chính nút tròn Pressable */}
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count > 99 ? "99+" : count}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 24,
    right: 20, // neo góc dưới-phải MÀN HÌNH
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2, // bo tròn 1/2 -> hình tròn hoàn hảo
    backgroundColor: "#4338CA",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6, // bóng đổ Android
    shadowColor: "#000", // bóng đổ iOS
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 99,
  },
  buttonIcon: {
    fontSize: 24,
  },
  badge: {
    position: "absolute",
    top: -3,
    right: -3, // neo góc trên-phải của CHÍNH nút tròn
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#DC2626",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});
