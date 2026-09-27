import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function ToastBanner({ message }: { message: string | null }) {
  if (!message) return null;

  return (
    <View style={styles.toastContainer}>
      <Text style={styles.toastText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    top: 66,
    left: 20,
    right: 20,
    backgroundColor: "#1E1B4B",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    zIndex: 9999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
    borderWidth: 1,
    borderColor: "#4338CA",
  },
  toastText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
