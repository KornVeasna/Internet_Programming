var output = document.getElementById("output")
var title = document.getElementById("title")
var assignee = document.getElementById("assignee")
var deadline = document.getElementById("deadline")
var addbtn = document.getElementById("add-btn")
var listEle = document.getElementById("list-wrapper")
var todoList = getAllStorage()


function renderList () {
    let listContent='';
    todoList.forEach(function callback(todo, index)  {
        listContent += `

            <div id="output" class="output bg-white flex items-center justify-center align-center h-14 mt-5 mb-5 rounded-xl p-5 border-light-white border-2">
                <div class="input-title w-1/5 ml-3 mr-4">
                    <div class="column">${todo.title}</div>
                </div>
                <div class="input-assignee w-1/5 ml-3 mr-4">
                    <div class="column">${todo.assignee}</div>
                </div>
                <div class="input-deadline w-1/5 ml-3 mr-4">
                    <div class="column">${todo.deadline}</div>
                </div>
                <div class="input-deadline w-1/5 ml-3 mr-4">
                <div class="w-1/3 h-full flex items-center justify-center">
                        <img src="images/delete.png" class="h-5">
                    <input type="button" id="${index}" class="h-10 w-16 bg-white-700 rounded-xl text-light-gray-60" value="delete" onclick="remove('${todo.id}')">
                </div>
                </div>
            </div>
            `
    });

    listEle.innerHTML = listContent;
}

function add (idValue, titleValue, assigneeValue, deadlineValue) {
    var todo = {id:idValue, title:titleValue, assignee:assigneeValue, deadline:deadlineValue}
    todoList.push(todo)
    localStorage.setItem(idValue+"", JSON.stringify(todo))
    title.value = "";
    assignee.value = "";
    deadline.value = "";
    
    renderList();
}

function remove (id) {
    localStorage.removeItem(id)
    todoList = getAllStorage()
    renderList();
}

function getAllStorage() {
    let keys = [];
    let tmplist = []
    for (let i=0; i<localStorage.length; i++){
        keys.push(localStorage.key(i))
     }

    for ( i=0; i<keys.length; i++ ) {
        let todo = JSON.parse(localStorage.getItem(keys[i]))
        tmplist.push( todo );
    }
    tmplist.sort( (a,b) => a.id - b.id );
    return tmplist;
}




renderList();
addbtn.addEventListener("click", () => {
    const d = new Date();
    let id = d.getTime()
    add(id, title.value, assignee.value, deadline.value)
})

