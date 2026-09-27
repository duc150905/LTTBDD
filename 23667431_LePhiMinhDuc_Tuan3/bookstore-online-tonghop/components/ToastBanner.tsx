import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ToastBannerProps {
  message: string | null;
}

export function ToastBanner({ message }: ToastBannerProps) {
  if (!message) return null;

  return (
    <View style={styles.toastContainer}>
      <View style={styles.toast}>
        <Text style={styles.toastText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    top: 70,
    left: 20,
    right: 20,
    zIndex: 1001,
    alignItems: "center",
  },
  toast: {
    backgroundColor: "#0F172A",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  toastText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
});
