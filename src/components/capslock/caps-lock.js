
const CapsLock = (props) => {

    const texto = props.capsLock
    const textoCapsLock = texto.toUpperCase()

    console.log(textoCapsLock)

    return (
        <div>
            {textoCapsLock}
        </div>
    )
}
export default CapsLock