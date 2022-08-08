import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({movieCd,rankOldAndNew,rank,openDt,movieNm}){
    return <div >
    <h3> {(rankOldAndNew === "NEW")? "NEW!!" : null} 영화 순위 : {rank}위</h3>
    <p>개봉일자 : {openDt}</p>
    <h2>
    영화 제목 : <Link to={`/movie/${movieCd}`}>{movieNm}</Link>
    </h2>
</div>;
}

Movie.propTypes={
    movieCd:PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    rankOldAndNew:PropTypes.string.isRequired,
    movieNm:PropTypes.string.isRequired,
}

export default Movie;