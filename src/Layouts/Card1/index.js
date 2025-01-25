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
                useCORS: true, // Cho phép tải ảnh từ nguồn khác (nếu có)
                backgroundColor: null, // Bỏ nền trắng mặc định
            });
            const image = canvas.toDataURL("image/png");

            // Tạo liên kết tải xuống
            const link = document.createElement("a");
            link.download = "Mung_xuan_at_ty_2025.png";
            link.href = image;
            link.click();
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
                    <div className="Card__inner nohide">
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
                        <div className="Card__inner__btn">
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
                                <div
                                    className="Card__inner__btn__btn2__download"
                                    onClick={handleDownload}
                                >
                                    <div className="Card__inner__btn__btn2__download__text">
                                        DOWNLOAD
                                    </div>
                                    <div className="Card__inner__btn__btn2__download__icon">
                                        <IoMdDownload />
                                    </div>
                                </div>
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
                    <div className="Card__inner hide">
                        <div className="Card__inner__btn" style={{marginBottom: "16px"}}>
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
                        <div className="Card__inner__btn">
                            
                            <div className="Card__inner__btn__btn2" style={{width: "100%", flexDirection: "column"}}>
                                <div
                                    className="Card__inner__btn__btn2__download"
                                    onClick={handleDownload}
                                >
                                    <div className="Card__inner__btn__btn2__download__text">
                                        DOWNLOAD
                                    </div>
                                    <div className="Card__inner__btn__btn2__download__icon">
                                        <IoMdDownload />
                                    </div>
                                </div>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card1;
