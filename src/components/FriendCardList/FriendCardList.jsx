import "./index.css";
import { GET } from "../../utils/api.js";
import { useState, useEffect } from "react";
import FriendCard from "../FriendCard";

const FriendCardList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET("friends").then((data) => {
      setFriendList(data);
    });
  }, []);

  return (
    <div className="FriendCardList">
      {friendList.length ? (
        friendList.map((friend) => (
          // friend.id &&
          <FriendCard content={friend} key={friend["id"]} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendCardList;
