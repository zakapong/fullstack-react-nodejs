import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import * as actions from "../../actions/auth";


const DashboardPage = ({isConfirmed, isAuthenticated, logout}) =>(
    <div>
 {!isConfirmed && <ConfirmEmailMessage />}
 
 <h1>DashBoard Page</h1>
    {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <div>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </div>
    )}
   </div>
);

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      isConfirmed: !!state.user.confirmed,
      isAuthenticated: !!state.user.token

    };
  }


  export default connect(mapStateToProps, { logout: actions.logout })(DashboardPage);
