import CapsLock from "../../components/capslock/caps-lock"
import Contador from "../../components/contador/contador"
import Somar from "../../components/somar/somar"
import Header from "../../components/header/header"
import Filmes from "../filmes/filmes"

const Home = () => {

    let teste = 'teste para mudar letras para maiusculas'

    return(
        <div>
            <Header>
                <h1>teste children</h1>
            </Header>
            <CapsLock capsLock={teste} />
            <Contador />
            <Somar />
            <Filmes />
        </div>
    )
}
export default Home