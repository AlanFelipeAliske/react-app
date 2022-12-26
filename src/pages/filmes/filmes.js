import { useEffect, useState } from "react"
import { Container } from "./styles"
import { Link } from "react-router-dom"

const api = '04c1d219612b5f28b8117f7721983c05'
const image = 'https://image.tmdb.org/t/p/w500'

const Filmes = () => {

    const [movies, setMovies] = useState([])

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        setMovies(data.results)
    })
        
}, [])

    return (
        <Container>
            <h1>Filmes</h1>
             <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                        <Link to={`/details/${movie.id}`}><img src={`${image}${movie.poster_path}`} alt={movie.title} /></Link>
                            
                            <span>{movie.title}</span>
                        </li>
                    )

                })}
            </ul>
        </Container>
    )
}
export default Filmes