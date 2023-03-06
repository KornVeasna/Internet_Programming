let pageNumber = 0;
        let pageChange = document.getElementById('num');
        let scrollEle = document.getElementById('scroll');
        let display = document.getElementById('display');
        let load = document.getElementById('loading');
        let loading = false;
        load.hidden = true;
        function fetchAPI(pageNumber) {
            fetch(`https://api.instantwebtools.net/v1/passenger?page=${pageNumber}&size=10`)
                .then(async (res)=>{
                    load.hidden = true;
                    pageChange.innerText = pageNumber;
                    let getData = await res.json();
                    for(let x=0; x<getData["data"].length; x++) {
                        display.innerHTML += `
                            <div class="data">
                                <span><img src="https://cdn-icons-png.flaticon.com/512/2982/2982770.png"
                                     alt="">:
                                    ${getData["data"][x].airline[0].name} - ${getData["data"][x].airline[0].country}
                                </span>
                                <br>
                                <span>🙂: ${getData["data"][x].name}</span>
                            </div>
                        `;
                    }
                });
        }
        function fetching() {
            loading = true;
            setTimeout(()=>{
                load.hidden = false;
                setTimeout(()=>{
                    pageNumber++; 
                    loading = false; 
                    fetchAPI(pageNumber);
                }, 1000)
            }, 1000); 
        }
        fetchAPI(pageNumber);
        scrollEle.addEventListener('scroll', (event)=>{
            if(scrollEle.clientHeight + scrollEle.scrollTop >= (scrollEle.scrollHeight)) {
                if(!loading) {
                    fetching();
                }
            }
        });   