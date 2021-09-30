import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import Friend from "../../components/Friend";

import "./style.scss";

const axios = require("axios").default;

function AllFriends() {
  const history = useHistory();
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    async function fetchData() {
      let config = {
        Authorization: "Bearer v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z",
      };
      setIsLoading(true);
      let response = await axios.get(
        "https://api.json-generator.com/templates/Xp8zvwDP14dJ/data",
        { headers: config }
      );
      if (response) {
        setFriends(response.data);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleFriendClick = (friend) => {
    history.push(`/friends/${friend._id}`, friend);
  };

  return (
    <>
      <div className="header">
        <div className="header__text">All Friends</div>
      </div>
      <div className="all-friends">
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {friends.map((fd) => {
          return (
            <div key={fd._id}>
              <Friend
                icon={fd.picture}
                name={`${fd.name ? fd.name.last : ""} ${
                  fd.name ? fd.name.first : ""
                }`}
                handleClick={() => {
                  handleFriendClick(fd);
                }}
              />
              <div style={{ marginBottom: "0.5rem" }}></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllFriends;
