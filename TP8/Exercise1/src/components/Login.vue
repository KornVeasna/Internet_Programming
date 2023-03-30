<template>
    <div class="form-login">
                            <div> 
                            <div style="height: 50%;">
                                <img src="../assets/profile.png" style="height: 130px; margin-top: 20%;">
                            </div>

                                <form>
                                    <label>Email</label>
                                    <input type="text" name="" id="email" placeholder="  Enter email">
                                    <label>Password</label>
                                    <input type="text" name="" id="password" placeholder="  Enter passwrd">
                                    <button id="submit">Login</button>
                                </form>
                            </div>
                            <div style="margin-left: auto; margin-right:5%;">
                                Forgot <a href="#" style="color:green; text-decoration:none">password?</a>
                            </div>
                    </div>
</template>

<style>
    
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
            width: 200%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }

        .form-login>:first-child {
            height: 70%;
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
            height: 15%;
            width: 90%;
        }

        .form-login #submit {
            height: 17%;
            width: 92%;
            border: none;
            background-color: rgb(16, 203, 88);
            color: white;

        }

        .form-login #submit:hover {
            background-color: rgb(0, 177, 68);
        }

        .form-login #submit:active {
            background-color: rgb(0, 93, 36);
        }
</style>
