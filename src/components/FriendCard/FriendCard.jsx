import "./index.css";

const FriendCard = ({ content }) => {
  return (
    <div className="FriendCard">
      <img src={content.photo} alt="FriendCard__photo" />
      <p className="FriendCard__name"> {content.name}</p>
    </div>
  );
};

export default FriendCard;
