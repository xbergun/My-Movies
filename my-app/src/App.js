import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
class App extends React.Component{
  
  state=  {
    movies:[
      {
        "id":1,
        "name":"The Flash",
        "rating":8.3,
        "overview":"Just add your desired image size (width & height) after our URL, and you'll get a random image"
  
      },
      {
        "id":2,
        "name":"İnterstaller",
        "rating":6.8,
        "overview":"Just add your desired image size (width & height) after our URL, and you'll get a random image"
  
      },
      {
        "id":3,
        "name":"Arrow",
        "rating":7.9,
        "overview":"Just add your desired image size (width & height) after our URL, and you'll get a random image"
  
      }
    ]
  }

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
           
          </div>
        </div>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
 
}

export default App;
