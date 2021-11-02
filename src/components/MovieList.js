import MovieCard from "./MovieCard";

const MovieList = ({ dataMovies }) => {
  /*handleClick=()=>this.setState(
    {show :!this.state.show}
     
     )*/
  return (
    <div className="container">
      <div className="row">
     
      {dataMovies.length && dataMovies.map((el) => (
        <MovieCard key={el.id} movie={el}  />
      ))}
     
     </div>
     </div>
  );
};

export default MovieList;