const { mongerInventory } = require("./fishMonger.js");

const fishMenu = (maxPrice) => { 
    const affordableFish = mongerInventory(maxPrice)

    const chefFish = affordableFish.map(fish => {
        return { ...fish, amount: fish.amount / 2 }
    })

    const menuItems = chefFish.map(fish => {
        return `
            <article class="menu">
                <h2>${fish.species}</h2>
                <section class="menu__item">${fish.species} Soup</section>
                <section class="menu__item">${fish.species} Sandwich</section>
                <section class="menu__item">Grilled ${fish.species}</section>
            </article>
        `
    })
    const fullMenu = `
        <h1>Menu</h1>
        ${menuItems.join("")}
    `

    return fullMenu
}

module.exports = { fishMenu }
