<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Tapez votre texte' />
    <button type='submit'>Entrer</button>
</form>

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            onChange={(e) => checkValue(e.target.value)}
        </div>
            )
}

export default QuestionForm

{isInputError && (
    <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
)}
function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}