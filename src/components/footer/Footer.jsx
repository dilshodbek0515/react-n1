import "./Footer.css"
import foo_logo from "../assets/images/logo.png"
const Footer = () => {
    return (
        <div className='footer'>
            <section className="contact">
                <h3 className="contact_list">Stay in Touch</h3>
                <form className="form">
                    <input className="email" type="email" placeholder="Enter your email address" required />
                    <button className="contact_btn">Submit</button>
                </form>
            </section>
            <footer className="footer_content">
                <a href="!">
                    <img className="foo_logo" src={foo_logo} alt="foo_logo" />
                </a>
                <div className="footer_list">
                    <p className="footer_item">Home</p>
                    <p className="footer_item">Categories</p>
                    <p className="footer_item">About</p>
                    <p className="footer_item">Contact</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer