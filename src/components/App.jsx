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

    }

    render(){
        return(
            <div>
                <NavigationBar />
                <SearchBar />
                <MusicTable songs ={this.state.songs} />
           
            </div>
        )
    }


}

export default App;
