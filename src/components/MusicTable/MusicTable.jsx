import React from "react";

function MusicTable (props) {
    return(
        <table>
            <thead>
                <th>
                   TITLE
                </th>
                <th>
                   ALBUM
                </th>
                
                <tbody>
                <td>{ props.songs }</td>
                </tbody>
                <th>
                   ARTIST
                </th>
                <th>
                   GENRE
                </th>
                <th>
                   REALEASE DATE
                </th>
                   
         </thead>
        </table>
    )
    
}

export default MusicTable