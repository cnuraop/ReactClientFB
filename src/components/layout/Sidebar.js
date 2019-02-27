import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <Link to="/client/add" className="btn btn-success btn-block">
          <i className="fas fa-plus" /> New
        </Link>
      </div>
    );
  }
}

export default Sidebar;
