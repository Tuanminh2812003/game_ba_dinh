import React, { useEffect, useState, useRef } from "react";

function Game() {
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
    const iframeRef = useRef();

    useEffect(() => {
        // Hàm kiểm tra hướng màn hình
        const checkOrientation = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        // Lắng nghe sự kiện resize để phát hiện thay đổi hướng
        window.addEventListener("resize", checkOrientation);

        // Cleanup sự kiện
        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);

    useEffect(() => {
        // Kích hoạt chế độ fullscreen khi iframe sẵn sàng
        if (iframeRef.current) {
            const iframeElement = iframeRef.current;
            if (iframeElement.requestFullscreen) {
                iframeElement.requestFullscreen();
            } else if (iframeElement.webkitRequestFullscreen) {
                // Safari
                iframeElement.webkitRequestFullscreen();
            } else if (iframeElement.mozRequestFullScreen) {
                // Firefox
                iframeElement.mozRequestFullScreen();
            } else if (iframeElement.msRequestFullscreen) {
                // IE/Edge
                iframeElement.msRequestFullscreen();
            }
        }
    }, []); // Chỉ chạy một lần khi component được render

    return (
        <div style={{ width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}>
            {!isLandscape && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#000",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                    }}
                >
                    <p>Vui lòng xoay ngang thiết bị của bạn để chơi game</p>
                </div>
            )}
            <iframe
                ref={iframeRef}
                src="https://unity-game-ba-dinh-3.vercel.app/"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Unity Game"
                allow="fullscreen"
            ></iframe>
        </div>
    );
}

export default Game;
