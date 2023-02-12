var selectedRow = null;
let header = document.getElementsByClassName("header-add")[0];

//read data from local storage and display
let books = [{}];
const getB = localStorage.getItem('books');
const dataB = JSON.parse(getB);
for (databook in dataB) {
    document.getElementById("add_items").innerHTML +=
        `<div class="items"><div class="button">
        <button id="${parseInt(databook)}" class="editBtn" onclick="editBook(this.id)">change name</button>
        <button id="${parseInt(databook)}" class="deleteBtn" onclick="deleteBook(this.id)">Delete</button></div>
        <img src="images/book\.png" alt="#"><div class="name">Name : ${dataB[databook].name}</div><div class="price">Price : ${dataB[databook].price} riels</div>
        <div class="category">Category : ${dataB[databook].category}</div>
        </div>`;
}

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//clear placeholder
document.querySelector('.add_book').placeholder = '';

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name_book"] = document.getElementById("name_book").value;
    formData["price_book"] = document.getElementById("price_book").value;
    formData["category_book"] = document.getElementById("category_book").value;

    return formData;
}

//Insert new data
function insertNewRecord(data) {
    const getdata = localStorage.getItem('books');
    let databookss = JSON.parse(getdata);
    books = Object.assign([{}], databookss);
    let x;
    if (databookss == null) {
        x = 0
    } else {
        x = databookss.length;
    }
    const book = {
        name: `${data.name_book}`,
        price: `${data.price_book}`,
        category: `${data.category_book}`
    };
    books[x] = book;
    localStorage.setItem('books', JSON.stringify(books));
    let databooks = getbooks();

    document.getElementById("add_items").innerHTML +=
        `<div class="items">
        <div class="button">
        <button id="${parseInt(databook)}" class="editBtn" onclick="editBook(this.id)">change name</button>
        <button id="${parseInt(databook)}" class="deleteBtn" onclick="deleteBook(this.id)">Delete</button></div>
        <img src="images/book\.png" alt="#"><div class="name" data="${x}">Name : ${databooks[x].name}</div><div class="price">Price : ${databooks[x].price} riels</div>
        <div class="category">Category : ${databooks[x].category}</div>
        </div>`;
}

//Edit or update data
function editBook(id) {
    header.innerHTML = "update books' information";
    header.style.backgroundColor = "rgb(61,133,198)";

    let getdatabooks = getbooks();

    selectedRow = id;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'visible';
    document.getElementsByClassName("add_book")[0].style.visibility = 'hidden';

    document.getElementById('name_book').value = getdatabooks[id].name;
    document.getElementById('price_book').value = getdatabooks[id].price;
    document.getElementById('category_book').value = getdatabooks[id].category;
}

function updateRecord(formData) {
    document.getElementsByClassName("name")[selectedRow].innerHTML = "Name : " + formData.name_book;
    document.getElementsByClassName("price")[selectedRow].innerHTML = "Price : " + formData.price_book + " riels";
    document.getElementsByClassName("category")[selectedRow].innerHTML = "Category : " + formData.category_book;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'hidden';
    document.getElementsByClassName("add_book")[0].style.visibility = 'visible';

    //get books from local storage
    let bookss = getbooks();
    const bookUpdate = {
        name: `${formData.name_book}`,
        price: `${formData.price_book}`,
        category: `${formData.category_book}`
    };

    //merge books to books
    books = Object.assign([{}], bookss);
    books[selectedRow] = bookUpdate;
    localStorage.setItem('books', JSON.stringify(books));

    document.getElementsByClassName("header-add")[0].innerHTML = "Add new book";
    header.style.backgroundColor = "rgb(147, 196, 125)";
    selectedRow = null;
}

//delete book
function deleteBook(id) {
    //get books from local storage
    let databooks = getbooks();
    if (confirm('Are you sure want to delete this book?')) {
        //remove books at id and count 1
        databooks.splice(id, 1);
        localStorage.setItem('books', JSON.stringify(databooks));

        //reset home to update id element
        document.getElementById("add_items").innerHTML = '';
        for (databook in databooks) {
            document.getElementById("add_items").innerHTML +=
                `<div class="items">
                <div class="button">
                <button id="${parseInt(databook)}" class="editBtn" onclick="editBook(this.id)">change name</button>
                <button id="${parseInt(databook)}" class="deleteBtn" onclick="deleteBook(this.id)">Delete</button>
                </div>
                <img src="images/book\.png" alt="#"><div class="name">Name : ${databooks[databook].name}</div>
                <div class="price">Price : ${databooks[databook].price} riels</div>
                <div class="category">Category : ${databooks[databook].category}</div>
                </div>`;
        }
    }
    resetForm();
}

function resetForm() {
    document.getElementById('name_book').value = '';
    document.getElementById('price_book').value = '';
    document.getElementById('category_book').value = '';
}

//get books from local storage
function getbooks() {
    const getbooks = localStorage.getItem('books');
    let databooks = JSON.parse(getbooks);

    return databooks;
}