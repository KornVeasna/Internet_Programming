const namecountry = document.getElementById("namecounty");
        const probability = document.getElementById("probability");
        const demo = document.getElementById("demo");
        function main() {
            var nameInput=document.getElementById("mytext").value;
            fetchNew(nameInput);
        }
        function fetchNew(nameInput) {
            fetch(`https://api.nationalize.io?name=${nameInput}`).then(async (res) => {
            const data = await res.json();

            // console.log(data.gender)
            let result="";
            for(var i=0; i<data.country.length;i++){
                result= result+`
                <div class="sub-box">
                    <div id="nameCountry">${data.country[i].country_id}</div>
                    <div id="probability">${(data.country[i].probability*100).toFixed(2)}%</div>
                </div>
                `
            }   
            demo.innerHTML=result;
            }) 
        }      
