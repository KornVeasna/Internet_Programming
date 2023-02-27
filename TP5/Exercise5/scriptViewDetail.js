main();
function main() {
    const url=new URL(location);
    const id=url.searchParams.get("id");
    idFromAPI(id);
}
function idFromAPI(id) {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(async (res) => {
    const data = await res.json();
    let result ="";
        result = result+`
            <div class="main">
                <div class="box-on">
                    <div id="title">${data.title}</div>
                    <div id="id">${data.id}</div>
                    <div id="text">Resize the browser window to see that this page is responsive by the way.</div>
                </div>
                <div class="box-up">
                    <div id="id-2">${data.id}</div>
                    <img src="${data.thumbnailUrl}" alt="">
                </div>
            </div>
                `
    demo.innerHTML=result;
    console.log(result)
    }) 
}