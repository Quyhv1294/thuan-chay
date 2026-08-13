# Thuần Chay — Redesign

Bản thiết kế lại của **thuanchay.vn**: website thương mại điện tử cho sản phẩm dinh dưỡng thuần thực vật (Mật Táo Đỏ Tâm An, Bột Đậu Hạt Rau Củ, Bột Nêm Thuần Chay), lấy cảm hứng từ tinh thần "Sống thuận tự nhiên, chữa lành tâm thức" nhưng với một hệ thống thiết kế riêng, hiện đại và có chủ đích hơn.

Đây là một dự án **HTML/CSS/JS thuần** (không cần build step, không phụ thuộc framework) để bạn có thể:
- Mở trực tiếp và chỉnh sửa ngay hôm nay.
- Dễ dàng "nâng cấp" từng phần (thêm React/Vue, nối CMS, nối backend thật) khi cần, không phải viết lại từ đầu.
- Đẩy lên bất kỳ server tĩnh nào (Nginx, Vercel, Netlify, GitHub Pages, cPanel...) chỉ bằng cách copy thư mục.

---

## 1. Hướng thiết kế

- **Bảng màu "hiệu thuốc thảo mộc"**: xanh mực đậm (`--ink #1B3328`), giấy dó (`--paper #F6F1E4`), nghệ vàng (`--gold #C4903A`), đất nung (`--clay #9C4A2E`), xanh lá thảo mộc (`--sage #6E8A63`) — gợi liên tưởng đến 20 năm nghiên cứu đông y của Nhà sáng lập, thay vì bảng màu "AI mặc định" (be + cam đất).
- **Chữ**: `Fraunces` (serif có cá tính, dùng cho tiêu đề, trích dẫn) + `Be Vietnam Pro` (sans hỗ trợ đầy đủ dấu tiếng Việt, dùng cho nội dung).
- **Chi tiết đặc trưng ("nhãn thảo mộc")**: mép giấy xé (`clip-path`) phía trên thẻ sản phẩm, con dấu tròn lá bồ đề xoay nhẹ, và đường chia mềm mại hình sóng lúa giữa các section — thay cho các đường kẻ thẳng vô hồn.

Toàn bộ token màu/chữ/khoảng cách nằm ở đầu file `css/style.css`, chỉnh một chỗ là đổi cả site.

---

## 2. Cấu trúc thư mục

```
thuanchay-redesign/
├── index.html                 Trang chủ
├── san-pham.html               Danh sách sản phẩm (lọc, tìm kiếm, sắp xếp)
├── san-pham-chi-tiet.html      Chi tiết sản phẩm (?id=...)
├── cong-dong.html              Danh sách bài viết / cộng đồng
├── bai-viet.html                Chi tiết bài viết (?id=...)
├── gioi-thieu.html             Giới thiệu / câu chuyện thương hiệu
├── lien-he.html                 Liên hệ (form + bản đồ)
├── thanh-toan.html              Thanh toán (minh hoạ, xem mục 4)
├── tai-khoan.html               Đăng nhập / tài khoản (minh hoạ)
├── partials/
│   ├── header.html             Header + menu + mobile drawer (dùng chung mọi trang)
│   └── footer.html             Footer + giỏ hàng (cart drawer) + nút gọi/Zalo
├── css/
│   └── style.css               Toàn bộ design system (tokens, layout, component)
├── js/
│   ├── data.js                  Dữ liệu mẫu: PRODUCTS, ARTICLES, CATEGORIES
│   └── main.js                  Toàn bộ tương tác: menu, giỏ hàng, lọc, tab, form...
├── package.json                 Script chạy dev server (không có dependency ngoài)
└── README.md
```

**Vì sao tách `partials/`?** Header/footer chỉ viết một lần, được `fetch()` và chèn vào mọi trang lúc runtime (xem `loadPartials()` trong `main.js`). Sửa menu một chỗ, tất cả các trang tự cập nhật — không cần công cụ build.

---

## 3. Chạy thử ở máy local

Vì header/footer được nạp bằng `fetch()`, bạn **cần chạy qua một local server** (mở file `index.html` trực tiếp bằng `file://` sẽ bị chặn bởi CORS của trình duyệt).

Cách nhanh nhất (không cần cài gì thêm, chỉ cần Node.js):

```bash
npm run dev
# → mở http://localhost:5173
```

Hoặc dùng Python có sẵn:

```bash
python3 -m http.server 5173
```

Hoặc dùng extension **Live Server** của VS Code.

---

## 4. Kết nối backend thật (khi mở rộng)

Toàn bộ dữ liệu hiện đang nằm trong `js/data.js` (mock). Để lên production với dữ liệu thật:

1. **Sản phẩm / bài viết**: thay các mảng `PRODUCTS`, `ARTICLES` trong `data.js` bằng lời gọi API, ví dụ:
   ```js
   const PRODUCTS = await fetch("/api/products").then(r => r.json());
   ```
   hoặc nối vào một headless CMS (WordPress REST API — vì bản gốc dùng WordPress, Strapi, Sanity...).
2. **Giỏ hàng / đặt hàng**: `main.js` đang lưu giỏ hàng ở `localStorage` (khoá `thuanchay_cart`). Khi có backend, thay các hàm `getCart()/saveCart()` để gọi API giỏ hàng, và nối nút "Đặt hàng" ở `thanh-toan.html` tới API tạo đơn + cổng thanh toán (VNPay, MoMo, ZaloPay...).
3. **Đăng nhập**: `tai-khoan.html` hiện là form minh hoạ — nối vào hệ thống xác thực thật (JWT/session) khi có backend.
4. **Form liên hệ / đăng ký nhận tin**: hiện chỉ hiện thông báo mẫu (`showToast`) — thay bằng gọi API gửi email hoặc CRM.

Vì toàn bộ trang là HTML/CSS/JS thuần, bạn có thể nâng cấp dần từng phần lên React/Next.js sau này mà không phải thiết kế lại — component nào cũng đã có sẵn cấu trúc HTML/CSS rõ ràng để chuyển đổi.

---

## 5. Deploy lên server

Vì đây là site tĩnh, bạn có thể deploy theo bất kỳ cách nào dưới đây:

- **Vercel / Netlify**: kéo thả cả thư mục hoặc kết nối Git repo, không cần cấu hình build.
- **GitHub Pages**: đẩy lên nhánh `main`, bật Pages trỏ vào thư mục gốc.
- **VPS/Nginx**: copy thư mục vào `/var/www/thuanchay`, trỏ `root` của Nginx vào đó.
- **cPanel/shared hosting**: upload qua FTP vào `public_html`.

Vì `fetch()` cần chạy qua HTTP(S) chứ không phải `file://`, mọi phương án deploy ở trên đều hoạt động tốt (server nào cũng phục vụ qua HTTP).

---

## 6. Việc nên làm tiếp theo

- [ ] Thay ảnh placeholder (Unsplash) bằng ảnh sản phẩm thật, tối ưu qua `.webp`.
- [ ] Thêm sitemap.xml + robots.txt khi có domain thật.
- [ ] Gắn Google Analytics / Meta Pixel trước thẻ `</head>`.
- [ ] Viết thêm trang chính sách (giao hàng, đổi trả, bảo mật) theo mẫu `lien-he.html`.
- [ ] Nối cổng thanh toán và đơn vị vận chuyển thật cho `thanh-toan.html`.
