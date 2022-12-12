

//drag n drop
let draggedMenuId

let allMenuItems = document.querySelectorAll('.menuItem')
allMenuItems.forEach((m) => {
    m.addEventListener('dragstart', (e) => {
        draggedMenuId = e.target.id
    })
})

let allTables = document.querySelectorAll('.table')
allTables.forEach((t) => {
    t.ondragover = e => e.preventDefault()

    t.ondrop = e => {
        e.preventDefault()
        
        let table = tableList.get(e.currentTarget.id)
        let itemCount = table.itemsList.get(draggedMenuId) ?? 0
        table.itemsList.set(draggedMenuId, itemCount + 1)
        table.nItems += 1
        table.bill += menuList.get(draggedMenuId).price
        
        let tb = e.currentTarget
        tb.lastChild.firstChild.textContent = "No. Items : " + table.nItems
        tb.lastChild.lastChild.textContent = "Total : " + table.bill
    }
})