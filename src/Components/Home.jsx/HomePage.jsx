import { Link } from "react-router-dom";

const HomePage = () => {
    sessionStorage.setItem("Auth", false);
    sessionStorage.clear();
    return (
        <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <nav style={{ textAlign: "center", backgroundColor: "black", height: "90px", paddingTop: "20px" }}>
                <h1 style={{ display: "inline-block", width: "300px", backgroundColor: "transparent", color: "white", float: "left" }}>E-Prathibha</h1>
                <Link to="/register" id="flink">
                    Register
                </Link>
                <Link to="/register" id="tlink">
                    LogIn
                </Link>
            </nav>
            <marquee >
                <h1 style={{ backgroundColor: "transparent", color: "white", fontSize: "7rem", marginTop: "20px", boxShadow: "10px 10px 300px black" }}>Home Page</h1>
            </marquee>
        </div>
    )
}
export default HomePage;