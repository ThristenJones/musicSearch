
import React from "react";



function SearchBar (props) {
return(
  <nav class="navbar navbar-default navbar-inverse">
  <form class="navbar-form navbar-right" role="search">
    <div class="input-group">
       <input type="text" class="form-control" value = {props.handleState} onChange ={props.handleState}/>
       <span class="input-group-btn">
           <button type="button" class="btn btn-default"><span class="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span>SEARCH</button>
       </span>
      
    </div>
 </form>
</nav>
)

}

export default SearchBar;