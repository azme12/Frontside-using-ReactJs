import React, { Component } from 'react';

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="Our Service">Our Service
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="About us">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="TEchnology">TEchnology</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Contact Us</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="contact us">Phone</a>
            <a class="dropdown-item" href="email">email</a>  
            <a class="dropdown-item" href="password">Password</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="subscribe">Subscribe</a>
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
            </div>

        );
    }
}

export default NavComponent;