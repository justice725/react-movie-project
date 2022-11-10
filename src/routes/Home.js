import "./css/home.scss";
import Movie from "../components/movie"
import { useEffect, useState } from "react";

function Home() {
// Movie component
const [loading, setLoading] = useState(true);
const [movies, setMovies] = useState([]);
const getMovies = async() => {
    const json = await(
        await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
    ).json(); 
    setMovies(json.data.movies);
    
    setLoading(false);// 이 상태로 console.log로 getMovies를 확인하면 두 번 나오는데, 그것은 첫번째로 setMovies로 데이터를 가져오고, setLoading를 두번째로 사용했기 때문이다.
    // await 안에 await을 감싸면서 불필요한 response를 삭제하여 더 짧은 코드로 작성하는 방법이다.
};

useEffect(()=>{
    getMovies();
}, []);
// Movie component

return (
<div className="main_full">
  <div className="main_section">
    {loading ? (
      <div className="loading_box">
        <h1 className="loading">Loading...</h1>
      </div>
    ) : (
      <div className="movie_box">
        {movies.map((movie)=> (
          <Movie 
          medium_cover_image={movie.medium_cover_image} 
          key={movie.id}
          id={movie.id}
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres} 
          />
        ))}
      </div>
    )} 
  </div>
</div>


);
}

export default Home;