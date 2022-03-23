import React, { createContext, useState, useEffect } from "react";
import GitIcon from "../images/git-icon.png";

export const UserCardContext = createContext();

export const UserCardProvider = ({ children }) => {
  const [usernameEntered, setUsernameEntered] = useState("");
  const [userAvatar, setUserAvatar] = useState(GitIcon);
  const [userName, setUserName] = useState("---");
  const [userLocation, setUserLocation] = useState("Location Unavailable");

  const [userProfileAge, setUserProfileAge] = useState("---");
  const [userRepos, setUserRepos] = useState("---");
  const [userFollowers, setUserFollowers] = useState("---");
  const [userFollowing, setUserFollowing] = useState("---");

  useEffect(() => {
    async function getGitHubInfoByUsername() {
      try {
        if (usernameEntered.toLowerCase().trim() === "") {
          return;
        }

        let usernameInfo = await fetch(
          `https://api.github.com/users/${usernameEntered
            .toLowerCase()
            .trim()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        let usernameInfoJson = await usernameInfo.json();
        console.log(usernameInfoJson);
        //CARD DISPLAY
        //Avatar
        setUserAvatar(usernameInfoJson.avatar_url);
        //Name
        setUserName(usernameInfoJson.name);
        //Location
        usernameInfoJson.location === null
          ? setUserLocation("Location Unavailable")
          : setUserLocation(usernameInfoJson.location);
        //CARD INFO
        //Profile Age (years)
        calculateUserProfileAge(usernameInfoJson.created_at);
        //# of Repos
        setUserRepos(usernameInfoJson.public_repos);
        //# of Followers
        setUserFollowers(usernameInfoJson.followers);
        //# of Following
        setUserFollowing(usernameInfoJson.following);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("GitHub '/users' API call - complete");
      }
    }
    getGitHubInfoByUsername();
  }, [usernameEntered]);

  function calculateUserProfileAge(createdDate) {
    let createdDateObj = new Date(createdDate);
    let currentDateObj = new Date();
    let profileAgeYears =
      currentDateObj.getFullYear() - createdDateObj.getFullYear();

    if (
      createdDateObj.getMonth() > currentDateObj.getMonth() ||
      createdDateObj.getDay() > currentDateObj.getDay()
    ) {
      profileAgeYears -= 1;
    }

    if (profileAgeYears <= 0) profileAgeYears = "<1";
    setUserProfileAge(profileAgeYears);
  }

  return (
    <UserCardContext.Provider
      value={{
        setUsernameEntered,
        displayData: {
          userAvatar,
          userName,
          userLocation
        },
        displayMethods: {
          setUserAvatar,
          setUserName,
          setUserLocation
        },
        infoData: {
          userProfileAge,
          userRepos,
          userFollowers,
          userFollowing
        },
        infoMethods: {
          calculateUserProfileAge,
          setUserRepos,
          setUserFollowers,
          setUserFollowing
        }
      }}
    >
      {children}
    </UserCardContext.Provider>
  );
};
