// GIỜ 2 — Bài tập 1: Danh mục sách (flexWrap & pill chips)
// Kỹ thuật: flexDirection 'row' + flexWrap 'wrap' + gap
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CATEGORIES } from "../data";

interface CategoryChipsProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export function CategoryChips({
  selectedCategory = "Tất cả",
  onSelectCategory,
}: CategoryChipsProps) {
  return (
    <View style={styles.wrap}>
      {CATEGORIES.map((name) => {
        const isSelected = selectedCategory === name;
        return (
          <Pressable
            key={name}
            style={[styles.chip, isSelected && styles.chipActive]}
            onPress={() => onSelectCategory && onSelectCategory(name)}
          >
            {/* Không set width cho Text/View chip -> tự co giãn theo nội dung chữ */}
            <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
              {name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row", // xếp các chip theo hàng...
    flexWrap: "wrap", // ...và tự xuống dòng khi hết chỗ ngang
    gap: 8, // khoảng cách đều cả 2 chiều giữa các chip
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999, // bo tròn lớn -> hình viên thuốc (pill)
    borderWidth: 1,
    borderColor: "#C7D2FE",
    backgroundColor: "#FFFFFF",
  },
  chipActive: {
    backgroundColor: "#4338CA",
    borderColor: "#4338CA",
  },
  chipText: {
    color: "#4338CA",
    fontSize: 13,
    fontWeight: "600",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },
});
