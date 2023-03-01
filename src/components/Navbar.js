import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/myinfo">my info</NavLink>
      </div>
      {/* <div>
        <NavLink to="/search">Search</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">MyPage</NavLink>
      </div> */}
    </nav>
  );
}

export default Navbar;
