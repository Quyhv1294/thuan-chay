/* ==========================================================================
   THUẦN CHAY — Mock data layer
   In a production build this file is replaced by real API calls
   (see README §4 "Kết nối backend").
   ========================================================================== */

const PRODUCTS = [
  {
    id: "mat-tao-do-tam-an",
    name: "Mật Táo Đỏ Tâm An",
    category: "Mật Táo Đỏ",
    price: 285000,
    oldPrice: 320000,
    badge: "Bán chạy",
    rating: 4.9,
    reviews: 214,
    img: "img/Mat tao do tam an/1-mat-tao-do-tam-an.png",
    desc: "Cô đặc từ táo đỏ, kỷ tử và mật mía tự nhiên theo công thức gia truyền hơn 20 năm, hỗ trợ bổ huyết, dưỡng khí, ngủ ngon.",
    aff: "https://s.shopee.vn/904MlVq6fJ"
  },
  {
    id: "mat-tao-do-gung",
    name: "Mật Táo Đỏ Tâm An Gừng",
    category: "Mật Táo Đỏ",
    price: 295000,
    oldPrice: null,
    badge: "Mới",
    rating: 4.8,
    reviews: 96,
    img: "img/Mat tao do tam an/1-mat-tao-do-tam-an-gung-1-300x300.png",
    desc: "Thêm gừng tươi cô đặc giúp làm ấm bụng, hỗ trợ tiêu hoá — lựa chọn yêu thích những ngày trở lạnh.",
    aff: "https://s.shopee.vn/9V0dMUXwcE"
  },
  {
    id: "mat-tao-do-ich-mau",
    name: "Mật Táo Đỏ Tâm An Ích Mẫu",
    category: "Mật Táo Đỏ",
    price: 310000,
    oldPrice: 340000,
    badge: "Khuyến mãi",
    rating: 4.9,
    reviews: 158,
    img: "img/Mat tao do tam an/1-mat-tao-do-tam-an-ich-mau-e1780373077714.webp",
    desc: "Kết hợp ích mẫu thảo dược truyền thống, dành riêng cho phụ nữ trong chu kỳ, hỗ trợ điều hoà khí huyết.",
    aff: "https://s.shopee.vn/1125Eui7kk"
  },
  {
    id: "mat-tao-do-hoa-hong",
    name: "Mật Táo Đỏ Tâm An Hoa Hồng",
    category: "Mật Táo Đỏ",
    price: 305000,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 74,
    img: "img/Mat tao do tam an/1-mat-tao-do-tam-an-hoa-hong-1-300x300.png",
    desc: "Hương hoa hồng dịu nhẹ hoà cùng táo đỏ cô đặc — nuông chiều vị giác, đẹp da từ bên trong.",
    aff: "https://s.shopee.vn/AUtAYLPkKn"
  },
  {
    id: "nghe-gao-lut",
    name: "Nghệ Gạo Lứt",
    category: "Bột Đậu Hạt Rau Củ",
    price: 195000,
    oldPrice: 220000,
    badge: "Bán chạy",
    rating: 4.8,
    reviews: 132,
    img: "img/Bot dau hat rau cu/1-nghe-gao-lut-1-300x300.png",
    desc: "Nghệ nếp đỏ kết hợp gạo lứt rang, hỗ trợ dạ dày và làm đẹp da, không chất bảo quản.",
    aff: "https://s.shopee.vn/2VopIKUxkx"
  },
  {
    id: "canxi-vegan",
    name: "Canxi Vegan",
    category: "Bột Đậu Hạt Rau Củ",
    price: 245000,
    oldPrice: null,
    badge: "Mới",
    rating: 4.9,
    reviews: 88,
    img: "img/Bot dau hat rau cu/1-canxi-vegan-1.png",
    desc: "Canxi thực vật chiết xuất từ rong biển, mè đen và hạt óc chó — dễ hấp thu, thân thiện hệ tiêu hoá.",
    aff: "https://s.shopee.vn/9pdTlAEUZq"
  },
  {
    id: "bot-ngu-sen",
    name: "Bột Ngũ Sen",
    category: "Bột Đậu Hạt Rau Củ",
    price: 210000,
    oldPrice: 235000,
    badge: null,
    rating: 4.7,
    reviews: 61,
    img: "img/Bot dau hat rau cu/1-bot-ngu-sen-1-300x300.png",
    desc: "Năm loại hạt sen, đậu và ngũ cốc nguyên bản xay mịn, thanh lọc cơ thể, dễ ngủ, đẹp da.",
    aff: "https://s.shopee.vn/qif2pc8n2"
  },
  {
    id: "vegan-protein",
    name: "Vegan Protein",
    category: "Bột Đậu Hạt Rau Củ",
    price: 350000,
    oldPrice: null,
    badge: "Bán chạy",
    rating: 5.0,
    reviews: 201,
    img: "img/Bot dau hat rau cu/1-vegan-protein-1-300x300.png",
    desc: "Đạm thực vật từ đậu vàng, đậu xanh và hạt bí, không đậu nành, bổ sung dinh dưỡng toàn diện.",
    aff: "https://s.shopee.vn/30lNLqI1ye"
  },
  {
    id: "bot-nem-rau-cu-250g",
    name: "Bột Nêm Rau Củ Tâm An 250g",
    category: "Bột Nêm Thuần Chay",
    price: 89000,
    oldPrice: 99000,
    badge: null,
    rating: 4.6,
    reviews: 47,
    img: "img/Bot nem thuan chay/1-bot-nem-rau-cu-thuan-chay-250g-1-300x300.png",
    desc: "Gói nhỏ 250g tiện mang theo, hỗn hợp rau củ sấy lạnh nghiền mịn, đậm vị tự nhiên, không bột ngọt, không chất bảo quản.",
    aff: "https://s.shopee.vn/qgbMANNHU"
  },
  {
    id: "bot-nem-rau-cu",
    name: "Bột Nêm Rau Củ Tâm An",
    category: "Bột Nêm Thuần Chay",
    price: 85000,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 63,
    img: "img/Bot nem thuan chay/1-bot-nem-rau-cu-thuan-chay-500g-1.png",
    desc: "Hỗn hợp rau củ sấy khô nghiền mịn, thay thế bột ngọt trong gian bếp gia đình bạn.",
    aff: "https://s.shopee.vn/qgbMANNHU"
  },
  {
    id: "mat-tao-do-nhan-sam",
    name: "Mật Táo Đỏ Tâm An Nhân Sâm",
    category: "Mật Táo Đỏ",
    price: 335000,
    oldPrice: 360000,
    badge: "Khuyến mãi",
    rating: 4.9,
    reviews: 119,
    img: "img/Mat tao do tam an/1-mat-tao-do-tam-an-dang-sam-1-300x300.png",
    desc: "Nhân sâm quý kết hợp táo đỏ cô đặc, bồi bổ khí huyết cho người mới ốm dậy, người cao tuổi.",
    aff: "https://s.shopee.vn/50YE0CBXRz"
  },
  {
    id: "ngu-coc-thuc-duong",
    name: "Ngũ Cốc Thực Dưỡng Tâm An",
    category: "Bột Đậu Hạt Rau Củ",
    price: 175000,
    oldPrice: null,
    badge: "Mới",
    rating: 4.6,
    reviews: 39,
    img: "img/Bot dau hat rau cu/1-ngu-coc-thuc-duong-1-300x300.png",
    desc: "Hỗn hợp ngũ cốc, hạt và rau củ nguyên bản theo phương pháp thực dưỡng, thanh lọc, tăng đề kháng, dễ pha cùng nước hoặc sữa hạt.",
    aff: "https://s.shopee.vn/7VFYz3v5LL"
  }
];

