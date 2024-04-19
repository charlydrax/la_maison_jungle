import '../styles/shoppingList.css'
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
                <li className={plant.isSpecialOffer == true ? "lmj-sales" : null} key={`${plant.id}`}>{ plant.name }{plant.isBestSale && <span>🔥</span>}{plant.isSpecialOffer && <div>Soldes</div>}</li>
            ))}
        </ul>
    )
}

export default ShoppingList