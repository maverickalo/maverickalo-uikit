import React from "react";
import PropTypes from "prop-types";

const Nav = ({ components }) => {
  return (
    <div className="nav">
      {components.map(name => {
        return (
          <li key={name}>
            <a href={`#${name}`}>{name}</a>
          </li>
        );
      })}
    </div>
  );
};

Nav.propTypes = {
  components: PropTypes.array.isRequired
};

export default Nav;
