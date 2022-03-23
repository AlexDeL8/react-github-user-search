import "./main_container.scss";

import Header from "../header/Header.js";
import UserCard from "../user_card/UserCard.js";

import { UserCardProvider } from "../../context/UserCardContext.js";

const MainContainer = () => {
  return (
    <>
      <div className="MainContainer">
        <UserCardProvider>
          <Header />
          <UserCard />
        </UserCardProvider>
      </div>
    </>
  );
};

export default MainContainer;
