import { useState, useEffect } from "react";
import { getComments } from "../utils/Api";
import Moment from "react-moment";
import { formatDate } from "../utils/Helpers";
import Load from "../../public/img/circle-load-right.png";

const CommentsList = ({ kids: commentKids }) => {
  const [kids, setKids] = useState([]);
  useEffect(() => {
    if (commentKids.length) {
      getComments(commentKids).then((kids) => {
        setKids(kids);
      });
    }
    const linkHeight =
      document.querySelector(".comments-list .link").offsetHeight + 24;
    const commentEl = document.querySelector(".comments-list .comments");
    commentEl.style.paddingTop = `${linkHeight}px`;
  }, [commentKids]);

  return (
    <div className="comments">
      <div className="etc">
        <span>comments {`${kids && kids.length > 0 ? kids.length : 0}`}</span>
        <button className="reload">
          <img src={Load} alt="reload" />
        </button>
      </div>
      {kids.map((comment) => (
        <div key={comment.id} className="comment">
          <div>
            <span className="by">{comment.by}</span>
            <span className="time">
              , <Moment fromNow>{formatDate(comment.time)}</Moment>
            </span>
            <p
              className="text"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            ></p>
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
