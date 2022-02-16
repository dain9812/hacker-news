import { getUser } from "../utils/Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUser(id).then((res) => setUser(res.data));
  }, [id]);

  return (
    <div className="profile">
      <p className="text" dangerouslySetInnerHTML={{ __html: user.about }}></p>
      <div className="info">
        <p>
          joined<span>{user.created}</span>
        </p>
        <p>
          has<span>{user.karma} Karma</span>
        </p>
      </div>
      <div className="btn">
        <button className="profile-btn">submissions</button>
        <button className="profile-btn">comments</button>
        <button className="profile-btn">favourites</button>
      </div>
    </div>
  );
};

export default Profile;
