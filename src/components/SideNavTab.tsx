import React from "react";

export default function SideNavTab() {
  return (
    <nav className="nav nav-tabs flex-column min-vh-100">
      <a className="nav-link active" aria-current="page" href="#">
        Analysis
      </a>
      <a className="nav-link disabled">History</a>
      <a className="nav-link">Sidebar Nav</a>
    </nav>
  );
}
