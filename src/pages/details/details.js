import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const api = '04c1d219612b5f28b8117f7721983c05'
const image = 'https://image.tmdb.org/t/p/w500'

const Details = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image}${data.poster_path}`,
                    release: data.release_date,
                }
                setMovie(movie)
                console.log(movie)
            })

    }, [id])

    return (
        <div>
            {movie.title}
            {movie.sinopse}
        </div>
    )
}
export default Details