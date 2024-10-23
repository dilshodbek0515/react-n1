import "./Most.css"
import most1 from "../assets/images/most1.png"
import most2 from "../assets/images/most2.png"
import most3 from "../assets/images/most3.png"
import most4 from "../assets/images/most4.png"
import most5 from "../assets/images/most5.png"
import most6 from "../assets/images/most6.png"
import user1 from "../assets/images/user1.png"
import user2 from "../assets/images/user2.png"

const Most = () => {
    return (
        <div className="most">
            <div className="most_content">
                <h3 className="most_title">Most Recent</h3>
                <div className="most_card_content">
                    <div className="most_card">
                        <img className="most_img" src={most1} alt="most_img" />
                        <p className="most_card_title1">Still Standing Tall</p>
                        <p className="most_card_title2">Life begins at the end of your comfort zone.</p>
                        <hr className="most_line" />
                        <div className="most_user_content">
                            <div className="user_wrap">
                                <img className="most_user_img" src={user2} alt="most_user_img" />
                                <span className="most_username">William Wong</span>
                            </div>
                            <p className="most_data">9/25/2015</p>
                        </div>
                    </div>
                    <div className="most_card">
                        <img className="most_img" src={most2} alt="most_img" />
                        <p className="most_card_title1">Sunny Side Up</p>
                        <p className="most_card_title2">No place is ever tell you it’s going to be.</p>
                        <hr className="most_line" />
                        <div className="most_user_content">
                            <div className="user_wrap">
                                <img className="most_user_img" src={user1} alt="most_user_img" />
                                <span className="most_username">Mat Vogels</span>
                            </div>
                            <p className="most_data">9/25/2015</p>
                        </div>
                    </div>
                    <div className="most_card">
                        <img className="most_img" src={most3} alt="most_img" />
                        <p className="most_card_title1">Water Falls</p>
                        <p className="most_card_title2">We travel not to escape  life not to escape us.</p>
                        <hr className="most_line" />
                        <div className="most_user_content">
                            <div className="user_wrap">
                                <img className="most_user_img" src={user1} alt="most_user_img" />
                                <span className="most_username">Mat Vogels</span>
                            </div>
                            <p className="most_data">9/25/2015</p>
                        </div>
                    </div>
                    <div className="most_card">
                        <img className="most_img" src={most4} alt="most_img" />
                        <p className="most_card_title1">Through the Mist</p>
                        <p className="most_card_title2">Travel makes you what you occupy the world.</p>
                        <hr className="most_line" />
                        <div className="most_user_content">
                            <div className="user_wrap">
                                <img className="most_user_img" src={user2} alt="most_user_img" />
                                <span className="most_username">William Wong</span>
                            </div>
                            <p className="most_data">9/25/2015</p>
                        </div>
                    </div>
                    <div className="most_card">
                        <img className="most_img" src={most5} alt="most_img" />
                        <p className="most_card_title1">Awaken Early</p>
                        <p className="most_card_title2">Not all those who wander are lost.</p>
                        <hr className="most_line" />
                        <div className="most_user_content">
                            <div className="user_wrap">
                                <img className="most_user_img" src={user1} alt="most_user_img" />
                                <span className="most_username">Mat Vogels</span>
                            </div>
                            <p className="most_data">9/25/2015</p>
                        </div>
                    </div>
                    <div className="most_card">
                        <img className="most_img" src={most6} alt="most_img" />
                        <p className="most_card_title1">Try it Always</p>
                        <p className="most_card_title2">The world is a book, travel read only one page.</p>
                        <hr className="most_line" />
                        <div className="most_user_content">
                            <div className="user_wrap">
                                <img className="most_user_img" src={user1} alt="most_user_img" />
                                <span className="most_username">Mat Vogels</span>
                            </div>
                            <p className="most_data">9/25/2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Most