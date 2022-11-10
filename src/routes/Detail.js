import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const {movie, setMovie} = useState();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie)
    };
    
    useEffect(()=> {
        getMovie();
    }, []);

    return <h1>Detail</h1>
}
// 코드 챌린지 해야 할 것, json을 가져오기만 하고 아무것도 하지 않고 있으니 movie, setMovie 스테이트를 만들어서
// 그 데이터를 실제 화면에 return 할 것
// 하고싶다면, loading 스테이트도 만들어서 동일하게 작동하도록 할 것
// css를 제작할 것
// 다른 사람이 만든 것 참고 사이트 https://mascaradee.github.io/mulberry/ 
// https://brilliant-froyo-4c6888.netlify.app/
// 
export default Detail;