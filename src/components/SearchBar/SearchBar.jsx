import React from "react";

function SearchBar(props) { 
    return(
    <nav class="navbar navbar-default navbar-inverse">
    <form class="navbar-form navbar-right" role="search">
      <div class="input-group">
         <input type="text" class="form-control" placeholder="Search" />
         <span class="input-group-btn">
             <button type="button" class="btn btn-default">Click</button>
         </span>
      </div>
   </form>
 </nav>
    )
 
} 

export default SearchBar;
