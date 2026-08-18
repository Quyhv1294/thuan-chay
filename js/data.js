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
    aff: "https://s.shopee.vn/904MlVq6fJ",
    fullDesc: "Mật Táo Đỏ Tâm An là sản phẩm chủ lực của Thuần Chay, cô đặc từ táo đỏ, kỷ tử và mật mía nguyên chất theo công thức gia truyền hơn 20 năm. Vị ngọt thanh tự nhiên, không gắt, phù hợp dùng hằng ngày cho cả gia đình.",
    usage: "Dùng trực tiếp 10–15ml mỗi lần, ngày 1–2 lần vào buổi sáng hoặc trước khi ngủ. Có thể pha cùng nước ấm hoặc nước lọc. Bảo quản nơi khô ráo, thoáng mát, sau khi mở nắp nên dùng trong vòng 30 ngày.",
    reviewsList: [
      { text: "Mình uống Mật Táo Đỏ Tâm An được 2 tháng, cảm giác ngủ ngon hơn hẳn, da cũng hồng hào hơn.", author: "Ngọc Hân", location: "TP. Hồ Chí Minh" },
      { text: "Vị ngọt thanh dễ uống, không gắt như các loại táo đỏ khác mình từng dùng.", author: "Thanh Trúc", location: "Hà Nội" }
    ]
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
    aff: "https://s.shopee.vn/9V0dMUXwcE",
    fullDesc: "Kết hợp gừng tươi cô đặc cùng táo đỏ, sản phẩm mang vị ấm nhẹ đặc trưng, giúp làm ấm bụng và hỗ trợ tiêu hoá — lựa chọn được yêu thích vào những ngày trời se lạnh.",
    usage: "Pha 10–15ml cùng 100ml nước ấm, uống vào buổi sáng hoặc sau bữa ăn để hỗ trợ tiêu hoá tốt hơn. Không dùng cho người có tiền sử dị ứng gừng.",
    reviewsList: [
      { text: "Vị gừng ấm nhẹ chứ không cay gắt, uống buổi sáng thấy bụng dễ chịu hẳn.", author: "Hoài Thương", location: "Đà Nẵng" },
      { text: "Mùa lạnh mình hay bị lạnh bụng, từ khi dùng sản phẩm này thấy đỡ hơn nhiều.", author: "Kim Ngân", location: "Cần Thơ" }
    ]
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
    aff: "https://s.shopee.vn/1125Eui7kk",
    fullDesc: "Sản phẩm kết hợp thảo dược ích mẫu truyền thống cùng táo đỏ cô đặc, được nghiên cứu dành riêng cho phụ nữ trong chu kỳ, hỗ trợ điều hoà khí huyết và giảm cảm giác khó chịu những ngày nhạy cảm.",
    usage: "Dùng 15ml mỗi lần, ngày 2 lần vào các ngày trong chu kỳ hoặc trước chu kỳ 3–5 ngày để đạt hiệu quả tốt nhất. Có thể dùng trực tiếp hoặc pha cùng nước ấm.",
    reviewsList: [
      { text: "Mình hay đau bụng những ngày đèn đỏ, dùng sản phẩm này đều đặn thấy nhẹ nhàng hơn hẳn.", author: "Phương Anh", location: "TP. Hồ Chí Minh" },
      { text: "Vị dễ uống, không có mùi thảo dược nồng như mình lo lắng ban đầu.", author: "Bảo Trâm", location: "Hải Phòng" }
    ]
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
    aff: "https://s.shopee.vn/AUtAYLPkKn",
    fullDesc: "Hương hoa hồng dịu nhẹ hoà quyện cùng táo đỏ cô đặc tạo nên hương vị tinh tế, nhẹ nhàng — không chỉ chăm sóc sức khoẻ mà còn nuông chiều vị giác mỗi ngày.",
    usage: "Dùng 10–15ml mỗi lần, có thể uống lạnh vào mùa hè hoặc pha ấm vào mùa đông. Thích hợp dùng như một thức uống thư giãn vào buổi tối.",
    reviewsList: [
      { text: "Mùi hoa hồng thơm nhẹ chứ không nồng, mình hay uống buổi tối trước khi ngủ.", author: "Yến Nhi", location: "TP. Hồ Chí Minh" },
      { text: "Đóng chai đẹp, hương vị sang, mua tặng mẹ cũng rất hợp.", author: "Thuỳ Dương", location: "Hà Nội" }
    ]
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
    aff: "https://s.shopee.vn/2VopIKUxkx",
    fullDesc: "Nghệ nếp đỏ nguyên chất kết hợp gạo lứt rang thơm, hỗ trợ làm dịu dạ dày và nuôi dưỡng làn da từ bên trong — phù hợp dùng đều đặn mỗi sáng.",
    usage: "Hoà tan 2 muỗng cà phê (khoảng 10g) với 150ml nước ấm, khuấy đều trước khi uống. Dùng vào buổi sáng trước bữa ăn 30 phút để đạt hiệu quả tốt nhất với dạ dày.",
    reviewsList: [
      { text: "Mình bị đau dạ dày, uống nghệ gạo lứt này đều đặn 1 tháng thấy dễ chịu hơn nhiều.", author: "Thu Hà", location: "Hà Nội" },
      { text: "Mùi thơm gạo lứt rất dễ chịu, không tanh nồng mùi nghệ như một số loại khác.", author: "Anh Thư", location: "TP. Hồ Chí Minh" }
    ]
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
    aff: "https://s.shopee.vn/9pdTlAEUZq",
    fullDesc: "Canxi thực vật chiết xuất từ rong biển, mè đen và hạt óc chó, dễ hấp thu và thân thiện với hệ tiêu hoá — lựa chọn phù hợp cho người ăn chay cần bổ sung canxi tự nhiên hằng ngày.",
    usage: "Hoà 1–2 muỗng cà phê với 150–200ml nước ấm hoặc sữa hạt, uống vào buổi sáng hoặc tối trước khi ngủ. Nên dùng đều đặn ít nhất 4–6 tuần để cảm nhận hiệu quả rõ rệt.",
    reviewsList: [
      { text: "Mình ăn chay trường nên hay lo thiếu canxi, dùng sản phẩm này thấy yên tâm hơn hẳn.", author: "Diệu Linh", location: "TP. Hồ Chí Minh" },
      { text: "Không bị tanh mùi rong biển như mình lo, pha với sữa hạt uống rất ngon.", author: "Gia Hân", location: "Nha Trang" }
    ]
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
    aff: "https://s.shopee.vn/qif2pc8n2",
    fullDesc: "Năm loại hạt sen, đậu và ngũ cốc nguyên bản được xay mịn, hỗ trợ thanh lọc cơ thể, dễ ngủ và làm đẹp da — món ăn nhẹ lành mạnh cho cả gia đình.",
    usage: "Hoà 2–3 muỗng canh với 200ml nước ấm hoặc nấu cùng nước sôi thành cháo sánh mịn. Có thể dùng làm bữa sáng hoặc bữa phụ buổi tối để hỗ trợ giấc ngủ ngon hơn.",
    reviewsList: [
      { text: "Mình hay mất ngủ, ăn bột ngũ sen buổi tối thấy ngủ sâu hơn hẳn.", author: "Cẩm Tú", location: "Huế" },
      { text: "Vị bùi thơm hạt sen, nấu sánh mịn, cả nhà mình ai cũng thích.", author: "Hồng Nhung", location: "TP. Hồ Chí Minh" }
    ]
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
    aff: "https://s.shopee.vn/30lNLqI1ye",
    fullDesc: "Đạm thực vật chiết xuất từ đậu vàng, đậu xanh và hạt bí, không chứa đậu nành, bổ sung dinh dưỡng toàn diện cho người tập luyện thể thao hoặc cần tăng cường năng lượng.",
    usage: "Pha 1 muỗng gạt (khoảng 30g) với 250–300ml nước hoặc sữa hạt, lắc đều. Dùng sau khi tập luyện 30 phút hoặc thay thế bữa phụ giàu đạm trong ngày.",
    reviewsList: [
      { text: "Mình tập gym ăn chay trường, dùng Vegan Protein này thấy phục hồi cơ tốt, không bị tanh mùi đậu.", author: "Anh Tuấn", location: "Đà Nẵng" },
      { text: "Pha rất dễ tan, không bị vón cục như vài loại protein thực vật mình từng thử.", author: "Hải Đăng", location: "TP. Hồ Chí Minh" }
    ]
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
    aff: "https://s.shopee.vn/qgbMANNHU",
    fullDesc: "Gói nhỏ 250g tiện lợi, hỗn hợp rau củ sấy lạnh nghiền mịn giữ trọn vị ngọt tự nhiên — giải pháp thay thế bột ngọt an toàn cho gian bếp gia đình, đặc biệt phù hợp mang theo khi đi xa.",
    usage: "Nêm 1–2 muỗng cà phê vào món canh, xào hoặc kho tuỳ khẩu vị, nêm nếm lại trước khi tắt bếp. Bảo quản nơi khô ráo, đóng kín nắp sau mỗi lần dùng để giữ độ tươi ngon.",
    reviewsList: [
      { text: "Gói nhỏ gọn tiện mang đi công tác, nêm canh đậm đà mà không cần bột ngọt.", author: "Bích Ngọc", location: "Cần Thơ" },
      { text: "Con nít nhà mình ăn cũng yên tâm, vị ngọt tự nhiên chứ không gắt hoá chất.", author: "Minh Thư", location: "Hà Nội" }
    ]
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
    aff: "https://s.shopee.vn/qgbMANNHU",
    fullDesc: "Hũ lớn 500g dùng được lâu dài, hỗn hợp rau củ sấy khô nghiền mịn từ cà rốt, bí đỏ, củ dền và rau xanh — thay thế hoàn toàn bột ngọt trong các món canh, xào, kho hằng ngày.",
    usage: "Nêm 1–2 muỗng cà phê cho mỗi phần ăn 2–3 người, có thể gia giảm tuỳ khẩu vị. Dùng được cho cả món chay và món mặn, phù hợp nấu ăn cho trẻ nhỏ và người ăn kiêng muối.",
    reviewsList: [
      { text: "Nhà mình chuyển hẳn sang dùng bột nêm này thay bột ngọt, nấu món gì cũng đậm đà tự nhiên.", author: "Thu Trang", location: "TP. Hồ Chí Minh" },
      { text: "Hũ to dùng được cả tháng, giá hợp lý mà chất lượng ổn định.", author: "Văn Hùng", location: "Biên Hoà" }
    ]
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
    aff: "https://s.shopee.vn/50YE0CBXRz",
    fullDesc: "Kết hợp nhân sâm quý cùng táo đỏ cô đặc, sản phẩm hướng đến người mới ốm dậy, người cao tuổi hoặc người cần bồi bổ khí huyết sau thời gian làm việc căng thẳng.",
    usage: "Dùng 15–20ml mỗi lần, ngày 1 lần vào buổi sáng khi bụng đói để cơ thể hấp thu dưỡng chất tốt nhất. Người huyết áp cao nên tham khảo ý kiến bác sĩ trước khi dùng.",
    reviewsList: [
      { text: "Mua cho ba mẹ dùng sau đợt ốm, cả hai đều khen thấy khoẻ hơn, ăn ngủ tốt hơn.", author: "Minh Đức", location: "Cần Thơ" },
      { text: "Vị đậm hơn các loại mật táo đỏ khác, uống vào thấy ấm người.", author: "Quốc Bảo", location: "Đà Nẵng" }
    ]
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
    aff: "https://s.shopee.vn/7VFYz3v5LL",
    fullDesc: "Hỗn hợp ngũ cốc, hạt và rau củ nguyên bản theo phương pháp thực dưỡng truyền thống, không chất bảo quản, phù hợp cho bữa sáng nhanh gọn hoặc bữa phụ lành mạnh trong ngày.",
    usage: "Hoà 3 muỗng canh với 200ml nước ấm hoặc sữa hạt, khuấy đều đến khi sánh mịn. Có thể thêm hạt chia hoặc trái cây tươi để tăng hương vị.",
    reviewsList: [
      { text: "Ăn sáng bằng ngũ cốc này thấy no lâu, không bị đói giữa buổi như trước.", author: "Thảo Vy", location: "Hà Nội" },
      { text: "Vị ngũ cốc thơm bùi tự nhiên, không ngọt gắt như các loại đóng gói công nghiệp.", author: "Đình Phong", location: "TP. Hồ Chí Minh" }
    ]
  }
];

