import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "lightgreen" : "gray" })}
      >
        Cancel
      </NavLink>
      <br />
      <NavLink
        to="/contact"
        style={({ isActive }) =>
          isActive ? { color: "darkgreen" } : { color: "gray" }
        }
      >
        Contact
      </NavLink>
      <br />
      <NavLink
        to="/invoice"
        style={({ isActive }) =>
          isActive ? { color: "green" } : { color: "gray" }
        }
      >
        Invoices
      </NavLink>
      <Outlet />
    </div>
  );
}
