const boatInventory = require("./fishingBoat.js");

const mongerInventory = (maxPrice) => {
    const fishFromBoat = boatInventory()

    const fishMongerStock = fishFromBoat
        .filter(fish => fish.price <= 7.50 && fish.amount >= 10)
        .map(fish => {
            return { ...fish, amount: 10 }
        })
    
    const chefStock = fishMongerStock.filter(fish => fish.price <= maxPrice)

    return chefStock
}

module.exports = { mongerInventory }