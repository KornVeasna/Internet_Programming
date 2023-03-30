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
        <div class="form-register">
            <form onsubmit="return false">
                <div style="font-size: 1.8rem;">Sign up</div>
                <p style="font-size: 0.7rem; margin: 0;">Please in this form to create an account.</p>
                <hr style="width: 100%; margin:0;">
                <label for="">Email</label>
                <input type="text" name="" ref="email" id="email" placeholder="  Enter email">
                <label for="">Username</label>
                <input type="text" name="" ref="username" placeholder="  Username">
                <label for="">First name</label>
                <input type="text" name="" ref="firstname" placeholder="  First name">
                <label for="">Last name</label>
                <input type="text" name="" ref="lastname" placeholder="   Last name">
                <label for="">Password</label>
                <input type="password" name="password" ref="password" placeholder="  Create your password">

                <p style="font-size: 0.7rem; margin: 0;">By creating an account your agree to our <a href="#"
                        style="text-decoration: none; color:rgb(0, 190, 215)">Term</a>&ensp;&&ensp;<a href="#"
                        style="text-decoration: none; color:rgb(0, 190, 215)">Privacy</a></p>
                <div class="register-wrapper">
                    <button @click="registerNewUser()" id="signUp">Sign up</button>
                    <div class="register-fail-message" ref="registerFail">email in use</div>
                </div>
            </form>
        </div>


        <div class="success-wrapper" ref="success">
            <div class="success">
            <p>Congratulation</p>
            <p>You have successfully create an account</p>
            <button @click="this.$router.push('/')">Loing Now</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getRegisterElement() {
            return {
                email: this.$refs.email, username: this.$refs.username,
                firstname: this.$refs.firstname, lastname: this.$refs.lastname,
                password: this.$refs.password
            }
        }, getRegisterData() {
            return {
                email: this.$refs.email.value, username: this.$refs.username.value,
                firstname: this.$refs.firstname.value, lastname: this.$refs.lastname.value,
                password: this.$refs.password.value
            }
        },
        registerNewUser() {
            this.isValidInput()
            if (!this.isValidInput()) {
                return;
            } else{
                this.$refs.registerFail.classList.remove('register-fail')
                fetch('http://localhost:3001/register', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.getRegisterData())
                }).then(async (res, rej) => {
                    const data = await res.json();
                    if (data.success === true) {
                        // this.$router.push('./home');
                        this.$refs.success.style.display="block"
                    }else{
                        this.$refs.registerFail.classList.add('register-fail')
                    }
                })
            }

        },
        isValidInput() {
            const input = this.getRegisterElement();
            let bool = true;
            for (let inp in input) {
                if (input[inp].value === '') {
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

    position: relative;
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


/*  ---------------------------*/
.form-register {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-register form {
    width: 64%;
    height: 94;
    padding: 3%;
    border: 1px solid gray;
    min-height: fit-content;
    height: 80%;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
}

.form-register>form input {
    border: none;
    height: 6.6%;
    padding-left: 1rem;

    background-color: rgb(241, 241, 241);
}

#signUp {
    border: none;
    height: 100%;
    width: fit-content;
    padding: 0 3rem 0 3rem;
    color: white;
    background-color: rgb(16, 203, 88);
}

#signUp:hover {
    background-color: rgb(0, 177, 68);
}

#signUp:active {
    background-color: rgb(0, 93, 36)
}

.register-wrapper{
    height: 6.8%;
    display: flex;
    justify-content: space-around;
}


/*  */

.red-Placeholder::placeholder {
    color: red;
}


.register-fail-message {
    color: rgb(153, 130, 0);
    font-weight: bold;
    height: 100%;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(153, 130, 0);
    background-color: gold;
    border-radius: 5px;
    opacity: 0;
}

.register-fail {
    animation: disapear 8s forwards;
}

@keyframes disapear {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.success-wrapper{
    height: 100%;
    width: 100%;
    position: absolute;

    display: none;
}
.success{
    height: 80%;
    width: 70%;
    border: 5px solid #38b87e;
    border-radius: 4px;
    position: absolute;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.success>:first-child{
    font-size: 2rem;
    font-weight: bold;
}

.success>:last-child{
    margin-top: 2rem;
    width: fit-content;
    padding: .5rem 3rem .5rem 3rem;
    background-color: black;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}



</style>