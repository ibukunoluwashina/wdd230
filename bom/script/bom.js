const input = document.getElementById("favchap");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("list");

addButton.addEventListener("click", function() {
    
    if (input.value !== "") {
        
        const li = document.createElement("li");

        const deleteButton = document.createElement("button");

        li.textContent = input.value;

        deleteButton.textContent = "X";

        li.appendChild(deleteButton);

        list.appendChild(li);

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
        });

        
        input.focus();

        input.value = "";
    }
});