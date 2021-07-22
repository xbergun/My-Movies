import React from 'react'

export default function MovieList(props) {
    //varsayılan olarak event nesnesi getirir.
    // const handleClick = (event) =>{
    //     console.log(event)
    // }
        return (
            <div className="row mt-3">
                {props.movies.map((movie)=>(
                         <div className="col-lg-4" key={movie.id}>
                         <div className="card mb-4 shadow-sm">
                             <img src={movie.imageURL} className="card-img-top" alt="sample Movie"/>
                             <div className="card-body">
                                 <h5 className="card-title">{movie.name}</h5>
                                 <p className="cart-text">{movie.overview}</p>
                                 <div className="d-flex justify-content-between align-items-center">
                                     <button onClick={(e) => props.delete(movie)} type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                     <h2><span className="badge badge-pill badge-primary bg-dark">{movie.rating}</span></h2>
                                 </div>
                             </div>
                         </div>
                     </div>
                ))}
            </div>
        )
    
}
