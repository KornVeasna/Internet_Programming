var selectedRow = null;
let x = -1;
var names = [];
var price = [];
var category = [];
let header = document.getElementsByClassName("header-add")[0];

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
        console.log("welcome to book shop!")
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//clear placeholder in box
document.querySelector('.add_book').placeholder = '';

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name_book"] = document.getElementById("name_book").value;
    formData["category_book"] = document.getElementById("category_book").value;
    formData["price_book"] = document.getElementById("price_book").value;
    
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    names[x + 1] = data.name_book;
    price[x + 1] = data.price_book;
    category[x + 1] = data.category_book;

    document.getElementById("add_items").innerHTML += `<div class="items">

        <div class="button">
        <button id="${parseInt(x+1)}" class="editBtn" onclick="deleteBook(this.id)">Delete</button>
        <button id="${parseInt(x+1)}" class="deleteBtn" onclick="editBook(this.id)">Change name</button>
        </div>
        <img src="./images/book.png" alt="#book_picture">
        <div class="name" data="${data.name_book}">Name : ${data.name_book}</div>
        <div class="category">Category : ${data.category_book}</div>
        <div class="price">Price : ${data.price_book} riels</div>        
        </div>`;
    x++;
}

//update data
function editBook(id) {
    header.innerHTML = "Update information book!";
    header.style.backgroundColor = "rgba(110, 237, 156, 15)";

    selectedRow = id;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'visible';
    document.getElementsByClassName("add_book")[0].style.visibility = 'hidden';

    document.getElementById('name_book').value = names[id];
    document.getElementById('category_book').value = category[id];
    document.getElementById('price_book').value = price[id];
    
}

function updateRecord(formData) {
    document.getElementsByClassName("name")[selectedRow].innerHTML = "Name : " + formData.name_book;
    document.getElementsByClassName("price")[selectedRow].innerHTML = "Price : " + formData.price_book + " riels";
    document.getElementsByClassName("category")[selectedRow].innerHTML = "Category : " + formData.category_book;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'hidden';
    document.getElementsByClassName("add_book")[0].style.visibility = 'visible';

    document.getElementsByClassName("header-add")[0].innerHTML = "Add New Book";
    header.style.backgroundColor = "rgb(158, 196, 125)";
    selectedRow = null;
}

//delete data
function deleteBook(id) {
    console.log(id);
    if (confirm('Are you sure want to delete this book?')) {
        document.getElementsByClassName('items')[id].hidden = true;
    }
    resetForm();
}

function resetForm() {
    document.getElementById('name_book').value = '';
    document.getElementById('category_book').value = '';
    document.getElementById('price_book').value = '';
    
}