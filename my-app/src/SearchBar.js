import React, { Component } from "react";

export default class SearchBar extends Component {

    //controlled component = değeri, react tarafından control edilen form elemanı oluyor value. Valueyi statik yerine dinamik yaptık.
    state = {
        searchQuery:""
    }

    handleFormSubmit = (e) =>{ //burada form da entere basınca, sayfa kendini renderliyodu. preventDefault ile onu durdurduk. Artık entere basınca renderlemiyor.
    e.preventDefault();
    }

  render() {
    return (
     //value yi dinamik hale getirmemiz lazım. Bi de bizim kontrolümüze alıcaz.
     //Onchange ile yazıyı yakalıyoruuz. Klavyeden ne girersen durum değişiyor. O yüzden state bilgisi gibi düşünüyoruz.

        <div className="mt-3">
        <form className="form-inline my-2 my-lg-0 " onSubmit={this.handleFormSubmit}>
      <input onChange={(e) =>this.setState({searchQuery: e.target.value})} value={this.state.searchQuery} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/> 
    </form>
        </div>

    );
  }
}
