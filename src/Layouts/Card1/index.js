import { Link } from "react-router-dom";
import "./Card.scss";
import { IoMdDownload } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import html2canvas from "html2canvas";

function Card1() {
    const imageRef = useRef(); // Tham chiếu đến phần Card__inner__image

    const handleDownload = async () => {
        if (imageRef.current) {
            const canvas = await html2canvas(imageRef.current, {
                useCORS: true, // Hỗ trợ tải ảnh từ nguồn ngoài (nếu có)
                backgroundColor: null, // Giữ nền trong suốt
                scale: 2, // Tăng độ phân giải ảnh
            });
    
            const image = canvas.toDataURL("image/png");
    
            // Mở tab mới
            const newTab = window.open();
            if (newTab) {
                newTab.document.write(`
                    <html>
                        <head>
                            <title>Tải ảnh</title>
                        </head>
                        <body style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0;">
                            <p style="font-size: 18px; text-align: center;">Nhấn chuột phải vào ảnh (hoặc nhấn giữ trên điện thoại) để tải xuống</p>
                            <img src="${image}" style="width: auto; height: 70vh; margin-bottom: 10px;" />
                            <br/>
                            <a href="${image}" download="Mung_xuan_at_ty_2025.png" style="font-size: 20px; font-weight: bold; color: blue; text-decoration: none;">
                                👉 Nhấn vào đây để tải xuống 👈
                            </a>
                        </body>
                    </html>
                `);
            } else {
                alert("Trình duyệt của bạn đã chặn cửa sổ bật lên. Hãy cho phép mở tab mới để tải ảnh.");
            }
        }
    };

    const handleShare = async () => {
        const currentUrl = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Mừng Xuân Ất Tỵ 2025",
                    text: "Chúc mừng năm mới!",
                    url: currentUrl,
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            alert(
                "Trình duyệt của bạn không hỗ trợ Web Share API. Vui lòng sử dụng các nút chia sẻ bên dưới!"
            );
        }
    };

    const shareToPlatform = (platform) => {
        const currentUrl = window.location.href;
        let shareUrl = "";

        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    currentUrl
                )}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    currentUrl
                )}&text=${encodeURIComponent(
                    "Mừng Xuân Ất Tỵ 2025: Chúc mừng năm mới!"
                )}`;
                break;
            case "zalo":
                shareUrl = `https://zalo.me/share?url=${encodeURIComponent(currentUrl)}`;
                break;
            default:
                return;
        }

        // Mở URL chia sẻ trong tab mới
        window.open(shareUrl, "_blank");
    };

    return (
        <>
            <div className="Card" style={{backgroundImage: "url('/Home-2.png')"}}>
                <div className="container-main">
                    <div className="Card__inner">
                    <div className="Card__inner__btn hide" style={{marginBottom: "16px"}}>
                            <Link to={"/"} className="Card__inner__btn__btn1">
                                <div className="Card__inner__btn__btn1__icon">
                                    <IoIosArrowBack />
                                </div>
                                <div className="Card__inner__btn__btn1__text">
                                    Quay lại
                                </div>
                            </Link>
                            <div className="Card__inner__btn__color">
                                <Link
                                    to="/card1"
                                    className="Card__inner__btn__color__red"
                                ></Link>
                                <Link
                                    to="/card2"
                                    className="Card__inner__btn__color__green"
                                ></Link>
                            </div>
                        </div>
                        <div className="Card__inner__image" ref={imageRef}>
                            {/* Phần chỉ định được tải */}
                            <img src="/card1.png" alt="Background" />
                            <div className="Card__inner__image__text">
                                <textarea
                                    placeholder="Nhập lời chúc của bạn"
                                    style={{ backgroundColor: "#CA4B49" }}
                                ></textarea>
                                <div className="Card__inner__image__text__back"></div>
                            </div>
                        </div>
                        <div className="Card__inner__btn hide">
                            
                            <div className="Card__inner__btn__btn2" style={{width: "100%", flexDirection: "column"}}>
                                <button
                                    className="Card__inner__btn__btn2__download"
                                    onClick={handleDownload}
                                >
                                    <div className="Card__inner__btn__btn2__download__text">
                                        TẢI XUỐNG
                                    </div>
                                    <div className="Card__inner__btn__btn2__download__icon">
                                        <IoMdDownload />
                                    </div>
                                </button>
                                <div
                                    className="Card__inner__btn__btn2__share"
                                    onClick={handleShare}
                                    style={{margin: "8px 0px"}}
                                >
                                    <div className="Card__inner__btn__btn2__download__text">
                                        CHIA SẺ
                                    </div>
                                    <div className="Card__inner__btn__btn2__download__icon">
                                        <FaShareAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Card__inner__btn nohide">
                            <Link to={"/"} className="Card__inner__btn__btn1">
                                <div className="Card__inner__btn__btn1__icon">
                                    <IoIosArrowBack />
                                </div>
                                <div className="Card__inner__btn__btn1__text">
                                    Quay lại
                                </div>
                            </Link>
                            <div className="Card__inner__btn__color">
                                <Link
                                    to="/card1"
                                    className="Card__inner__btn__color__red"
                                ></Link>
                                <Link
                                    to="/card2"
                                    className="Card__inner__btn__color__green"
                                ></Link>
                            </div>
                            <div className="Card__inner__btn__btn2">
                                <button
                                    className="Card__inner__btn__btn2__download"
                                    onClick={handleDownload}
                                >
                                    <div className="Card__inner__btn__btn2__download__text">
                                        TẢI XUỐNG
                                    </div>
                                    <div className="Card__inner__btn__btn2__download__icon">
                                        <IoMdDownload />
                                    </div>
                                </button>
                                <div
                                    className="Card__inner__btn__btn2__share"
                                    onClick={handleShare}
                                >
                                    <div className="Card__inner__btn__btn2__download__text">
                                        CHIA SẺ
                                    </div>
                                    <div className="Card__inner__btn__btn2__download__icon">
                                        <FaShareAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card1;
