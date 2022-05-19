import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavbarList() {
  const [visibility, setVisibility] = useState("show");

  return (
    <section className={"navbar__list " + visibility}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            aria-current="page"
            to={"/"}
            onClick={() =>
              visibility === "show"
                ? setVisibility("hide")
                : setVisibility("show")
            }
          >
            Analysis
          </NavLink>
        </li>

        <li className="nav-item">
          <span
            className="nav-link"
            aria-current="page"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Static Content
          </span>

          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <NavLink
              className="nav-link sub_link"
              to={"/navbar"}
              onClick={() =>
                visibility === "show"
                  ? setVisibility("hide")
                  : setVisibility("show")
              }
            >
              Navbar
            </NavLink>

            <NavLink
              className="nav-link sub_link"
              to={"/staticcontent"}
              onClick={() =>
                visibility === "show"
                  ? setVisibility("hide")
                  : setVisibility("show")
              }
            >
              About Section
            </NavLink>

            <NavLink
              className="nav-link sub_link"
              to={"/staticcontent"}
              onClick={() =>
                visibility === "show"
                  ? setVisibility("hide")
                  : setVisibility("show")
              }
            >
              Services Section
            </NavLink>


            <NavLink
              className="nav-link sub_link"
              to={"/staticcontent"}
              onClick={() =>
                visibility === "show"
                  ? setVisibility("hide")
                  : setVisibility("show")
              }
            >
              Proposal Section
            </NavLink>


            <NavLink
              className="nav-link sub_link"
              to={"/staticcontent"}
              onClick={() =>
                visibility === "show"
                  ? setVisibility("hide")
                  : setVisibility("show")
              }
            >
              Cleants Section
            </NavLink>


            <NavLink
              className="nav-link sub_link"
              to={"/staticcontent"}
              onClick={() =>
                visibility === "show"
                  ? setVisibility("hide")
                  : setVisibility("show")
              }
            >
              Team Section
            </NavLink>


            <NavLink
              className="nav-link sub_link"
              to={"/staticcontent"}
              onClick={() =>
                visibility === "show"
                  ? setVisibility("hide")
                  : setVisibility("show")
              }
            >
              Footer
            </NavLink>

          </div>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            aria-current="page"
            to={"/homepage"}
            onClick={() =>
              visibility === "show"
                ? setVisibility("hide")
                : setVisibility("show")
            }
          >
            Test 1
          </NavLink>
        </li>

      </ul>
      <button
        className="btn navbar__close"
        onClick={() =>
          visibility === "show" ? setVisibility("hide") : setVisibility("show")
        }
      >
        <FontAwesomeIcon icon={faGear} className="fa-spin" />
      </button>
    </section>
  );
}

export default NavbarList;
