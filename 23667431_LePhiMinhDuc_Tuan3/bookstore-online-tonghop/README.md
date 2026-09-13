# Bookstore Online — Dự Án Tổng Hợp (Tuần 3)

Thư mục này là phiên bản **tổng hợp toàn diện** các kiến thức và thành phần giao diện từ **Giờ 1**, **Giờ 2** và **Giờ 3** của bài thực hành Tuần 3 môn Lập trình thiết bị di động (LTTBDD).

---

## 🏗️ Cấu Trúc Tổng Hợp Các Giờ

| Giờ | Nội Dung Kỹ Thuật | Thành Phần Trong Ứng Dụng |
| :--- | :--- | :--- |
| **Giờ 1** | **Nền tảng Flexbox & Layout cơ bản**<br>• `flexDirection: 'row'`<br>• `justifyContent: 'space-between'`<br>• `alignItems: 'center'`<br>• `flex: 1` cho ScrollView | • **`Header`**: Cố định phía trên cùng.<br>• **`BookRowCard`**: Danh sách sách đề xuất dạng thẻ nằm ngang cuộn trong ScrollView. |
| **Giờ 2** | **Kích thước, Wrap & Lưới sản phẩm**<br>• `flexWrap: 'wrap'`<br>• `gap`<br>• `width: '48%'` (2 cột) | • **`CategoryChips`**: Danh mục thể loại thẻ bo tròn tự xuống hàng khi tràn.<br>• **`BookGrid`**: Lưới sách chia 2 cột co giãn linh hoạt. |
| **Giờ 3** | **Định vị nâng cao (Absolute / Relative)**<br>• Containing block lồng nhau<br>• `position: 'absolute'` neo góc | • **`DiscountBadge`**: Huy hiệu giảm giá và nhãn "Mới" nổi trên góc ảnh bìa.<br>• **`FloatingCartButton`**: Nút giỏ hàng nổi cố định góc dưới bên phải màn hình. |

---

## 📁 Cấu Trúc Thư Mục

```
bookstore-online-tonghop/
├── assets/                    # Biểu tượng, splash screen
├── components/
│   ├── Header.tsx             # [Giờ 1] Header cố định + icon giỏ hàng & tìm kiếm
│   ├── BookRowCard.tsx        # [Giờ 1 + Giờ 3] Thẻ sách nằm ngang có DiscountBadge
│   ├── CategoryChips.tsx      # [Giờ 2] Thẻ danh mục dùng flexWrap
│   ├── BookGrid.tsx           # [Giờ 2 + Giờ 3] Lưới sách 2 cột kèm DiscountBadge
│   ├── DiscountBadge.tsx      # [Giờ 3] Badge định vị absolute trên ảnh bìa
│   └── FloatingCartButton.tsx # [Giờ 3] Nút giỏ hàng nổi góc màn hình
├── data.ts                    # Dữ liệu sách mẫu & danh mục
├── App.tsx                    # Màn hình chính kết hợp toàn bộ layout
├── app.json                   # Cấu hình Expo
├── package.json               # Danh sách thư viện phụ thuộc
└── tsconfig.json              # Cấu hình TypeScript
```

---

## 🚀 Hướng Dẫn Chạy Thử Ứng Dụng

Mở terminal tại thư mục này và chạy:

```bash
# 1. Di chuyển vào thư mục (nếu chưa ở trong)
cd bookstore-online-tonghop

# 2. Cài đặt các gói phụ thuộc (nếu chưa có node_modules)
npm install

# 3. Khởi động ứng dụng Expo
npx expo start
```
