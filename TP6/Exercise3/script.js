let list_data = document.getElementById("block_list"); 
        let dataLoading =false;
        let page=0;
        let size=10;
        let check=1;
        let tmp="";
        let parseddata="";
        function click_display(){
            let tmp1="";
            for(let i=0,len=list_data.children.length;i<len;i++){
                (function(index){
                    list_data.children[i].onclick=function(){
                        tmp1=`
                        <div class="block_display_beer">
                            <div class="image_beer"><img src="${parseddata[index].image_url}" class="beer"></img></div>
                            <div class="description">
                                <h3 class="name">${parseddata[index].name}</h3>
                                <p class="time">${parseddata[index].first_brewed}</p>
                                <p class="des">${parseddata[index].description}</p>
                                <p class="contribution">Contribution</p>
                                <p class="bulider">( ${parseddata[index].contributed_by} )</p>
                            </div>
                        </div>`
                        document.getElementById("block_display").innerHTML=tmp1;
                    }
                })(i)
            }
        }
        function display(){
            let tmp="";
            const str = localStorage.getItem('data');
            parseddata = JSON.parse(str);
            if(str!== null && check ==1){
                console.log();
                for(let i=0 ; i<parseddata.length;i++){
                    tmp +=
                    `<div class="box_list"> 
                        <div class="image_list">🍻</div>
                        <div>
                            <p class="text1">${parseddata[i].name}</p>
                            <p class="text2">${parseddata[i].description.substring(0, 30).concat('...')}</p>
                        </div>
                    </div>`
                }
                list_data.innerHTML=tmp;
                number_page=parseddata.length/10;
                page=parseddata.length;
                size=page+10;
            }
            if(size<81){
                fetch(`https://api.punkapi.com/v2/beers? page=${page}}&per_page=${size}`).then(async (res) =>{
                    let data_list = await res.json();
                    const data_json = JSON.stringify(data_list);
                    window.localStorage.setItem('data', data_json);
                    for(let i=page ; i<data_list.length;i++){
                        tmp +=
                            `<div class="box_list"> 
                                <div>🍻</div>
                                <div class="list_each_data">
                                    <p class="text1">${data_list[i].name}</p>
                                    <p class="text2">${data_list[i].description.substring(0, 30).concat('...')}</p>
                                </div>
                            </div> `
                    }
                    document.getElementById("block_list").innerHTML=tmp;
                    click_display()
                })
            }
        }
        list_data.addEventListener("scroll", (event) => {
            const { scrollTop, clientHeight, scrollHeight } = list_data;
            if ((clientHeight + scrollTop) >= scrollHeight*0.98) {
                if (!dataLoading) {
                    size = page +10;
                    display()
                    
                }
            }
        });
        display()
        click_display()