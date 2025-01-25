import images from "./images";

const danhSachKhongGian = [

    {
        id: 1,
        image: images.kg1,
        title: "Nghệ thuật sáng tạo",
        author: "Đại học quốc gia Hà Nội",
        type: "Kiến trúc",
        description: "Như các nhà giáo dục đã nêu, việc tạo ra một trải nghiệm nghệ thuật mà không có bất kỳ tác phẩm nghệ thuật vật lý nào đang được đề cập và không ảnh hưởng đến tầm nhìn của nghệ sĩ không phải là một nỗ lực nhỏ. May mắn thay, Beyond có sự trợ giúp của vô số máy chiếu, 300 tác phẩm nghệ thuật và 30.000 feet vuông không gian, để đưa sự đắm chìm lên một tầm cao mới và thổi hồn chuyển động vào cuộc sống tĩnh lặng./Hãy đắm mình vào một bờ biển khắc khổ, đi dạo dọc theo một con phố có nhiều cửa hàng ở vùng nông thôn nước Pháp hoặc chứng kiến ​​những bông hoa hướng dương tuyệt đẹp của Gogh hiện ra phía trên bạn. Beyond biến khán giả hiện đại thành những người đi dạo hoặc những người đi dạo, thu hút sự chú ý vào những chi tiết chưa từng thấy trước đây và san bằng các tác phẩm nghệ thuật cao cấp để đủ gần để chạm vào.",
        prop: "nghe_thuat_sang_tao",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
    {
        id: 2,
        image: images.kg2,
        title: "Where We Lie: Between Sea and Sky",
        author: "Liana Shaw",
        type: "Tranh vẽ",
        description: "Where We Lie: Between Sea and Sky, is an expanded composition of Morrisseau's work on public display on the second floor of the AGH. In this selection of his work, Morrisseau captures the colorful, bold, diverse, plethora of Mother Earth and the relationships of the realms in the Anishinaabe worldview",
        prop: "where_we_lie_between_sea_and_sky",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
    {
        id: 3,
        image: images.kg3,
        title: "Gogh Beyond",
        author: "Vincent van Gogh",
        type: "Tranh vẽ",
        description: "Through the use of cutting-edge projection technology and an original score, Beyond Van Gogh breathes new life into over 300 of Van Gogh's artworks",
        prop: "gogh_beyond",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
    {
        id: 4,
        image: images.kg4,
        title: "Nhìn lên đáy giếng",
        author: "Hachul Lệ Đổ & Vũ Diệu Hương",
        type: "Tranh vẽ",
        description: "Triển lãm “Nhìn lên đáy giếng”, triển lãm đôi đạt giải thưởng RMIT Digital Art and Design Grant 2024, gồm hai tác phẩm nghệ thuật: “Sự tích Trần Thanh Dương” của Hachul Lệ Đổ và “Đảo Ngây Thơ” của Vũ Diệu Hương. Triển lãm “Nhìn lên đáy giếng” chính thức được ra mắt trong khuôn khổ Liên hoan Sáng tạo & Thiết kế Việt Nam (VFCD) và được bảo trợ bởi The Outpost Art Organisation./Các tác phẩm của nghệ sĩ Hachul Lệ Đổ và Vũ Diệu Hương lấy cảm hứng từ bản sắc văn hóa đa dạng và di sản của Việt Nam. Với sự hiểu biết rằng truyền thống Việt Nam không phải là đối tượng nghiên cứu đồng nhất theo một thuật ngữ đơn nhất, các nghệ sĩ ủng hộ một cách tiếp cận mang tính cộng tác thông qua nhiều phương tiện sáng tạo kỹ thuật số.",
        prop: "nhin_len_day_gieng",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
    {
        id: 5,
        image: images.kg5,
        title: "ego - người",
        author: "Đa nghệ sĩ",
        type: "Tranh vẽ và điêu khắc",
        description: "Được chọn là 1 trong 50 sự kiện của Lễ hội Thiết kế sáng tạo TP Hà Nội năm 2022, lễ khai mạc triển lãm “Ego – Người” trưng bày các tác phẩm của họa sĩ Ngô Xuân Bính vừa được Sở Văn hóa và Thể thao Hà Nội, Hội Mỹ thuật Việt Nam tổ chức tại Bảo tàng Hà Nội./Về Lễ hội và triển lãm nói trên, Phó Giám đốc Sở Văn hóa và Thể thao  Hà Nội – Trần Thị Vân Anh cho biết, Lễ hội Thiết kế sáng tạo TP Hà Nội năm 2022 với chủ đề “Sáng tạo và công nghệ” được tổ chức tại nhiều không gian khác nhau trên địa bàn thành phố.",
        prop: "ego_nguoi",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
    {
        id: 6,
        image: images.kg6,
        title: "Nghệ Thuật Ánh Sáng Metashow",
        author: "Đa nghệ sĩ",
        type: "Nghệ thuật ánh sáng",
        description: "Triển lãm Nghệ thuật Ánh Sáng MetaShow – nơi trải nghiệm ánh sáng và nghệ thuật đầy sáng tạo với hơn 30 chủ đề đa dạng như Kính vạn hoa, Biển hoa hồng, Dãi ngân hà, Van Gogh, Cung điện gương, Thị trấn AI, Vũ trụ cánh đồng lúa mì, Biển hướng dương, Mắt kim cương, Phòng chiếu 4K…/Sử dụng công nghệ ánh sáng laser, VR/AR, projection mapping sống động./Không gian triển lãm chia thành hai khu vực với hiệu ứng âm thanh, hình ảnh mãn nhãn.",
        prop: "nghe_thuat_anh_sang_metashow",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
    {
        id: 7,
        image: images.kg7,
        title: "BƯỚC QUA MỘT KHÚC ĐƯỜNG CA",
        author: "Đa nghệ sĩ",
        type: "Nghệ thuật ánh sáng",
        description: "Sau khi được đón nhận nồng nhiệt tại Thành phố Hồ Chí Minh, Bước qua một khúc đường ca (Walking Through a Songline) – một triển lãm ánh sáng nghệ thuật do Đại sứ quán Australia tại Việt Nam tổ chức – sẽ ra mắt công chúng tại Hà Nội tại Bảo tàng Phụ nữ Việt Nam từ ngày 28 tháng 4 đến ngày 21 tháng 5. Đây là triển lãm mới nhất do Đại sứ quán Australia tổ chức nhằm giới thiệu các nền văn hóa độc đáo và sống động thuộc các Quốc gia Đầu tiên của Australia tới khán giả Việt Nam. Triển lãm nằm trong chuỗi các hoạt động kỷ niệm 50 năm quan hệ ngoại giao Australia - Việt Nam vào năm 2023.",
        prop: "buoc_qua_mot_khuc_duong_ca",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
    {
        id: 8,
        image: images.kg8,
        title: "Ánh sáng tình tôi",
        author: "Phan Như Lâm",
        type: "Tranh vẽ",
        description: "Chiêm ngưỡng những bức tranh ở triển lãm Ánh sáng tình tôi, người xem dễ dàng nhận thấy đó là cách tự chữa lành cho Phan Như Lâm trong nhiều khía cạnh, mà đầu tiên là tâm lý sáng tác. Ngoài ra, họa sĩ còn dành nhiều ánh sáng và sự tụng ca cho các nhân vật nữ, để rồi từ họ nhận về những ánh sáng cho chính mình, giám tuyển Lý Đợi nhận xét.",
        prop: "anh_sang_tinh_toi",
        spaceImage: images.d1,
        web: "https://virtual-gallery-sandy.vercel.app/nghe-thuat-sang-tao"
    },
];

const user = [
    {
        id: 1,
        name: "Ngô Thị Hồng nhung",
        prop: "ngo_thi_hong_nhung",
        account: "user@gmail.com",
        password: "user",
        avatar: images.user1
    },
    {
        id: 2,
        name: "Đỗ Tuấn Minh",
        prop: "minh2813",
        account: "minh@gmail.com",
        password: "minh",
        avatar: images.user1
    }
]

const sections = { danhSachKhongGian, user };

export default sections;