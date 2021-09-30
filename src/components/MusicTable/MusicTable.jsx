import React from "react";

function MusicTable (props) {
    return(
        <div className= "row row-space">
        <thead>
            <tr>
                <th>
                    props.songs
                </th>
                <th>
                    props.songs.artist
                </th>
                <th>
                    props.songs.album
                </th>
                <th>
                    props.songs.genre
                </th>
            </tr>
        </thead>
        </div>
    )
    
}

export default MusicTable