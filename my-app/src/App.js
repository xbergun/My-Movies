import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from 'axios'
require('dotenv').config()

console.log(process.env.REACT_APP_API_KEY)



class App extends React.Component {
  //fetch, asenkron olarak network sorguları yapmamızı sağlayan fonksiyon
  //bize bir promise döner.
  state = {
    movies:[],
    searchQuery: "",
  };
                                                                           
//axios ile get ve delete request
  async  componentDidMount(){
    //fetch ile, responseyi json formatına çeviriyoduk. Axios direkt json formatında nesne döndürüyor.
   //const response = await axios.get(`https://api.themoviedb.org/3/list/7102272?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`) GERÇEK APİDEN ALDIĞIMIZ

   const response = await axios.get(`272?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
   console.log(response.data.items)
  this.setState({movies: response.data.items})
  }



  //AXİOS APİ İLE OLUŞTURULAN DELETE
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3000/movies/${movie.id}`)

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
      return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
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


//19
//senkron, aynı anda çalışabilen, asenkron da aynı anda çalışamayan
//responsu alana kadar bekle diyoruz. Ondan sonra ypaıcaksın o işi.
//awaitten sonra get diyoruz o isteği alana kadar bekle. Alınca aşağıdaki koda geç anlamında.






     //UI compları dom da yerini aldıktan sonra hemen çalışıyodu.
               //Dışarıdan http isteği yapıcaksak bu metodu kullanmalıyız.
                                                                                  
                                                                                //  async  componentDidMount(){
                                        //     const baseURL = "http://localhost:3000/movies"
                                                                                //     const response = await fetch(baseURL)
                                                                                //     //promise dönüyor. Bize json tabanlı bir dosya lazım
                                                                                //     //fetch asenkron döndüğü için jsona çevirdiğimiz de hata veriyor.
                                                                                //     // o yüzden fonksiyonumuzu asenkorn haline getirmemiz gerek.
                                                                                //     //await ve async
                                                                                //     console.log(response)
                                                                                //     const data = await response.json();
                                                                                //     console.log(data)
                                                                                //     this.setState({movies : data})
                                                                                //   }

                                                                                
  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //   this.setState({
  //     movies: newMovieList,
  //   });
  //   //farklı bir patterni daha var.
  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };
  
  //FETCH APİ İLE OLUŞTURULAN DELETE
  // deleteMovie = async (movie) => {
  //   const baseURL = `http://localhost:3000/movies/${movie.id}`
  //   await fetch(baseURL, {
  //     method:"DELETE"
  //   })
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //   this.setState({
  //     movies: newMovieList,
  //   });
  //   //farklı bir patterni daha var.
  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };