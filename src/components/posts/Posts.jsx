import "./Posts.css"
import user1 from "../assets/images/user1.png"
import user2 from "../assets/images/user2.png"
const Posts = () => {
    return (
        <div className="posts">
            <div className="post_content">
                <h3 className="post_list">Featured Posts</h3>
                <div className="post_content_childs">
                    <div className="post_card1">
                        <button className="hover_btn">Adventure</button>
                        <p className="post_card_list1">The Road Ahead</p>
                        <p className="post_card_list2">The road ahead might be paved - it might not be.</p>
                        <div className="post_user_content">
                            <div className="user">
                                <img className="user_img" src={user1} alt="img" />
                                <span className="username">Mat Vogels</span>
                            </div>
                            <p className="date">September 25, 2015</p>
                        </div>
                    </div>
                    <div className="post_card2">
                        <button className="hover_btn">Adventure</button>
                        <p className="post_card_list1">From Top Down</p>
                        <p className="post_card_list2">Once a year, go someplace you’ve never been before.</p>
                        <div className="post_user_content">
                            <div className="user">
                                <img className="user_img" src={user2} alt="img" />
                                <span className="username">William Wong</span>
                            </div>
                            <p className="date">September 25, 2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts