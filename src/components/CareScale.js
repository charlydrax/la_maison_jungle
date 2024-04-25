

function CareScale({ scaleValue, careType}) {

    const range = [1,2,3]

    const scaleType = careType == 'light' ? '☀️' : '💧'
    // const [inputValue] = "Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage"
    let inputValue
    if(scaleValue == 1){
        inputValue = "peu";
    }else if(scaleValue == 2){
        inputValue =  "modéremment";
    }else{
        inputValue =  "beaucoup";
    }
    let type = scaleType == "☀️" ? "de lumière" : "d'arrosage"
    return (
        <div onClick={() => alert(`Cette plante requiert ${inputValue} ${type}`)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null )}
        </div>
    )
}
export default CareScale