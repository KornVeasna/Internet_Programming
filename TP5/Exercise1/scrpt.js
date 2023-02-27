const listwrapper = document.getElementsByClassName("listwrapper");
const act = document.getElementById("activity");
const type = document.getElementById("type");
const participants = document.getElementById("participants");
const price = document.getElementById("price");
const link = document.getElementById("link");
const loading = document.getElementById("loading");
function fetchName() {
    loading.hidden=false;
    act.innerHTML="";
    type.innerHTML="";
    price.innerHTML="";
    participants.innerHTML="";
    link.innerHTML="";
    fetchNew();
}
function fetchNew() {
    fetch(" https://www.boredapi.com/api/activity").then(async (res) => {
        loading.hidden=true;
        const data = await res. json(); 
        act.innerHTML=data.activity;
        type.innerHTML="Type: " + data.type;
        participants.innerHTML="Participants: "+data.participants;
        price.innerHTML="Price: "+data.price+"$";
        if (data.link=="") {
            link.innerHTML="Link: Null"; 
        } else {
            link.innerHTML="Link: "+data.link;  
        }
    })
}