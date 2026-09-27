// GIỜ 3 — Bài tập 2: Nút giỏ hàng nổi (Floating Cart Button)
// Kỹ thuật: containing block LỒNG NHAU — số lượng neo theo nút tròn,
// còn nút tròn neo theo toàn màn hình (2 tầng position:'absolute' khác nhau).
// Trong Tuần 4 Tổng Hợp: bottom: 80 để nổi hoàn hảo phía TRÊN TabBar cố định (64px).
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const SIZE = 56;

export function FloatingCartButton({
  count,
  onPress,
  bottom = 80,
}: {
  count: number;
  onPress: () => void;
  bottom?: number;
}) {
  return (
    // Nút chính: absolute, neo theo containing block là màn hình cha gần nhất
    // có position khác 'static' (ở đây là View ngoài cùng của mỗi màn hình).
    <Pressable style={[styles.button, { bottom }]} onPress={onPress}>
      <Text style={styles.buttonIcon}>🛒</Text>

      {/* Số lượng: absolute LẦN 2, nhưng lần này containing block là chính
          Pressable nút tròn ở trên (vì nó cũng có vị trí không 'static'). */}
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 20,                // neo góc dưới-phải MÀN HÌNH
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,   // width = height + bo tròn 1 nửa -> hình tròn tuyệt đối
    backgroundColor: "#4338CA",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,             // đổ bóng nổi bật trên Android
    shadowColor: "#000",      // đổ bóng trên iOS/web
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    zIndex: 10,
  },
  buttonIcon: {
    fontSize: 24,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,                // neo góc trên-phải của CHÍNH nút tròn
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#DC2626",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});
