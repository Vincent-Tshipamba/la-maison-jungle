import { useState } from "react";

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState("Votre texte ici")

    let checkValue = (value) => {
        if (value.includes('v')) {
            alert("Vous n'avez pas le droit d'utiliser la lettre \"v\"")
        } else {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea value={inputValue} onChange={(e) => checkValue(e.target.value)}></textarea>
            <button type="button" onClick={() => alert(inputValue)}>Alert me!</button>
        </div>
    )
}

export default QuestionForm