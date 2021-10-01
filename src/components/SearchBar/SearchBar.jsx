
import React from "react";


function SearchBar (props){
return(
  <nav class="navbar navbar-default navbar-inverse">
  <form class="navbar-form navbar-right" role="search">
    <div class="input-group">
       <input type="text" class="form-control" placeholder="Search" />
       <span class="input-group-btn">
           <button type="button" class="btn btn-default"><span class="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span>Click</button>
       </span>
       <div>
  {props.song.filter(song => song.includes('title')).map(filteredName => (
    <li>
      {filteredName.title}
    </li>
  ))}
</div>
    </div>
 </form>
</nav>
)

}

export default SearchBar;