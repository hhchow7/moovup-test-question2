import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function Friend(props) {
  const { icon, name, handleClick } = props;
  return (
    <div
      className="friend"
      onClick={() => {
        if (handleClick) {
          handleClick();
        }
      }}
    >
      <img className="friend__img" src={icon} alt="icon" />
      <div className="friend__name">{name}</div>
    </div>
  );
}

Friend.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Friend;
