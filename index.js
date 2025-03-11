const Add = document.getElementById("add");
const Remove = document.getElementById("remove");
const List_Container = document.getElementById("list");

let currentItem = "";
let items = [];

Add.addEventListener("click", ()=>{
    let newItem = document.createElement("div");
    newItem.style.width = "100%";
    newItem.style.height = "80px";
    newItem.style.backgroundColor = "#9a8c98"
    newItem.style.border = "1px #22223b solid";
    newItem.style.boxSizing = "border-box"
    newItem.style.padding = "0";
    newItem.style.margin = "0 10px 10px 0";
    List_Container.appendChild(newItem);
    newItem.addEventListener("click", ()=>{
        currentItem = newItem;
        items.push(newItem)
        items.forEach(i => {
            if (i != currentItem){
                i.style.boxShadow = "none";
            }
            else{
                i.style.boxShadow = "0 0 5px rgba(100, 255, 100, 0.5)"
            }
        })
        console.log(newItem)
    })

    let item_input = document.createElement("input");
    item_input.style.fontFamily = "monospace";
    newItem.appendChild(item_input)
})

Remove.addEventListener("click", ()=>{
    if (currentItem === ""){
        alert("Item not selected.")
    }
    else{
        currentItem.remove();
    }
    currentItem = "";
})