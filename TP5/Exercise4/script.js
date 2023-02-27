const demo = document.getElementById("demo");
        function display() {
            // http://universities.hipolabs.com/search?country=Cambodia
            var nameInput=document.getElementById("browsers").value;
            fetchCountry(nameInput);
           


        }
        function fetchCountry(nameInput){
            fetch(`http://universities.hipolabs.com/search?country=${nameInput}`).then(async (res) => {
            const data = await res.json();
            console.log(data.length);
            // console.log(data.gender)
            let result="";
            for(var i=0; i<data.length;i++){
                result= result+`
                <div class="wrapper">
                    <div id="nameUniversity">${data[i].name}</div>
                    <div id="nameCountry">${data[i].country}</div>
                    <a  id="link" href="${data[i].web_pages}"target="_blank" >🌍 ${data[i].web_pages}</a>
                </div>`
            }   
            demo.innerHTML=result;
            
            })
        }