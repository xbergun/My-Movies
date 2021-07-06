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
        "rating":8.3,
        "overview":"Just add your desired image size (width & height) after our URL, and you'll get a random image"
  
      },
      {
        "id":4,
        "name":"Arrow",
        "rating":8.3,
        "overview":"Just add your desired image size (width & height) after our URL, and you'll get a random image"
  
      },
      {
        "id":5,
        "name":"Arrow",
        "rating":8.3,
        "overview":"Just add your desired image size (width & height) after our URL, and you'll get a random image"
  
      }
    ]
  }

  deleteMovie = (movie) =>{
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )
    this.setState({
      movies:newMovieList
    })
    //farklı bir patterni daha var.
    this.setState(state => ({
      movies:newMovieList
    }))
  }

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
           <SearchBar/>
          </div>
        </div>
        <MovieList movies={this.state.movies} delete={this.deleteMovie}/>
      </div>
    );
  }
 
}

export default App;
