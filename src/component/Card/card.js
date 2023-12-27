import React, {useEffect , useState} from "react"
import Skeleton , {SkeletonTheme} from "react-loading-skeleton"
import "./card.css"
import {Link} from "react-router-dom"

const Card = ({movies}) => {
    const [ isLoading , setisLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setisLoading(false)
        }, 1500)
    },[])

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={10} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movies.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movies?movies.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movies ?movies.original_title:""}</div>
                    <div className="card__runtime">
                        {movies?movies.release_date:""}
                        <span className="card__rating">{movies?movies.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movies ? movies.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}
export default Card