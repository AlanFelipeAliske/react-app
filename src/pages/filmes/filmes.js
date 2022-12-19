import { Container } from "./styles"

const movies = [
    {
        id: 1,
        title: 'titulo 1',
        image_url: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'

    },
    {
        id: 2,
        title: 'titulo 2',
        image_url: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
    },
    {
        id: 3,
        title: 'titulo 3',
        image_url: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
    }
]

console.log(movies)

const Filmes = () => {
    return (
        <Container>
            <h1>Filmes</h1>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <img src={movie.image_url} alt={movie.title} />
                            <span>{movie.title}</span>
                        </li>
                    )

                })}
            </ul>
        </Container>
    )
}
export default Filmes