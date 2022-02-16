import Moment from "react-moment";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { formatDate } from "../utils/Helpers";
import CommentsList from "./CommentsList";
import Group from "../../public/img/Group.png";
import Chat from "../../public/img/Chat.png";
import "./Card.scss";

export const TitleLink = ({ by, descendants, url, title, time }) => (
  <div className="link">
    <a href={url} target="_blank">
      <span className="url">{url}</span>
      <h3>{title}</h3>
      <div className="info">
        <p>
          <span className="by">{by}</span>
          <span className="time">
            <Moment fromNow>{formatDate(time)}</Moment>
          </span>
        </p>
        <span>points {descendants}</span>
      </div>
    </a>
  </div>
);

const CardType = ({
  story: { id, by, text, descendants, title, kids, time, url },
  setPop,
  type,
  ref
}) => {
  const toggleComments = () => {
    setPop((isOpen) => !isOpen);
  };

  const Type1 = () => {
    if (title.includes("Show HN:") === true) {
      title = title.substr(8);
    }
    return (
      <div className="card">
        <div className="link">
          <a href={url} target="_blank">
            <span className="url">{url}</span>
            <h3>{title}</h3>
          </a>
        </div>
        <div className="info">
          <div>
            <NavLink to={`/profile/${by}`}>
              <span className="by">{by}</span>
            </NavLink>
            <span className="time">
              <Moment fromNow>{formatDate(time)}</Moment>
            </span>
          </div>
          <ul>
            <li className="group">
              <img src={Group} alt="group" />
              <span>{descendants}</span>
            </li>
            <li className="chat">
              <NavLink to={`/${id}`} onClick={() => toggleComments()}>
                <img src={Chat} alt="chat" />{" "}
                <span>{`${kids && kids.length > 0 ? kids.length : 0}`}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const Type2 = () => {
    const [cardOpen, setCardOpen] = useState(false);

    let askTitle = "";
    if (title.includes("Ask HN") === true) {
      title = title.substr(8);
      askTitle = "ask";
    } else if (title.includes("Tell HN") === true) {
      title = title.substr(9);
      askTitle = "tell";
    } else {
      askTitle = "";
    }

    return (
      <div
        className={cardOpen ? "card open" : "card close"}
        onClick={() => setCardOpen(!cardOpen)}
      >
        <div>
          <div className="link">
            <span
              className={
                askTitle === "ask"
                  ? "ask-title"
                  : askTitle === "tell"
                  ? "ask-title tell"
                  : ""
              }
            >
              {askTitle}
            </span>
            <h3>{title}</h3>
            {cardOpen ? (
              <div className="info">
                <p>
                  <span className="by">{by}</span>
                  <span className="time">
                    <Moment fromNow>{formatDate(time)}</Moment>
                  </span>
                </p>
                <span>points {descendants}</span>
              </div>
            ) : (
              ""
            )}
            <p className="text" dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
          {cardOpen ? (
            <>
              <CommentsList kids={kids} />
              <div className="border">
                <div className="up"></div>
                <div className="down"></div>
              </div>
            </>
          ) : (
            <div className="info">
              <div>
                <span className="by">{by}</span>
                <span className="time">
                  <Moment fromNow>{formatDate(time)}</Moment>
                </span>
              </div>
              <ul>
                <li className="group">
                  <img src={Group} alt="group" />
                  <span>{descendants}</span>
                </li>
                <li className="chat">
                  <img src={Chat} alt="chat" />{" "}
                  <span>{`${kids && kids.length > 0 ? kids.length : 0}`}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Type3 = () => (
    <div className="card">
      <div className="link">
        <a href={url} target="_blank">
          <span className="url">{url}</span>
          <h3>{title}</h3>
          <div>
            <span className="by">{by}</span>
            <span className="time">
              <Moment fromNow>{formatDate(time)}</Moment>
            </span>
          </div>
        </a>
      </div>
    </div>
  );

  switch (type) {
    case "show":
      return Type1();
    case "ask":
      return Type2();
    case "job":
      return Type3();
    default:
      return Type1();
  }
};

const Card = ({ story, setPop, type }) => {
  return <CardType type={type} setPop={setPop} story={story} />;
};

export default Card;
