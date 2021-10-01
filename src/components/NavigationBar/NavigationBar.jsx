import React from "react";


function NavigationBar(props) {
    return(
      <nav class="navbar navbar-dark bg-dark">
      <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Song title</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Artist</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Album</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Genre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Release date</a>
      </li>
    </ul> 
    </nav>
    )
}

export default NavigationBar;