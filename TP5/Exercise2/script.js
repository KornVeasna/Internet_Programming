const namegender = document.getElementById("name");
const gender = document.getElementById("gender");
const percent = document.getElementById("percent");
const loading = document.getElementById("loading");
function fetchName() {
    loading.hidden=false;
    namegender.innerHTML= "";
    gender.innerHTML = "";
    percent.innerHTML = "";
    var inputData=document.getElementById("myText").value;
    fetchNew(inputData);
}
function fetchNew(inputData) {
    fetch(`https://api.genderize.io?name=${inputData}`).then(async (res) => {
            loading.hidden=true;
            const data = await res.json();
            if(data.gender==null){
                loading.hidden=true;
                gender.innerHTML = "Please input your name!";
            }else{
                namegender.innerHTML= data.name;
                gender.innerHTML = data.gender;
                percent.innerHTML = data.probability*100+"%";
            }
    }) 
    
}