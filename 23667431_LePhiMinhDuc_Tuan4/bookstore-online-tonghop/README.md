# Bookstore Online — Dự Án Tổng Hợp (Tuần 4)

Thư mục này là phiên bản **tổng hợp toàn diện** các kiến thức và thành phần giao diện từ **Giờ 4** và **Giờ 5** của bài thực hành Tuần 4 môn Lập trình thiết bị di động (LTTBDD).

---

## 🏗️ Cấu Trúc Tổng Hợp Các Giờ

| Giờ | Nội Dung Kỹ Thuật | Thành Phần Trong Ứng Dụng |
| :--- | :--- | :--- |
| **Giờ 4** | **Layout toàn màn hình: ScrollView & SafeAreaView**<br>• Phân chia vùng cố định (Header) và vùng cuộn (`flex: 1`)<br>• Định vị tuyệt đối ngoài luồng cuộn (`FloatingCartButton`)<br>• Màn hình chi tiết với thanh thao tác dính đáy (`bottomBar`) | • **`HomeScreen`**: Trang chủ hoàn chỉnh ghép Header cố định, CategoryChips, BookGrid cuộn mượt và FloatingCartButton nổi.<br>• **`BookDetailScreen`**: Màn hình chi tiết sách toàn màn hình, nút quay lại, ảnh bìa lớn, mô tả dài cuộn mượt mà và thanh "Thêm vào giỏ" cố định đáy. |
| **Giờ 5** | **Bottom Tab Layout & Hoàn thiện ứng dụng**<br>• Thanh Tab Bar cố định đáy màn hình (`position: 'absolute'`, `bottom: 0`, `height: 64`)<br>• Phân chia đều 4 tab bằng `flex: 1`<br>• Màn hình Giỏ hàng 3 vùng độc lập không chồng lấn | • **`TabBar`**: Thanh điều hướng 4 tab (Trang chủ, Danh mục, Giỏ hàng, Tài khoản) kèm badge số lượng giỏ hàng thời gian thực.<br>• **`CartScreen`**: Màn hình giỏ hàng đầy đủ 3 vùng (Header, ScrollView danh sách CartLineItem, thanh Tổng tiền dính đáy trên TabBar).<br>• **`CartLineItem`**: Thẻ dòng sản phẩm hiển thị ảnh, tên, số lượng, giá và nút tăng giảm/xoá. |

---

## 📁 Cấu Trúc Thư Mục

```
bookstore-online-tonghop/
├── assets/                    # Biểu tượng, splash screen
├── components/
│   ├── Header.tsx             # [Giờ 1 + Giờ 4] Header cố định + icon giỏ hàng & tìm kiếm
│   ├── CategoryChips.tsx      # [Giờ 2] Thẻ danh mục dùng flexWrap & lựa chọn danh mục
│   ├── BookGrid.tsx           # [Giờ 2 + Giờ 3] Lưới sách 2 cột kèm DiscountBadge & thêm giỏ
│   ├── DiscountBadge.tsx      # [Giờ 3] Badge định vị absolute trên ảnh bìa
│   ├── FloatingCartButton.tsx # [Giờ 3 + Giờ 4] Nút giỏ hàng nổi góc màn hình (bottom: 80)
│   ├── TabBar.tsx             # [Giờ 5] Thanh Tab Bar cố định đáy (4 tabs + badge giỏ)
│   ├── CartLineItem.tsx       # [Giờ 5] 1 dòng sản phẩm trong giỏ hàng (3 vùng ngang)
│   └── ToastBanner.tsx        # Thông báo Toast khi thao tác thêm/xoá/thanh toán
├── screens/
│   ├── HomeScreen.tsx         # [Giờ 4 - Bài 1] Màn hình Trang chủ hoàn chỉnh
│   ├── BookDetailScreen.tsx   # [Giờ 4 - Bài 2] Màn hình Chi tiết sách toàn màn hình
│   ├── CartScreen.tsx         # [Giờ 5 - Bài 2] Màn hình Giỏ hàng 3 vùng độc lập
│   ├── CategoryScreen.tsx     # [Giờ 5 - Tab 2] Màn hình duyệt sách theo Danh mục
│   └── AccountScreen.tsx      # [Giờ 5 - Tab 4] Màn hình thông tin cá nhân & tài khoản sinh viên
├── data.ts                    # Dữ liệu sách mẫu & giỏ hàng
├── App.tsx                    # Điều hướng chính giữa TabBar & Chi tiết sách
├── app.json                   # Cấu hình Expo
├── package.json               # Danh sách thư viện phụ thuộc
└── tsconfig.json              # Cấu hình TypeScript
```

---

## 🚀 Hướng Dẫn Chạy Thử Ứng Dụng

Mở terminal tại thư mục này và chạy:

```bash
# 1. Di chuyển vào thư mục (nếu chưa ở trong)
cd 23667431_LePhiMinhDuc_Tuan4/bookstore-online-tonghop

# 2. Cài đặt các gói phụ thuộc (nếu chưa có node_modules)
npm install

# 3. Khởi động ứng dụng Expo
npx expo start
```
