// pop up box

let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let closeBtn = document.querySelector('.btn-close')
let closeSessionBtn = document.querySelector('#close-session')
let bill, currTable, total, tableName;


function removeItems(container) {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

let closeModal = async () => {
    removeItems(bill)
    let tb = tablesContainer.querySelector(`#${currTable.id}`)    
    tb.lastChild.firstChild.textContent = "No. Items : " + currTable.nItems
    tb.lastChild.lastChild.textContent = "Total : " + currTable.bill
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

let openModal = async () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

let deleteItem = (item) => {
    currTable.itemsList.delete(item)
}

let closeSession = () => {
    currTable.nItems = 0
    currTable.itemsList.clear()
    currTable.bill = 0
    closeModal()
}

let alterItem = async (item, value) => {
    if(!value) {
        value = 0
    }
    let prev = currTable.itemsList.get(item.id)
    currTable.bill += (value - prev) * item.price
    currTable.nItems += value - prev
    currTable.itemsList.set(item.id, value)
}

let updateTotal = () => {
    total.textContent = 'Total : ' + currTable.bill
}

function createBill(id, qty) {
    let item = menuList.get(id)
    let row = document.createElement('tr')
    let itemtd = document.createElement('td')
    itemtd.textContent = item.name
    row.appendChild(itemtd)
    let pricetd = document.createElement('td')
    pricetd.textContent = item.price
    row.appendChild(pricetd)
    let quantitytd = document.createElement('td')
    let qtyinput = document.createElement('input')
    qtyinput.setAttribute('min', '1')
    qtyinput.onchange = async (e) => {
        await alterItem(item, parseInt(e.currentTarget.value))
        updateTotal()
    }
    qtyinput.setAttribute('type', 'number')
    qtyinput.value = qty
    quantitytd.appendChild(qtyinput)
    row.appendChild(quantitytd)
    let del = document.createElement('td')
    qtyinput.setAttribute('class', 'qbox');
    let deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'fa fa-trash delete')
    deleteIcon.onclick = (e) => {
        currTable.bill -= currTable.itemsList.get(item.id) * item.price
        currTable.nItems -= currTable.itemsList.get(item.id)
        updateTotal()
        deleteItem(item.id)
        bill.removeChild(row)
    }
    del.appendChild(deleteIcon)
    row.appendChild(del)
    return row
}

function displayItems() {
    for(let [key,val] of currTable.itemsList) {
        bill.appendChild(createBill(key, val))
    }
}

closeBtn.onclick = closeModal
overlay.onclick = closeModal
closeSessionBtn.onclick = closeSession

for(let t of allTables) {
    t.addEventListener('click', async (e) => {
        e.stopPropagation()
        if(e.currentTarget.id.startsWith('table')) {
            await openModal()
            currTable = tableList.get(e.currentTarget.id)
            tableName = document.querySelector('.table-name')
            bill = document.querySelector('.bill')
            total = document.querySelector('#total')
            tableName.firstChild.textContent = `${currTable.name} | Order Details`
            updateTotal()
            displayItems()
        }
    })
}
