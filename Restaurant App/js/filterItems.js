
// searching the items and tables
function search(items, value) {
    for(let item of items) {
        if(item?.firstChild.textContent.toLowerCase().includes(value) 
            || item?.querySelector("span[name='category']")?.textContent.toLowerCase().includes(value)) {
                item.classList.remove('hidden')
        }
        else {
            item.classList.add('hidden')
        }
    }
}

function removeHidden(children) {
    for(let child of children) {
        child.classList.remove('hidden')
    }
}

function filterSection(value, container) {
    if(value !== "") {
        search(container.children, value)
    }
    else {
        removeHidden(container.children)
    }
}

document.querySelector('#searchTable').onkeyup = (e) => {
    let value = e.target.value.trim().toLowerCase()
    filterSection(value, tablesContainer)
}

document.querySelector('#searchMenu').onkeyup = (e) => {
    let value = e.target.value.trim().toLowerCase()
    filterSection(value, menuContainer)
}