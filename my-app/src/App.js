import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "The Flash",
        rating: 8.3,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      },

      {
        id: 2,
        name: "Interstellar",
        rating: 6.8,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      },

      {
        id: 3,
        name: "Arrow",
        rating: 7.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },

      {
        id: 4,
        name: "Rogue",
        rating: 7.4,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      },

      {
        id: 5,
        name: "Project Power",
        rating: 6.7,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
      },

      {
        id: 6,
        name: "Superman",
        rating: 7.6,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
      },
    ],
    searchQuery: "",
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({
      movies: newMovieList,
    });
    //farklı bir patterni daha var.
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) =>{
    this.setState({searchQuery: event.target.value})
  }

  render() {
    //
    let filteredMovies =this.state.movies.filter((movie) =>{
      return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      //aradağımız kelime, eğer indexof un içinde varsa o return eder.
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} delete={this.deleteMovie} />
      </div>
    );
  }
}

export default App;

//16. video
//ilk olarak SearchBarda ki onChange ile herhangi bir değişikliğe kısa yol yaptık. Searchdan çıkardık state durumunu.
//App js propsu gönderiyor. Burda ki props ise this.searchMovie fonksiyonunu çalıştır.
//searchmovie direkt event alıyor. O event İnput onChangeden geliyor.
//girdiğimiz değeri görebiliyoruz target value ile. Onu statede ki boş searchquery e atıyoruz.
//let filtered ile de yeni array oluşturup filtreledik.