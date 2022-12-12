
// items 

class MenuItem {
    constructor(id, name, category, price) {
        this.id = id
        this.name = name
        this.category = category
        this.price = price
    }
}

// items div
function createMenuItem(id, name, category, rate) {
    let menuItem = document.createElement('div')
    menuItem.setAttribute('draggable', 'true')
    menuItem.setAttribute('id', id)
    let menuName = document.createElement('h2')
    menuName.textContent = name
    menuItem.appendChild(menuName)
    let container = document.createElement('div')
    let price = document.createElement('span')
    price.textContent = "Price : " + rate
    container.appendChild(price)
    let cat = document.createElement('span')
    cat.setAttribute('name', 'category')
    cat.textContent = 'Category : ' + category
    container.appendChild(cat)
    menuItem.appendChild(container)
    menuItem.setAttribute('class', 'menuItem')
    return menuItem
}
// menu
function populateMenuSection(container, list) {
    for(let m of list) {
        container.appendChild(createMenuItem(m.id, m.name, m.category, m.price))
    }
}


let menuContainer = document.querySelector('#menu')
populateMenuSection(menuContainer, menuList.values())


// items list

let menuList = new Map()

menuList.set('menu-1', new MenuItem('menu-1', 'Butter naan', 'Breads', 40))
menuList.set('menu-2', new MenuItem('menu-2', 'Garlic bread', 'Breads', 40))
menuList.set('menu-3', new MenuItem('menu-3', 'Orange Juice', 'Beverages', 60))
menuList.set('menu-4', new MenuItem('menu-4', 'Pineapple Juice',  'Beverages', 60))
menuList.set('menu-5', new MenuItem('menu-5', 'Gulab Jamun', 'Dessert', 90))
menuList.set('menu-6', new MenuItem('menu-6', 'Apricot Delight', 'Dessert', 90))
menuList.set('menu-7', new MenuItem('menu-7', 'Redbull', 'Beverages', 110))
menuList.set('menu-8', new MenuItem('menu-8', 'Veg fried rice', 'main course', 170))
menuList.set('menu-9', new MenuItem('menu-9', 'Aloo masala', 'main course', 190))
menuList.set('menu-10', new MenuItem('menu-10', 'Gobi 65', 'staters', 200))
menuList.set('menu-11', new MenuItem('menu-11', 'Palak paneer', 'main course', 240))
menuList.set('menu-12', new MenuItem('menu-12', 'Paneer 65', 'staters', 250))
menuList.set('menu-13', new MenuItem('menu-13', 'Mushroom 65',  'staters', 250))
menuList.set('menu-14', new MenuItem('menu-13', 'Paneer kebab', 'staters', 250))
menuList.set('menu-15', new MenuItem('menu-15', 'Veg Biryani', 'staters', 290))
menuList.set('menu-16', new MenuItem('menu-16', 'Paneer pulao','main course', 290))
menuList.set('menu-17', new MenuItem('menu-17', 'Paneer butter masala', 'main course', 280))
menuList.set('menu-18', new MenuItem('menu-18', 'Curd rice', 'main course', 280))
menuList.set('menu-19', new MenuItem('menu-19', 'Mushroom Biryani', 'main course', 280))
menuList.set('menu-20', new MenuItem('menu-20', 'Jackfruit Biryani', 'main course', 280))

// tables

class Table {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.nItems = 0
        this.itemsList = new Map()
        this.bill = 0
    }
}

// tables list
let tableList = new Map()
tableList.set('table-1', new Table('table-1', 'Table - 1'))
tableList.set('table-2', new Table('table-2', 'Table - 2'))
tableList.set('table-3', new Table('table-3', 'Table - 3'))

// tables div
function createTable(id, name, items, bill) {
    let table = document.createElement('div')
    table.classList.add('table')
    table.setAttribute('id', id)
    let tableNum = document.createElement('h2')
    tableNum.textContent = name
    table.appendChild(tableNum)
    let container = document.createElement('div')
    let numItems = document.createElement('span')
    numItems.textContent = 'No. Items : ' + items
    container.appendChild(numItems)
    let totalBill = document.createElement('span')
    totalBill.textContent = "Total : " + bill
    container.appendChild(totalBill)
    table.appendChild(container)
    return table
}

// populate the tables section
function populateTableSection(container, list) {
    for(let t of list) {
        container.appendChild(createTable(t.id, t.name, t.nItems, t.bill))
    }
}






let tablesContainer = document.querySelector('#tables')
populateTableSection(tablesContainer, tableList.values())










