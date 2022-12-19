import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0)

    function funContador() {


        if (contador < 10) {
            setContador(contador + 1)
            console.log(contador)

        } else {
            setContador(contador - contador)
            console.log(contador)
        }

    }

    return (
        <div>
            <button onClick={funContador}>{contador}</button>
        </div>
    )


}
export default Contador