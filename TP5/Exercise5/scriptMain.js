const demo = document.getElementById("demo");
openDataFromAPI();
function openDataFromAPI() {
    fetch(`https://jsonplaceholder.typicode.com/photos`).then(async (res) => {
    const data = await res.json();
    let result ="";
    for(var i=0;i<data.length;i++ ){
        result = result+`
        <div class="box">
            <img src="${data[i].thumbnailUrl}" alt="">
            <div id="title">${data[i].title}</div>
            <div id="albumId">Album ID: ${data[i].id} riel</div>
            <div id="catagory">Catagory: 1</div>
            <div id="linkNew">
                <a href="./viewDetail.html?id=${data[i].id}" target="_blank">See</a>
            </div>
        </div>
        `
    }
    demo.innerHTML=result;
    }) 
} 