import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <nav className="navbar navbar-light bg-info">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h5 className="nav-link text-white">Home</h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/angajati" style={{ textDecoration: "none" }}>
            <h5 className="nav-link text-white">
              Angajati
              <span className="badge rounded-pill bg-danger ms-2">
                {!props.records.length ? null : props.records.length}
              </span>
            </h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
function mapStateToProps(state) {
  return {
    records: state.form.displayData,
  };
}

export default connect(mapStateToProps, null)(Header);
