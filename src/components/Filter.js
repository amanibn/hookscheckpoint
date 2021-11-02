import React, {useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Filter(props) {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    console.log(title)
const  handelSearch = event=>{
    console.log(event)
    var newMovie={
        title:event,
        rating:rating

    }
    //event.preventDefault();
    console.log(newMovie);
    props.searchMovie(newMovie)
    }
    function handelSearchRating(index){
       
        var newMovie={
            rating:index,
            title:title
    
        }
         console.log(rating)
        //event.preventDefault();
        console.log(newMovie);
       props.searchMovie(newMovie)
        }
    return (
        <div>
         <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => {setRating(index); handelSearchRating(index);}}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>   

      
 
    <div className="form-group has-search mb-2">
   
    <span className="fa fa-search form-control-feedback"></span>
    <input onChange={ (event) =>{setTitle(event.target.value); handelSearch(event.target.value);} } type="text" className="form-control text-center" value={title} />
 

</div>
</div>
    );
}

export default Filter;