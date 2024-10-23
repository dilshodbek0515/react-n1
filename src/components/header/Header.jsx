import "./Header.css"
import logo from "../assets/images/logo.png"
import { IoMenu } from "react-icons/io5";
const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <a href="!">
                    <img className="heared_logo" src={logo} alt="img" />
                </a>
                <nav className="nav">
                    <a href="!"><p className="navbar_list">Home</p></a>
                    <a href="!"><p className="navbar_list">Categories</p></a>
                    <a href="!"><p className="navbar_list">About</p></a>
                    <a href="!"><p className="navbar_list">Contact</p></a>
                </nav>
                <IoMenu className="sidebar"/>
            </div>
            <main className="main">
                <p className="main_list">Let's do it together.</p>
                <p className="main_list2">We travel the world in search of stories. Come along for the ride.</p>
                <button className="main_btn">View Latest Posts</button>
            </main>
        </div>
    )
}

export default Header