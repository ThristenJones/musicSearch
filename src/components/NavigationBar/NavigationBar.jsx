import React from "react";
import { render } from "react-dom";

function NavigationBar(props) {
    return(
        <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Album</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Genres</a>
        </li>
      </ul> 
    )
}

export default NavigationBar;