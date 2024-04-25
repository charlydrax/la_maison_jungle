import '../styles/footer.css'

function Footer() {
    let inputValue
    return (
        <form className='lmj-footer'>
            <input type="email" placeholder="Entrez votre email" value={inputValue}onBlur={(e) => checkValue(e.target.value)}></input>
        </form>
    )
}
function checkValue(value) {
    if (!value.includes('@')) {
        alert("Veuillez saisir une adress mail valide")
    }
}

export default Footer