const ARTICLES = [
  // ---- Món chay ngon ----
  {
    id: "thuc-don-an-chay-7-ngay",
    tag: "Món chay ngon",
    title: "Thực đơn ăn chay 7 ngày đủ chất, dễ nấu tại nhà",
    excerpt: "Không cần cầu kỳ, chỉ với nguyên liệu quen thuộc bạn đã có một tuần ăn chay ngon miệng và cân bằng dinh dưỡng.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    date: "19/07/2026",
    minutes: 8,
    body: `<p>Nhiều người mới bắt đầu ăn chay thường bối rối không biết nên ăn gì mỗi ngày để vừa ngon miệng, vừa đủ chất. Thực đơn 7 ngày dưới đây được đội ngũ Thuần Chay xây dựng dựa trên nguyên tắc đơn giản: nguyên liệu dễ tìm, cách nấu không cầu kỳ, nhưng vẫn cân bằng đạm — tinh bột — chất xơ.</p>
    <h2>Nguyên tắc xây dựng thực đơn</h2>
    <p>Mỗi bữa chính nên có ít nhất một nguồn đạm thực vật (đậu, đậu hũ, nấm), một phần tinh bột nguyên cám (gạo lứt, yến mạch) và rau củ nhiều màu sắc. Xen kẽ các món luộc, hấp, xào nhanh để tránh ngán và giữ trọn dưỡng chất.</p>
    <p>Gợi ý nhanh cho 7 ngày: thứ 2 đậu hũ sốt cà chua, thứ 3 canh rau củ nấm, thứ 4 cơm gạo lứt đậu đen, thứ 5 bún riêu chay, thứ 6 salad đậu gà, thứ 7 lẩu nấm thập cẩm, chủ nhật cháo yến mạch rau củ.</p>
    <blockquote>"Ăn chay đủ chất không khó — chỉ cần đa dạng nguyên liệu và lắng nghe cơ thể mỗi ngày."</blockquote>
    <p>Nếu bận rộn, bạn có thể kết hợp thêm Bột Đậu Hạt Rau Củ hoặc Bột Nêm Rau Củ Tâm An để rút ngắn thời gian chế biến mà vẫn đảm bảo dinh dưỡng cho cả tuần.</p>`
  },
  {
    id: "chon-quan-chay-ngon-sai-gon",
    tag: "Món chay ngon",
    title: "10 quán chay đáng thử nhất Sài Gòn tuần này",
    excerpt: "Từ quán cơm chay bình dân đến nhà hàng chay fine-dining, đây là danh sách được cộng đồng Thuần Chay bình chọn.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=900&auto=format&fit=crop",
    date: "05/07/2026",
    minutes: 5,
    body: `<p>Sài Gòn là thiên đường của người ăn chay với hàng trăm quán ăn đa dạng phong cách — từ cơm chay bình dân vỉa hè đến nhà hàng chay fine-dining. Dưới đây là những gợi ý được cộng đồng Thuần Chay bình chọn nhiều nhất tuần qua.</p>
    <h2>Tiêu chí lựa chọn</h2>
    <p>Danh sách được tổng hợp dựa trên phản hồi thực tế từ cộng đồng hơn 40.000 thành viên trong nhóm "Vì Một Thế Giới Trường Chay" — ưu tiên các quán có nguyên liệu tươi sạch, giá cả hợp lý và không gian thoải mái.</p>
    <p>Từ các quán cơm chay quận 3, quán bún chay quận Phú Nhuận cho đến những nhà hàng chay cao cấp ở quận 1 — mỗi nơi đều mang một phong vị riêng, phù hợp cho cả bữa ăn nhanh lẫn buổi hẹn hò, họp mặt gia đình.</p>
    <p>Bạn có quán chay yêu thích muốn giới thiệu? Hãy chia sẻ cùng cộng đồng tại congdong.thuanchay.vn để lan toả những địa chỉ ăn chay ngon đến nhiều người hơn.</p>`
  },
  {
    id: "mon-chay-dai-tiec",
    tag: "Món chay ngon",
    title: "3 món chay đãi tiệc nhìn sang, làm cực dễ",
    excerpt: "Không cần tay nghề đầu bếp, chỉ với vài bước đơn giản là có ngay mâm cỗ chay đẹp mắt, đãi khách tự tin.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    date: "22/06/2026",
    minutes: 7,
    body: `<p>Không cần tay nghề đầu bếp, chỉ với vài nguyên liệu quen thuộc và một chút khéo léo trong cách trình bày, bạn hoàn toàn có thể tự tay chuẩn bị mâm cỗ chay đẹp mắt để đãi khách.</p>
    <h2>1. Nấm đông cô nhồi đậu hũ sốt tiêu đen</h2>
    <p>Vị đậm đà của sốt tiêu đen hoà cùng độ mềm béo của đậu hũ nhồi trong nấm đông cô — món khai vị gây ấn tượng ngay từ miếng đầu tiên.</p>
    <h2>2. Gỏi cuốn ngũ sắc chấm sốt me</h2>
    <p>Sự kết hợp của rau củ nhiều màu sắc cuộn trong bánh tráng mỏng, chấm cùng sốt me chua ngọt — vừa đẹp mắt vừa thanh mát, rất hợp làm món khai vị cho tiệc.</p>
    <h2>3. Lẩu nấm thảo mộc thanh vị</h2>
    <p>Nước lẩu ngọt thanh từ rau củ và thảo mộc tự nhiên, nhúng cùng đa dạng loại nấm và rau xanh — món chính vừa ấm bụng vừa giữ được sự nhẹ nhàng, phù hợp cho tiệc tối sum vầy.</p>
    <p>Chỉ với 3 món trên, bạn đã có một bữa tiệc chay tươm tất, sang trọng mà không mất quá nhiều thời gian chuẩn bị.</p>`
  },
  {
    id: "do-uong-thanh-loc",
    tag: "Món chay ngon",
    title: "5 công thức đồ uống thanh lọc cơ thể từ nguyên liệu tự nhiên",
    excerpt: "Những ly nước detox dễ làm tại nhà, giúp thanh lọc cơ thể và đẹp da chỉ sau vài ngày kiên trì.",
    img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=900&auto=format&fit=crop",
    date: "10/06/2026",
    minutes: 4,
    body: `<p>Những ngày cơ thể mệt mỏi, một ly nước detox từ nguyên liệu tự nhiên có thể giúp bạn cảm thấy nhẹ nhàng và tràn đầy năng lượng trở lại. Dưới đây là 5 công thức dễ làm tại nhà.</p>
    <h2>Gợi ý 5 công thức</h2>
    <p>1. Nước chanh sả gừng ấm — hỗ trợ tiêu hoá buổi sáng.<br>2. Nước dưa leo bạc hà — thanh mát, lợi tiểu.<br>3. Nước táo đỏ kỷ tử — bổ huyết, đẹp da.<br>4. Sinh tố rau xanh cần tây táo — giàu chất xơ và vitamin.<br>5. Nước ép cà rốt nghệ gừng — tăng đề kháng, hỗ trợ dạ dày.</p>
    <p>Nếu không có nhiều thời gian pha chế mỗi ngày, Mật Táo Đỏ Tâm An là lựa chọn tiện lợi — chỉ cần pha cùng nước ấm là có ngay một ly thanh lọc cơ thể chỉ trong vài phút.</p>`
  },
  // ---- Kiến thức dinh dưỡng ----
  {
    id: "loi-ich-mat-tao-do",
    tag: "Kiến thức dinh dưỡng",
    title: "7 lợi ích của mật táo đỏ với sức khoẻ phụ nữ",
    excerpt: "Táo đỏ từ lâu đã là vị thuốc quý trong đông y — cùng tìm hiểu vì sao mật táo đỏ cô đặc lại được nhiều chị em tin dùng mỗi ngày.",
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=900&auto=format&fit=crop",
    date: "28/07/2026",
    minutes: 6,
    body: `<p>Táo đỏ từ lâu đã là vị thuốc quý trong đông y, đặc biệt được tin dùng bởi phụ nữ nhờ khả năng bổ huyết, dưỡng nhan. Cùng tìm hiểu vì sao mật táo đỏ cô đặc lại được nhiều chị em lựa chọn dùng mỗi ngày.</p>
    <h2>Những lợi ích nổi bật</h2>
    <p>1. Bổ huyết, cải thiện tuần hoàn.<br>2. Hỗ trợ giấc ngủ sâu và ngon hơn.<br>3. Làm đẹp da từ bên trong.<br>4. Tăng cường đề kháng.<br>5. Hỗ trợ tiêu hoá nhẹ nhàng.<br>6. Ổn định tâm trạng, giảm căng thẳng.<br>7. Bồi bổ cơ thể sau ốm hoặc sau sinh.</p>
    <blockquote>"Một ly mật táo đỏ mỗi ngày là cách chăm sóc sức khoẻ giản dị nhưng bền vững theo thời gian."</blockquote>
    <p>Mật Táo Đỏ Tâm An được cô đặc từ táo đỏ, kỷ tử và mật mía tự nhiên theo công thức gia truyền hơn 20 năm nghiên cứu của Nhà sáng lập Tâm An — không chất bảo quản, không hương liệu hoá học.</p>`
  },
  {
    id: "dam-thuc-vat-du-khong",
    tag: "Kiến thức dinh dưỡng",
    title: "Đạm thực vật: Ăn chay có đủ đạm không?",
    excerpt: "Giải đáp thắc mắc phổ biến nhất của người mới ăn chay — làm sao để bổ sung đủ đạm mà không cần thịt cá.",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=900&auto=format&fit=crop",
    date: "14/07/2026",
    minutes: 7,
    body: `<p>"Ăn chay có đủ đạm không?" là câu hỏi phổ biến nhất mà người mới bắt đầu hành trình ăn chay thường băn khoăn. Câu trả lời là hoàn toàn có thể — nếu bạn biết cách kết hợp nguồn thực phẩm đúng cách.</p>
    <h2>Nguồn đạm thực vật dồi dào</h2>
    <p>Đậu nành, đậu lăng, đậu gà, hạt óc chó, hạt bí, yến mạch và các loại đậu hạt nói chung đều là nguồn đạm thực vật chất lượng cao. Kết hợp đa dạng nhiều loại đậu hạt trong ngày sẽ giúp cơ thể nhận đủ các axit amin thiết yếu.</p>
    <p>Một người trưởng thành ăn chay cần khoảng 0.8–1g đạm/kg thể trọng mỗi ngày — hoàn toàn có thể đáp ứng đủ nếu thực đơn đa dạng đậu hạt, rau củ và ngũ cốc nguyên cám.</p>
    <p>Vegan Protein của Thuần Chay là giải pháp bổ sung đạm nhanh gọn cho người tập luyện thể thao hoặc bận rộn — chiết xuất từ đậu vàng, đậu xanh và hạt bí, không đậu nành.</p>`
  },
  {
    id: "sat-canxi-an-chay",
    tag: "Kiến thức dinh dưỡng",
    title: "Bổ sung sắt và canxi đúng cách khi ăn chay trường",
    excerpt: "Hai vi chất dễ thiếu hụt nhất ở người ăn chay lâu năm, và cách bổ sung tự nhiên từ thực vật hiệu quả.",
    img: "https://images.unsplash.com/photo-1622484212385-bcb08d3f8de1?q=80&w=900&auto=format&fit=crop",
    date: "30/06/2026",
    minutes: 6,
    body: `<p>Sắt và canxi là hai vi chất dễ thiếu hụt nhất ở người ăn chay lâu năm, do phần lớn nguồn thực phẩm giàu hai chất này thường đến từ động vật. Tin vui là thực vật vẫn có thể đáp ứng đủ nhu cầu nếu bạn biết cách chọn lựa.</p>
    <h2>Nguồn sắt và canxi từ thực vật</h2>
    <p>Rau lá xanh đậm (rau bina, cải xoăn), đậu lăng, hạt mè, hạt óc chó và rong biển là những nguồn sắt, canxi tự nhiên dồi dào. Kết hợp cùng vitamin C (cam, chanh, ổi) trong bữa ăn sẽ giúp cơ thể hấp thu sắt hiệu quả hơn.</p>
    <p>Ngoài ra, hạn chế uống trà, cà phê ngay sau bữa ăn cũng là cách đơn giản giúp tăng khả năng hấp thu hai vi chất quan trọng này.</p>
    <p>Canxi Vegan của Thuần Chay chiết xuất từ rong biển, mè đen và hạt óc chó — dễ hấp thu, thân thiện với hệ tiêu hoá, phù hợp bổ sung hằng ngày cho người ăn chay trường.</p>`
  },
  {
    id: "thoi-quen-tieu-hoa-khoe",
    tag: "Kiến thức dinh dưỡng",
    title: "5 thói quen giúp hệ tiêu hoá khoẻ mạnh khi ăn chay",
    excerpt: "Ăn chay đúng cách không chỉ là chọn thực phẩm, mà còn là xây dựng thói quen ăn uống lành mạnh mỗi ngày.",
    img: "https://images.unsplash.com/photo-1595475884562-073c30d45670?q=80&w=900&auto=format&fit=crop",
    date: "18/06/2026",
    minutes: 5,
    body: `<p>Ăn chay đúng cách không chỉ nằm ở việc chọn thực phẩm, mà còn là xây dựng những thói quen ăn uống lành mạnh mỗi ngày để hệ tiêu hoá luôn khoẻ mạnh.</p>
    <h2>5 thói quen nên duy trì</h2>
    <p>1. Nhai kỹ, ăn chậm để hỗ trợ tiêu hoá.<br>2. Uống đủ nước, ưu tiên nước ấm vào buổi sáng.<br>3. Bổ sung chất xơ từ rau củ tươi mỗi bữa.<br>4. Hạn chế đồ chiên rán nhiều dầu mỡ.<br>5. Ăn đúng giờ, tránh bỏ bữa.</p>
    <p>Duy trì đều đặn những thói quen nhỏ này trong vài tuần, bạn sẽ cảm nhận rõ rệt sự thay đổi tích cực từ hệ tiêu hoá đến tinh thần mỗi ngày.</p>`
  },
  // ---- Tin tức & sự kiện ----
  {
    id: "ra-mat-san-pham-moi",
    tag: "Tin tức & sự kiện",
    title: "Thuần Chay ra mắt dòng sản phẩm Ngũ Cốc Thực Dưỡng mới",
    excerpt: "Sản phẩm mới nhất trong hành trình 20 năm nghiên cứu của Nhà sáng lập Tâm An, chính thức có mặt trên kệ hàng.",
    img: "https://images.unsplash.com/photo-1611075384410-9dbcc3388de2?q=80&w=900&auto=format&fit=crop",
    date: "02/08/2026",
    minutes: 3,
    body: `<p>Sau nhiều năm nghiên cứu và thử nghiệm, Thuần Chay chính thức giới thiệu dòng sản phẩm Ngũ Cốc Thực Dưỡng mới — thành quả mới nhất trong hành trình hơn 20 năm nghiên cứu đông y và dinh dưỡng học của Nhà sáng lập Tâm An.</p>
    <h2>Điểm nổi bật của sản phẩm</h2>
    <p>Sản phẩm kết hợp nhiều loại ngũ cốc, hạt và rau củ nguyên bản theo phương pháp thực dưỡng truyền thống, không chất bảo quản, không hương liệu hoá học — phù hợp cho bữa sáng nhanh gọn hoặc bữa phụ lành mạnh trong ngày.</p>
    <p>Sản phẩm hiện đã có mặt trên website thuanchay.vn và các kênh phân phối chính thức của Thuần Chay. Đừng bỏ lỡ ưu đãi ra mắt dành cho những khách hàng đặt mua sớm nhất.</p>`
  },
  {
    id: "hoi-cho-thuc-pham-chay",
    tag: "Tin tức & sự kiện",
    title: "Thuần Chay tham gia Hội chợ Thực phẩm Chay Việt Nam 2026",
    excerpt: "Gặp gỡ đội ngũ Thuần Chay, trải nghiệm và mua sắm trực tiếp sản phẩm với ưu đãi riêng tại hội chợ.",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=900&auto=format&fit=crop",
    date: "20/07/2026",
    minutes: 4,
    body: `<p>Thuần Chay vinh dự góp mặt tại Hội chợ Thực phẩm Chay Việt Nam 2026 — sự kiện quy tụ hàng trăm thương hiệu thực phẩm thuần chay trên khắp cả nước.</p>
    <h2>Đến gian hàng Thuần Chay để làm gì?</h2>
    <p>Tại gian hàng Thuần Chay, khách tham quan sẽ có cơ hội trải nghiệm trực tiếp toàn bộ sản phẩm, giao lưu cùng đội ngũ tư vấn dinh dưỡng, và nhận nhiều ưu đãi độc quyền chỉ có tại sự kiện.</p>
    <p>Hẹn gặp bạn tại hội chợ để cùng khám phá hành trình sống thuận tự nhiên mà Thuần Chay đang theo đuổi suốt hơn 20 năm qua.</p>`
  },
  {
    id: "cot-moc-40000-thanh-vien",
    tag: "Tin tức & sự kiện",
    title: "Cộng đồng Vì Một Thế Giới Trường Chay cán mốc 40.000 thành viên",
    excerpt: "Một cột mốc đáng nhớ của cộng đồng ăn chay lớn mạnh — cảm ơn hàng ngàn câu chuyện được chia sẻ mỗi ngày.",
    img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=900&auto=format&fit=crop",
    date: "08/07/2026",
    minutes: 3,
    body: `<p>Một cột mốc đáng nhớ vừa được ghi nhận — nhóm cộng đồng "Vì Một Thế Giới Trường Chay" trên Facebook đã chính thức cán mốc 40.000 thành viên, trở thành một trong những cộng đồng ăn chay lớn mạnh nhất tại Việt Nam.</p>
    <h2>Hành trình xây dựng cộng đồng</h2>
    <p>Từ những ngày đầu chỉ vài trăm thành viên, nhóm đã phát triển thành nơi chia sẻ kiến thức, công thức nấu ăn và những câu chuyện tử tế của hàng chục nghìn người theo đuổi lối sống thuần thực vật.</p>
    <blockquote>"Mỗi câu chuyện được chia sẻ là một hạt giống tử tế được gieo thêm vào cộng đồng."</blockquote>
    <p>Cảm ơn tất cả thành viên đã đồng hành cùng Thuần Chay trong suốt hành trình này. Hãy tiếp tục lan toả lối sống thuận tự nhiên đến nhiều người hơn nữa.</p>`
  },
  {
    id: "chuong-trinh-tri-an-khach-hang",
    tag: "Tin tức & sự kiện",
    title: "Chương trình tri ân khách hàng thân thiết tháng 8",
    excerpt: "Nhiều ưu đãi hấp dẫn dành riêng cho khách hàng thân thiết của Thuần Chay trong suốt tháng 8.",
    img: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=900&auto=format&fit=crop",
    date: "01/08/2026",
    minutes: 2,
    body: `<p>Nhằm tri ân những khách hàng đã đồng hành cùng Thuần Chay trong suốt thời gian qua, chúng tôi chính thức triển khai chương trình ưu đãi đặc biệt dành riêng cho khách hàng thân thiết trong tháng 8.</p>
    <h2>Ưu đãi trong chương trình</h2>
    <p>Khách hàng thân thiết sẽ nhận được nhiều phần quà và mã giảm giá hấp dẫn khi mua sắm các sản phẩm Mật Táo Đỏ, Bột Đậu Hạt Rau Củ và Bột Nêm Thuần Chay trong suốt tháng.</p>
    <p>Theo dõi fanpage và nhóm cộng đồng Thuần Chay để cập nhật chi tiết thể lệ chương trình và không bỏ lỡ những ưu đãi hấp dẫn nhất.</p>`
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
