import "./header.scss";
import GitIcon from "../../images/git-icon.png";

import { useContext } from "react";

import { UserCardContext } from "../../context/UserCardContext.js";

const Header = () => {
  const { setUsernameEntered } = useContext(UserCardContext);
  return (
    <>
      <div className="Header">
        <div>
          <img className="HeaderIcon" src={GitIcon} alt="GitHub icon" />
          <h1 id="Title">GitHub User Search</h1>
          <img className="HeaderIcon" src={GitIcon} alt="GitHub icon" />
        </div>
        <div>
          <input id="SearchBar" placeholder="Enter username"></input>
          <button
            id="SearchButton"
            onClick={() => {
              setUsernameEntered(document.getElementById("SearchBar").value);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
