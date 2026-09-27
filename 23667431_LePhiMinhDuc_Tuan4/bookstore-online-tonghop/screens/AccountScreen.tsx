// Tab "Tài khoản" trong ứng dụng Bookstore Online — Tuần 4 Tổng Hợp
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export function AccountScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👤 Thông Tin Cá Nhân</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Thẻ sinh viên thực hiện */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrap}>
            <Text style={styles.avatarIcon}>👨‍🎓</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.studentName}>Lê Phí Minh Đức</Text>
            <Text style={styles.studentId}>MSSV: 23667431</Text>
            <Text style={styles.courseName}>Môn: Lập trình thiết bị di động</Text>
            <View style={styles.badgeWrap}>
              <Text style={styles.badgeText}>Tuần 4 — Bài Tổng Hợp</Text>
            </View>
          </View>
        </View>

        {/* Khối thống kê nhanh */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Đơn hàng</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Yêu thích</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>350</Text>
            <Text style={styles.statLabel}>Điểm thưởng</Text>
          </View>
        </View>

        {/* Mục tuỳ chọn chức năng */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cài đặt & Tiện ích</Text>

          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>📦</Text>
            <Text style={styles.menuText}>Lịch sử mua hàng</Text>
            <Text style={styles.menuArrow}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>❤️</Text>
            <Text style={styles.menuText}>Danh sách sách yêu thích</Text>
            <Text style={styles.menuArrow}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>📍</Text>
            <Text style={styles.menuText}>Địa chỉ nhận hàng</Text>
            <Text style={styles.menuArrow}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>💳</Text>
            <Text style={styles.menuText}>Phương thức thanh toán</Text>
            <Text style={styles.menuArrow}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>Cài đặt ứng dụng</Text>
            <Text style={styles.menuArrow}>›</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 90, // tránh bị TabBar 64px che
    gap: 16,
  },
  profileCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    gap: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  avatarWrap: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#C7D2FE",
  },
  avatarIcon: {
    fontSize: 34,
  },
  profileInfo: {
    flex: 1,
    gap: 2,
  },
  studentName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  studentId: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4338CA",
  },
  courseName: {
    fontSize: 12,
    color: "#64748B",
  },
  badgeWrap: {
    alignSelf: "flex-start",
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 4,
  },
  badgeText: {
    color: "#059669",
    fontSize: 11,
    fontWeight: "700",
  },
  statsRow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1E1B4B",
  },
  statLabel: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#E2E8F0",
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 14,
    color: "#334155",
    fontWeight: "500",
  },
  menuArrow: {
    fontSize: 18,
    color: "#94A3B8",
    fontWeight: "700",
  },
});
