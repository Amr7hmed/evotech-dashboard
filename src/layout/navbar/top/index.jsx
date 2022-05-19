import {
  faArrowRightFromBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../images/logo-footer.png";
import React from "react";
import { Logout } from "../../../api/index.js";

function Navbartop() {
  return (
    <nav className="navbar__top">
      <div className="container">
        <div className="items">
          <div>
            <img src={Logo} alt="Logo" />
          </div>

          <div>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="btn menu_bars"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faCircleUser} />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="btn dropdown-item"
                      onClick={() => Logout()}
                    >
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbartop;
