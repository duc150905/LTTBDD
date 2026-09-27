// Dữ liệu mẫu dùng chung cho ứng dụng Bookstore Online — Tuần 4 Tổng Hợp
// Phục vụ cho Giờ 4 (ScrollView, SafeAreaView, HomeScreen, BookDetailScreen)
// và Giờ 5 (TabBar, CartScreen, CartLineItem).

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
  category?: string;
  discountPercent?: number; // có giá trị -> vẽ badge "-x%" (Giờ 3)
  isNew?: boolean;          // true -> vẽ badge "Mới" (Giờ 3)
  description: string;      // dùng cho Giờ 4 (màn Chi tiết, đoạn mô tả dài cần cuộn)
}

export const CATEGORIES: string[] = [
  "Tất cả",
  "Văn học",
  "Kinh tế",
  "Thiếu nhi",
  "Kỹ năng sống",
  "Truyện tranh",
  "Ngoại ngữ",
  "Lịch sử",
];

// Dữ liệu sách với độ dài tiêu đề và mô tả đa dạng để kiểm tra tính co giãn của Layout
export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    price: 45000,
    cover: "https://picsum.photos/seed/book1/400/560",
    category: "Thiếu nhi",
    discountPercent: 20,
    description:
      "Cuốn sách kể về hành trình phiêu lưu của chú Dế Mèn, qua đó gửi gắm bài học về lòng dũng cảm, " +
      "sự trưởng thành và tình bạn. Đây là tác phẩm văn học thiếu nhi kinh điển của Việt Nam, được nhiều " +
      "thế hệ độc giả yêu thích và đưa vào chương trình giảng dạy phổ thông.",
  },
  {
    id: 2,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: 89000,
    cover: "https://picsum.photos/seed/book2/400/560",
    category: "Văn học",
    isNew: true,
    description:
      "Câu chuyện ngụ ngôn về chàng chăn cừu Santiago trên hành trình đi tìm kho báu, khám phá ra rằng " +
      "kho báu lớn nhất chính là những bài học có được trên con đường mình đã đi qua.",
  },
  {
    id: 3,
    title: "Sapiens: Lược Sử Loài Người",
    author: "Yuval Noah Harari",
    price: 129000,
    cover: "https://picsum.photos/seed/book3/400/560",
    category: "Lịch sử",
    description:
      "Một góc nhìn tổng quan về lịch sử loài người, từ thời kỳ đồ đá cho đến cuộc cách mạng khoa học " +
      "và công nghệ hiện đại, lý giải vì sao Homo sapiens trở thành loài thống trị hành tinh.",
  },
  {
    id: 4,
    title: "Điều Kỳ Diệu Của Tiệm Tạp Hoá Namiya",
    author: "Higashino Keigo",
    price: 98000,
    cover: "https://picsum.photos/seed/book4/400/560",
    category: "Văn học",
    discountPercent: 15,
    description:
      "Những lá thư gửi đến một tiệm tạp hoá cũ kỹ vượt thời gian, kết nối quá khứ và hiện tại, mang đến " +
      "câu chuyện ấm áp về sự sẻ chia và chữa lành.",
  },
  {
    id: 5,
    title: "Muôn Kiếp Nhân Sinh",
    author: "Nguyên Phong",
    price: 150000,
    cover: "https://picsum.photos/seed/book5/400/560",
    category: "Kỹ năng sống",
    description:
      "Hành trình khám phá luân hồi và nhân quả qua nhiều kiếp sống, dựa trên các nghiên cứu tâm linh " +
      "và những trải nghiệm thực tế sâu sắc của các nhân vật.",
  },
  {
    id: 6,
    title: "Cách Nghĩ Để Thành Công",
    author: "Napoleon Hill",
    price: 79000,
    cover: "https://picsum.photos/seed/book6/400/560",
    category: "Kinh tế",
    isNew: true,
    description:
      "Đúc kết 13 nguyên tắc thành công từ hơn 500 nhân vật thành đạt nhất nước Mỹ đầu thế kỷ 20, " +
      "giúp người đọc xây dựng tư duy thịnh vượng và tự tin đạt được mục tiêu cuộc đời.",
  },
];

export interface CartItem {
  book: Book;
  quantity: number;
}

// Giỏ hàng mẫu ban đầu (Giờ 5 - Bài tập 2: Cart Screen)
export const INITIAL_CART: CartItem[] = [
  { book: BOOKS[0], quantity: 2 },
  { book: BOOKS[1], quantity: 1 },
  { book: BOOKS[3], quantity: 1 },
];

export const CART_ITEMS = INITIAL_CART;