const ARTICLES = [
  {
    id: "loi-ich-mat-tao-do",
    tag: "Kiến thức dinh dưỡng",
    title: "7 lợi ích của mật táo đỏ với sức khoẻ phụ nữ",
    excerpt: "Táo đỏ từ lâu đã là vị thuốc quý trong đông y — cùng tìm hiểu vì sao mật táo đỏ cô đặc lại được nhiều chị em tin dùng mỗi ngày.",
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=900&auto=format&fit=crop",
    date: "28/07/2026",
    minutes: 6
  },
  {
    id: "thuc-don-an-chay-7-ngay",
    tag: "Công thức nấu chay",
    title: "Thực đơn ăn chay 7 ngày đủ chất, dễ nấu tại nhà",
    excerpt: "Không cần cầu kỳ, chỉ với nguyên liệu quen thuộc bạn đã có một tuần ăn chay ngon miệng và cân bằng dinh dưỡng.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    date: "19/07/2026",
    minutes: 8
  },
  {
    id: "chon-quan-chay-ngon-sai-gon",
    tag: "Quán chay ngon",
    title: "10 quán chay đáng thử nhất Sài Gòn tuần này",
    excerpt: "Từ quán cơm chay bình dân đến nhà hàng chay fine-dining, đây là danh sách được cộng đồng Thuần Chay bình chọn.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=900&auto=format&fit=crop",
    date: "05/07/2026",
    minutes: 5
  }
];

const CATEGORIES = [
  {
    name: "Mật Táo Đỏ Tâm An",
    slug: "Mật Táo Đỏ",
    img: "img/Mat tao do tam an/1-mat-tao-do-tam-an.png"
  },
  {
    name: "Bột Đậu Hạt Rau Củ",
    slug: "Bột Đậu Hạt Rau Củ",
    img: "img/Bot dau hat rau cu/1-nghe-gao-lut-1-300x300.png"
  },
  {
    name: "Bột Nêm Thuần Chay",
    slug: "Bột Nêm Thuần Chay",
    img: "img/Bot nem thuan chay/1-bot-nem-rau-cu-thuan-chay-500g-1.png"
  }
];

function formatVND(n){
  return n.toLocaleString("vi-VN") + "đ";
}
