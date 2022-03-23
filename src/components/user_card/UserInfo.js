import "./user_card.scss";
import AgeIcon from "../../images/cake-icon.png";
import CodeIcon from "../../images/code-icon.png";
import FollowerIcon from "../../images/followers-icon.png";
import FollowingIcon from "../../images/following-icon.png";

import { useContext } from "react";

import UserInfoTile from "./UserInfoTile.js";

import { UserCardContext } from "../../context/UserCardContext.js";

const UserInfo = () => {
  const { infoData } = useContext(UserCardContext);
  return (
    <>
      <div className="UserInfo">
        <UserInfoTile
          title="Profile Age (Years)"
          tileIcon={AgeIcon}
          info={infoData.userProfileAge}
        />
        <UserInfoTile
          title="# of Repos (Public)"
          tileIcon={CodeIcon}
          info={infoData.userRepos}
        />
        <UserInfoTile
          title="Followers"
          tileIcon={FollowerIcon}
          info={infoData.userFollowers}
        />
        <UserInfoTile
          title="Following"
          tileIcon={FollowingIcon}
          info={infoData.userFollowing}
        />
      </div>
    </>
  );
};

export default UserInfo;
