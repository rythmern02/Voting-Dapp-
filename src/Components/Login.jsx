import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <h1 className="welcome-message">Welcome to the Decentralized Voting WEBAPP </h1>
      <button className="login-button" onClick={props.connectWallet}>Login with Metamask</button>
    </div>
  );
};

export default Login;
