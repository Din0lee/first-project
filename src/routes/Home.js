import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const today = new Date();
        const yesterday = new Date(today.setDate(today.getDate()-1));
        const year = yesterday.getFullYear();
        const month = ('0' + (yesterday.getMonth() + 1)).slice(-2);
        const day = ('0' + yesterday.getDate()).slice(-2);

        const dateString = year + month  + day;
        fetch(
            `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${dateString}`
        )
            .then(response => response.json())
            .then((json) => {
                setMovies(json.boxOfficeResult.dailyBoxOfficeList);
                setLoading(false);
            });
    },[]);

    return (
      <div>
        {loading ? <h1>Loading..</h1> : 
         <div>{movies.map(movie => 
            <Movie
            movieCd={movie.movieCd}
            rankOldAndNew ={movie.rankOldAndNew}
            rank={movie.rank}
            openDt={movie.openDt}
            movieNm={movie.movieNm} 
            />
            )}</div>
        }
      </div>
    );
}

export default Home;