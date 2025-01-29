import React, { useEffect, useRef, useState } from "react";

function Game() {
    const unityCanvasRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
    const [isMobile, setIsMobile] = useState(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    useEffect(() => {
        const checkOrientation = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);
    useEffect(() => {
        const loadUnity = async () => {
            if (window.createUnityInstance) {
                try {
                    const config = {
                        dataUrl: "/unity/Build/GameBaDinh3.data",
                        frameworkUrl: "/unity/Build/GameBaDinh3.framework.js",
                        codeUrl: "/unity/Build/GameBaDinh3.wasm",
                        streamingAssetsUrl: "/unity/StreamingAssets",
                        companyName: "DefaultCompany",
                        productName: "Game-VirtualGallery",
                        productVersion: "1.0",
                        showBanner: (msg, type) => console.log(msg, type),
                    };

                    const unityInstance = await window.createUnityInstance(
                        unityCanvasRef.current,
                        config,
                        (progress) => {
                            console.log(`Loading progress: ${progress * 100}%`);
                        }
                    );

                    setIsLoaded(true);
                } catch (error) {
                    console.error("Failed to load Unity:", error);
                }
            }
        };

        // Load Unity Loader Script
        const script = document.createElement("script");
        script.src = "/unity/Build/GameBaDinh3.loader.js";
        script.onload = loadUnity;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // 🔹 Hàm bật chế độ Fullscreen + Kích hoạt bàn phím
    const handleFullScreen = () => {
        if (unityCanvasRef.current) {
            if (unityCanvasRef.current.requestFullscreen) {
                unityCanvasRef.current.requestFullscreen();
            } else if (unityCanvasRef.current.mozRequestFullScreen) { // Firefox
                unityCanvasRef.current.mozRequestFullScreen();
            } else if (unityCanvasRef.current.webkitRequestFullscreen) { // Chrome, Safari
                unityCanvasRef.current.webkitRequestFullscreen();
            } else if (unityCanvasRef.current.msRequestFullscreen) { // IE/Edge
                unityCanvasRef.current.msRequestFullscreen();
            }

            // 🔹 Kích hoạt focus vào Unity sau 500ms để bàn phím không bị tắt
            setTimeout(() => {
                unityCanvasRef.current.focus();
                document.activeElement.blur(); // Bỏ focus trên phần tử khác
            }, 500);
        }
    };

    return (
        <div style={{ width: "100%", height: "auto", textAlign: "center", position: "relative", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            {isMobile && !isLandscape && (
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
                        flexDirection: "column",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    <p>📱 Vui lòng xoay ngang thiết bị của bạn để chơi game 🎮</p>
                </div>
            )}
            
            <div style={{ width: "80vw", height: "auto", textAlign: "center", position: "relative", display: "flex", justifyContent: "center" }}>
                {!isLoaded && <p>Loading Unity Game...</p>}
                <button 
                    onClick={handleFullScreen} 
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
                >
                    Fullscreen
                </button>
                <canvas
                    ref={unityCanvasRef}
                    id="unity-canvas"
                    style={{
                        width: "100%",
                        height: "100%",
                        display: isLoaded ? "block" : "none",
                    }}
                ></canvas>
            </div>
        </div>
    );
}

export default Game;
