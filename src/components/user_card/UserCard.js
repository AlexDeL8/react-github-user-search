import "./user_card.scss";

import UserDisplay from "./UserDisplay.js";
import UserInfo from "./UserInfo.js";

const UserCard = () => {
  return (
    <>
      <div className="UserCard">
        <UserDisplay />
        <UserInfo />
      </div>
    </>
  );
};

export default UserCard;
