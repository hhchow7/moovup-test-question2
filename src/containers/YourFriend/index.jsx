import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import Map from "../../components/Map";
import Friend from "../../components/Friend";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function YourFriend() {
  const { state } = useLocation();

  const YourFriendHeader = () => {
    const history = useHistory();
    return (
      <div className="header header--your-friend">
        <div className="header--your-friend__back">
          <ArrowBackIosIcon
            onClick={() => {
              history.goBack();
            }}
          />
        </div>
        <div className="header__text">Your Friend</div>
        <div className="header--your-friend__dummy">
          <ArrowBackIosIcon />
        </div>
      </div>
    );
  };
  
  return (
    <>
    <YourFriendHeader />
    <div className="your-friend">
      <Map location={state.location} />
      <div className="mt-3"></div>
      <Friend
        name={`${state.name ? state.name.last : ""} ${
          state.name ? state.name.first : ""
        }`}
        icon={state.picture}
      />
      <div className="mt-3"></div>
    </div>
    </>
  );
}

export default YourFriend;
