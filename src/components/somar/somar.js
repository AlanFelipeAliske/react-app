const Somar = () => {
    let n1 = 10
    let n2 = 20

    function soma(n1, n2){
        return n1 + n2;
    }

    return(
        <div>
            <p>
                Resultado: {soma(n1, n2)}
            </p>
        </div>
    )
} 
export default Somar
