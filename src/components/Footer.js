import '../styles/footer.css'
import { useState } from 'react'

// function Footer() {
//     let inputValue
//     return (
//         <form className='lmj-footer'>
//             <input type="email" placeholder="Entrez votre email" value={inputValue}onBlur={(e) => checkValue(e.target.value)}></input>
//         </form>
//     )
// }
// function checkValue(value) {
//     if (!value.includes('@')) {
//         alert("Veuillez saisir une adress mail valide")
//     }
// }

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}


export default Footer