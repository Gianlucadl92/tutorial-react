import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h3>Sono la pagina dei Profili</h3>
      <nav className="link">
        <Link className="no-decoration" to="me">
          Il mio profilo
        </Link>
        <Link className="no-decoration" to="/profile/2">
          Profilo 2
        </Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
