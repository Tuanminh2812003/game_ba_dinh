import "./Home.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Home() {
    return (
        <>
            <div className="Home">
                <div className="container-main">
                    <div className="Home__inner">
                        <div className="Home__inner__title">
                            Chơi game để nhận vé tham quan Đền Quán Thánh <b>MIỄN PHÍ</b>!
                        </div>
                        <Link to="/game" className="Home__inner__btn">
                            <div className="Home__inner__btn__text">
                                CHƠI GAME
                            </div>
                            <div className="Home__inner__btn__icon">
                                <FaArrowRight />
                            </div>
                        </Link>
                        <Link to="/card1" className="Home__inner__btn">
                            <div className="Home__inner__btn__text">
                                VIẾT THIỆP CHÚC TẾT
                            </div>
                            <div className="Home__inner__btn__icon">
                                <FaArrowRight />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;