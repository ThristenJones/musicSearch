import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import "./App.css"
import SearchBar from './SearchBar/SearchBar';
import NavigationBar from './NavigationBar/NavigationBar';



class App extends Component {
    constructor(props){
    super(props)
    this.state = {songs:[] }
    }

    componentDidMount(){
        axios.get('http://www.devcodecampmusiclibrary.com/')
        .then(response => this.setState({songs:response.data}))
        .then(console.log(this.state.songs))

    }

    render(){
        console.log (this.state.songs)
        return(
            <div>
                <NavigationBar />
                <SearchBar />
            <table>
                <MusicTable />
            </table>
            </div>
        )
    }


}

export default App;
