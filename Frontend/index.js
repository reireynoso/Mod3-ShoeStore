// Code your solution here
// 1. Fetch data
// 2. Create elements for data
// 3. Slap the created elements on the DOM

const shoeList = document.querySelector('#shoe-list')

function fetchData(){
    fetch(`http://localhost:3000/shoes`)
    .then(r => r.json())
    .then(shoeData => shoeData.forEach(shoe => createElement(shoe)))
}

function createElement(shoe){
    let li = document.createElement("li")
    li.className = "list-group-item"
    li.innerText = shoe.name

    shoeList.append(li)    
}
fetchData()



