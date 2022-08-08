import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const {movieCd} = useParams();
    const [details, setDetail] = useState([]);
    const [actors, setActor] = useState([]); 
    useEffect(()=>{
        fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCd}`)
        .then(response => response.json())
        .then((json) => {
            setDetail(json.movieInfoResult.movieInfo);
            setActor(details.actors);
        })
    },[]);
    console.log(actors);
    return (
        <div>
            <h3>영화명 : {details.movieNm}({details.movieNmEn})</h3>
            <h3>러닝타임 : {details.showTm}분</h3>
        </div>
    );
}

export default Detail;