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
          <a class="nav-link active" href="OurService">Our Service
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="Aboutus">Aboutus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="TEchnology">TEchnology</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="ContactUs">Contact Us</a>
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