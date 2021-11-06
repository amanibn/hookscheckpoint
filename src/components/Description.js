import { useParams } from "react-router";
 const Description = ({ dataMovies }) => {
   console.log(dataMovies)
  var  slug  = useParams();
  console.log(slug)
  
  return (
    <div className="container">
     {dataMovies.filter(dataMovie => dataMovie.id ==slug.id).map(el => (
  <div className='col'>
  <iframe width="683" height="384" src={el.trailerLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h1>{el.title}</h1>
  <p>{el.description}</p>


</div>
))}

    </div>
  );
}
export default Description
