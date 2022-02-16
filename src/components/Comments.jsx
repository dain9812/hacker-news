import "./Comments.scss";
import logo from "../favicon.png";
import CloseBlack from "../../public/img/Close_black.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../utils/Api";
import CommentsList from "./CommentsList";
import { TitleLink } from "./Card";

const Comments = ({ isOpen, setPop }) => {
  const [{ title, time, by, url, descendants, kids }, setPostData] = useState({
    title: "",
    time: "",
    by: "",
    url: "",
    descendants: 0,
    kids: []
  });
  const { id } = useParams();
  useEffect(() => {
    if (id !== undefined) {
      getStory(id).then((post) => {
        setPostData(post.data);
      });
    }
  }, [id]);

  return (
    <div className={isOpen ? "show comments-pop" : "hide comments-pop"}>
      <nav>
        <div className="nav">
          <div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h3>comments</h3>
          </div>
          <button className="btn" onClick={() => setPop(false)}>
            <img src={CloseBlack} alt="close-btn" />
          </button>
        </div>
      </nav>
      <div className="comments-list card">
        <TitleLink
          url={url}
          title={title}
          by={by}
          time={time}
          descendants={descendants}
        />
        <CommentsList kids={kids} />
      </div>
    </div>
  );
};

export default Comments;
