import React from "react";

function MusicTable (props) {
    return(
        <table>
        <thead>

            
                <th>
                    Song Title
                </th>
                <th>
                    Artist
                </th>
                <th>
                    Album
                </th>
                <th>
                    Genre
                </th>
                <th>
                Release Date
                </th>
            
        </thead>
        <tbody> 
            
            {props.songs.map(song => { 
                return (
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.releaseDate}</td>

                        

                    </tr>
                    
                    

                )

            })};
        
        </tbody> 
        </table>
    )
    
}

export default MusicTable