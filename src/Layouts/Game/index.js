import React, { useEffect, useState } from "react";
import "./Game.scss";

function Game() {
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

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

    return (
        <>
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
                src="https://unity-game-ba-dinh-3.vercel.app/"
                style={{ width: "100%", height: "90vh", border: "none" }}
                title="Unity Game"
                allow="fullscreen"
            ></iframe>
        </>
    );
}

export default Game;
