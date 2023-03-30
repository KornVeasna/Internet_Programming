<template>
    <div class="wrapper">
        <div class="left-side">
            <div class="ls_child">
                <div>
                    <img src="../assets/logo.svg" style="height: 150px;">
                </div>
                <div>
                    <P>Welcome</P>
                    <p>Authentication app~~</p>
                    <p>
                        <router-link to="/"><button id="login">Login</button></router-link>
                        <router-link to="/register"><button id="register">Register</button></router-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="form-login">
            <div>
                <div style="height: 50%; display: flex;justify-content: center;align-items: center;">
                    <img src="../assets/profile.png" style="height: 70%;">
                </div>

                <form onsubmit="return false">
                    <label>Email</label>
                    <input type="text" name="" id="email" ref="email" placeholder=" Enter email">
                    <label>Password</label>
                    <input type="password" name="" id="password" ref="password" placeholder=" Enter passwrd">
                    <button id="login" ref="login" @click="userLogin()">Login</button>
                    <div>
                        <p class="login-fail-message" ref="login_fail">Email or Password incorrect. Please try again</p>
                    </div>
                </form>
            </div>
            <div style="margin-left: auto; margin-right:5%;">
                Forgot <a href="#" style="color:green; text-decoration:none">password?</a>
            </div>
        </div>

        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import router from "../router/index.js"
export default {
    // data() {
    //     return {
    //         route: router.getRoutes()[2].beforeEnter = (from, to, next) => {
    //             next(false);
    //         }
    //     }
    // },
    methods: {
        getInputElement() {
            return { email: this.$refs.email, password: this.$refs.password }
        },
        getInputValue() {
            return { email: this.$refs.email.value, password: this.$refs.password.value }
        },
        userLogin() {

            console.log(router.getRoutes()[2].beforeEnter);
            if (!this.isCompleteInput()) {
                return;
            } else {
                this.$refs.login_fail.classList.remove('login-fail')
                fetch('http://localhost:3001/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.getInputValue())
                }).then(async (res, rej) => {
                    const data = await res.json();
                    if (data.success === true) {
                        router.getRoutes()[2].beforeEnter = (from, to, next) => {
                            next(true);
                        }
                        this.$router.push('/home')
                    } else {
                        this.$refs.login_fail.classList.add('login-fail')
                    }
                })
            }

        },
        isCompleteInput() {
            const input = this.getInputElement();
            let bool = true;
            for (let inp in input) {
                if (input[inp].value === "") {
                    bool = false;
                    input[inp].attributes.placeholder.nodeValue = `${inp} can not be empty`;
                    input[inp].classList.add('red-Placeholder')
                }
            }
            return bool;
        }
    }
}
</script>

<style>
.wrapper {
    height: 700px;
    width: 1300px;
    margin: auto;
    display: flex;

    /* background-color: red; */
}

.left-side {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* background-color: blue; */
}

.ls_child {
    display: flex;
    column-gap: 10px;

}

.ls_child>:first-child {
    display: flex;
    align-items: center;
}

.ls_child>:nth-child(2)>:first-child {
    font-size: 3rem;
    margin: 0;
    color: green;
    /* background-color: #fff; */
}

.ls_child>:nth-child(2)>:nth-child(2) {

    margin-top: 25px;
    margin-bottom: 35px;
}

/* ------------------------------------- */
#login,
#register {
    border: none;
    margin: 1px;
    height: 22px;
    font-weight: 200;
}

#login:focus,
#register:focus {
    color: rgb(16, 203, 88);
}

input:focus::placeholder {
    color: transparent;
}



#login:hover,
#register:hover {
    background-color: rgb(233, 233, 233);
}


.form-login {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.form-login>:first-child {
    height: 80%;
    width: 90%;
    border: 1px solid rgb(190, 190, 190);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.form-login form {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 3%;
}

.form-login form>* {
    margin-left: 4%;
}

.form-login #email,
.form-login #password {
    padding-left: 1rem;
    height: 13%;
    width: 90%;
}

.form-login #login {
    height: 14%;
    width: 92%;
    margin: 4%;
    border: none;
    background-color: rgb(16, 203, 88);
    color: white;

}

.form-login #login:hover {
    background-color: rgb(0, 177, 68);
}

.form-login #login:active {
    background-color: rgb(0, 93, 36);
}

/*  */
.red-Placeholder::placeholder {
    color: red;
}

.login-fail-message {
    color: rgb(255, 183, 0);
    width: fit-content;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
}

.login-fail {
    animation: disapear 10s forwards;
}

@keyframes disapear {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
