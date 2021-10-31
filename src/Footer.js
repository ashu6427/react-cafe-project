import React from "react";

const Footer = () => {
  return (
    <nav class="navbar navbar-light bg-dark">
      <form class="container-fluid">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">
            Order Address
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="address"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
    </nav>
  );
};

export default Footer;
