import { Link } from "react-router-dom";
import './Navbar.css';

let NavBar = () => {

    return (
        <div>
            <nav style={{ textAlign: "center", backgroundColor: "black", height: "90px", paddingTop: "20px" }}>
                <h1 style={{ display: "inline-block", width: "300px", backgroundColor: "transparent", color: "white", float: "left" }}>E-Prathibha</h1>
                <Link to="/startexam" id="flink">
                    LogOut
                </Link>
                <Link to="/startexam" id="slink">
                    DashBoard
                </Link>
                <Link to="/examlists" id="slink">
                    Exam list
                </Link>
            </nav>
           
        </div>
    )
}
export default NavBar;