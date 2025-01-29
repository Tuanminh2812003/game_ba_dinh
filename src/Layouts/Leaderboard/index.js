import React, { useEffect, useState } from "react";
import "./Leaderboard.scss";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Dùng để lưu giá trị tìm kiếm
    const [filteredData, setFilteredData] = useState([]); // Dữ liệu sau khi lọc
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch API
    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch(
                    "http://quanthanhtemple.wifimedia.vn/api/api/v1/user/"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch leaderboard data.");
                }
                const data = await response.json();
                setLeaderboard(data);
                setFilteredData(data); // Gán dữ liệu ban đầu vào filteredData
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    // Xử lý khi tìm kiếm
    useEffect(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = leaderboard.filter(
            (user) =>
                user.email.toLowerCase().includes(lowercasedSearchTerm) ||
                user.phone.includes(lowercasedSearchTerm)
        );
        setFilteredData(filtered);
    }, [searchTerm, leaderboard]);

    if (loading) return <div className="loading">Đang tải dữ liệu...</div>;
    if (error) return <div className="error">Lỗi: {error}</div>;

    return (
        <div className="leaderboard">

<div className="leaderboard-container">
            <h1 className="leaderboard-title">Bảng Xếp Hạng</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Tìm kiếm theo email hoặc số điện thoại..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Điểm số</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.score.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </div>
    );
};

export default Leaderboard;
