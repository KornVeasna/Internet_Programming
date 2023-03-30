
<template>
    <div id="app">

        <!-- <router-view></router-view> -->
        <div id="home">
            <nav id="nav">
                <div class="logo">
                    <img src="../assets/GIC_logo.png" height="60%">
                    <span>GIC</span>
                </div>
                <div class="menu">
                    <a href="#">ABOUT US</a>
                    <a href="#">ACAEMIC</a>
                    <a href="#">WHY GIC</a>
                    <a href="#">LIFESTYLE</a>
                    <a href="#">CONTACT</a>
                </div>
                <div class="search-logout">
                    <div><img src="../assets/search.svg" style="height: 1.7rem;"></div>
                    <div style="height: 30%;width: 2px;background-color: black;"></div>
                    <a href="#">Logout</a>
                </div>
            </nav>
            <div class="content-wrapper">
                <section class="sec1">
                    <main id="content">
                        <h1>Deep Learning Throught Deep connection.</h1>
                        <p>Taking a deep dive</p>
                        <p>The hero's journey start here. Become a learning legend</p>
                        <button>GET START</button>
                        <p>Elevate your expeerince. Empower the next generation</p>
                        <a href="#">Join our team</a>
                    </main>
                </section>
                <section class="sec2">
                    <div id="image-set">
                        <img src="../assets/imageSet.png" alt="">
                    </div>
                </section>
            </div>
        </div>
    </div>

    <!-- <RouterView /> -->
</template>

<style scoped>
* {
    font-family: sans-serif;
}

#home {
    height: 700px;
    width: 1300px;
    margin: auto;
}

#nav {
    height: 14%;
    width: 100%;

    display: flex;
    justify-content: space-between;
}

.logo {
    display: flex;
    height: 100%;
    align-items: center;
}

.logo>* {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(55, 55, 55);
    font-weight: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
}

.menu {
    display: flex;
    column-gap: 1rem;
    align-items: center;
}

.menu>* {
    color: black;
    text-decoration: none;
    font-weight: bold;
    height: 60%;
    padding: 0 1.3rem 0 1.3rem;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
}

.menu>*:hover {
    background-color: #d7d7d7;
}


.search-logout{
    height: 100%;

    display: flex;
    column-gap: 2.7rem;
    align-items: center;
}

.search-logout a{
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: bold;
    color:  rgb(232, 111, 179);
}


.search-logout img:hover{
    cursor: pointer;
    background-color: #e9e9e9;

}

.content-wrapper {
    height: 85%;
    width: 100%;

    display: flex;
}

.sec1 {
    height: 100%;
    width: 37%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sec2 {
    height: 100%;
    width: 63%;
    display: flex;
    align-items: center;
    justify-content: center;

}

button:hover {
    cursor: pointer;
}

#content {
    height: 90%;
    width: 80%;

    display: flex;
    flex-direction: column;
}

#content>h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0;
    font-weight: 1000;
    font-size: 3.2rem;
}

#content>:nth-child(2) {
    margin-top: 1rem;
    font-size: 2rem;
}

#content>:nth-child(3) {
    margin-top: 0;
    font-size: 0.8rem;
}

#content>:nth-child(4) {
    color: white;
    font-weight: bold;
    width: fit-content;
    padding: 0.8rem 1.8rem 0.8rem 1.8rem;
    border: none;
    border-radius: 4px;

    background-color: rgb(232, 111, 179);
}

#content>:nth-child(4):hover {
    background-color: rgb(145, 70, 112);
}

#content>:nth-child(4):active {
    background-color: rgb(66, 32, 51);
}

#content>:nth-child(5) {
    font-size: 0.8rem;
    margin-top: 2.5rem;
}

#content>:nth-child(6) {
    margin-top: 1rem;
    color: black;
    font-weight: bold;
}
</style>
