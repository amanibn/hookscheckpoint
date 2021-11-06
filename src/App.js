import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from "uuid";
import React, {useState } from "react"; 
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import Description from './components/Description';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App () {
  const [movies, setMovies] = useState([
    {  
    id: uuidv4(),  
    title:'Violet sit amet consectetur',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi neque, mollis eget lobortis vitae, mattis eget mi. Fusce in sapien et odio ultrices rutrum. Maecenas gravida, nulla id pharetra imperdiet, ante nulla imperdiet tellus, laoreet maximus ligula sem sed dui. Curabitur hendrerit turpis vitae mi vehicula, a mollis orci viverra. Nunc ultrices, tellus quis fermentum consectetur, nisi metus tempor ligula, id pretium ligula eros non erat.',
    posterURL:'https://cdn.myanimelist.net/s/common/uploaded_files/1478104431-bccbc316373803bfcfd01e167a7c481f.jpeg',
    trailerLink:'https://www.youtube.com/embed/9r782SajIVU',
    rating:'2'
  },
  {  
    id: uuidv4(),   
    title:'La adipiscing elit',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi neque, mollis eget lobortis vitae, mattis eget mi. Fusce in sapien et odio ultrices rutrum. Maecenas gravida, nulla id pharetra imperdiet, ante nulla imperdiet tellus, laoreet maximus ligula sem sed dui. Curabitur hendrerit turpis vitae mi vehicula, a mollis orci viverra. Nunc ultrices, tellus quis fermentum consectetur, nisi metus tempor ligula, id pretium ligula eros non erat.',
    posterURL:'https://i.ytimg.com/vi/ynxpBycSkhs/hqdefault.jpg',
    trailerLink:'https://www.youtube.com/embed/etA9TxAusCQ',
    rating:'4'
  },
  {  
    id: uuidv4(),   
    title:'A consectetur adipiscing elit',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi neque, mollis eget lobortis vitae, mattis eget mi. Fusce in sapien et odio ultrices rutrum. Maecenas gravida, nulla id pharetra imperdiet, ante nulla imperdiet tellus, laoreet maximus ligula sem sed dui. Curabitur hendrerit turpis vitae mi vehicula, a mollis orci viverra. Nunc ultrices, tellus quis fermentum consectetur, nisi metus tempor ligula, id pretium ligula eros non erat.',
    posterURL:'https://i.ytimg.com/vi/xpdxL0-kHgA/mqdefault.jpg',
    trailerLink:'https://www.youtube.com/embed/xpdxL0-kHgA',
    rating:'5'
  },
  { 
    id: uuidv4(),    
    title:'Flavors Cras mi neque',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi neque, mollis eget lobortis vitae, mattis eget mi. Fusce in sapien et odio ultrices rutrum. Maecenas gravida, nulla id pharetra imperdiet, ante nulla imperdiet tellus, laoreet maximus ligula sem sed dui. Curabitur hendrerit turpis vitae mi vehicula, a mollis orci viverra. Nunc ultrices, tellus quis fermentum consectetur, nisi metus tempor ligula, id pretium ligula eros non erat.',
    posterURL:'https://cdn.myanimelist.net/s/common/uploaded_files/1478104431-bccbc316373803bfcfd01e167a7c481f.jpeg',
    trailerLink:'https://www.youtube.com/embed/9r782SajIVU',
    rating:'1'
  },

])

const addMovie = newmovie=>{
  setMovies(
    c=>c.concat(newmovie)

  )
  }
  /*const searchMovie = newmovie=>{
    if(newmovie.title.trim() !=''){
      console.log(newmovie)
    setMovies(
      c=>c.title.toLowerCase().includes(newmovie.title.toLowerCase())
  
    )


  }
}*/
const searchMovie = test => {
    const results = movies.filter((user) => {
      if(test.title !=='' && test.rating!=0) {
      return user.title.toLowerCase().includes(test.title.toLowerCase().trim()) && user.rating<= test.rating ;
      }else if(test.title !=='' && test.rating==0){
        return user.title.toLowerCase().includes(test.title.toLowerCase().trim());
      }else if(test.title =='' && test.rating!=0){
        return user.rating<= test.rating;
      }
      
      // Use the toLowerCase() method to make it case-insensitive
    });
    setMovies(results);
  /*} else {
    setMovies(movies);
  }*/

  //setName(keyword);
};
  return (
    <div className="App">
      <Routes>
        
      <Route path="/" element={
      <header className="App-header">
      <Filter searchMovie={searchMovie} /> 
      <AddMovie addMovie={addMovie} />   
     <MovieList dataMovies={movies} />
     
      </header>
      }>
       </Route> 
      <Route  path="/description/:id" element={<Description dataMovies={movies} />} />
      </Routes>
    </div>
   
  );

}

export default App;
