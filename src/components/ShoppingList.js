import { plantList } from "../data/PlantList"

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]
function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li key={`${plant.id}`}>{ plant.name }</li>
            ))}
        </ul>
    )
}

export default ShoppingList