import React, { Component } from "react";
import parse from 'html-react-parser';

export default function MovieCard({ movie }) {
  const project = (rating) => {
    switch(rating) {

      case '1':   return '<span><i class="fa fa-star active"></i></span><span><i class="fa fa-star inactive"></i></span><span><i class="fa fa-star inactive"></i></span><span><i class="fa fa-star inactive"></i></span><span><i class="fa fa-star inactive"></i></span>';
      case '2':   return '<span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star inactive"></i></span><span><i class="fa fa-star inactive"></i></span><span><i class="fa fa-star inactive"></i></span>';
      case '3': return '<span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star inactive"></i></span><span><i class="fa fa-star inactive"></i></span>';
      case '4':  return '<span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star inactive"></i></span>';
      case '5':  return '<span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span><span><i class="fa fa-star active"></i></span>';
      
      
    }
  }
  return (
    
        <div className='col-3'>
        <img className='img-fluid posterURL' src ={movie.posterURL} />
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <div className="star-ratings">
  <div className="fill-ratings">
  { parse(project(movie.rating)) }
  </div>
</div>
      
    </div>
  );
}