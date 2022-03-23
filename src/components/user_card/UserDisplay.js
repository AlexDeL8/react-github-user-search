import "./user_card.scss";
import LocationIcon from "../../images/location-icon.png";

import { useContext } from "react";

import { UserCardContext } from "../../context/UserCardContext.js";

const UserDisplay = () => {
  const { displayData } = useContext(UserCardContext);
  return (
    <>
      <div className="UserDisplay">
        <img
          id="UserAvatar"
          src={displayData.userAvatar}
          alt="Github Profile"
        />
        <p id="UserName">{displayData.userName}</p>
        <div>
          <img id="LocationIcon" src={LocationIcon} alt="Location icon" />
          <span id="UserLocation">{displayData.userLocation}</span>
        </div>
      </div>
    </>
  );
};

export default UserDisplay;
