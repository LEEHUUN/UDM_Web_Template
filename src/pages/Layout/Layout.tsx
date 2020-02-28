import React from "react";
import "./Layout.css";
import { pageList } from "src/pages/pageList";

function Layout() {
  return (
    <div className="Layout">
      <div className="header">
        Header
        <span> Title : Template Layout Page</span>
      </div>
      <aside className="nav">
        Navi <span> {pageList}</span>
      </aside>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default Layout;
