import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
class App extends React.Component {
  //fetch, asenkron olarak network sorguları yapmamızı sağlayan fonksiyon
  //bize bir promise döner.
  state = {
    movies:[],
    searchQuery: "",
  };
//UI compları dom da yerini aldıktan sonra hemen çalışıyodu.
//Dışarıdan http isteği yapıcaksak bu metodu kullanmalıyız.
  
 async  componentDidMount(){
    const baseURL = "http://localhost:3000/movies"
    const response = await fetch(baseURL)
    //promise dönüyor. Bize json tabanlı bir dosya lazım
    //fetch asenkron döndüğü için jsona çevirdiğimiz de hata veriyor.
    // o yüzden fonksiyonumuzu asenkorn haline getirmemiz gerek.
    //await ve async
    console.log(response)
    const data = await response.json();
    console.log(data)
    this.setState({movies : data})
  }

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