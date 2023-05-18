const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('list')

addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li')
    newItem.textContent = input.value
    list.appendChild(newItem)
    input.value = ''
})