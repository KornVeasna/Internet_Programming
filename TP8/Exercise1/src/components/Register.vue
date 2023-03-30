<template>
    <div class="form-register">
        <form>
            <div style="font-size: 1.8rem;">Sign up</div>
            <p style="font-size: 0.7rem; margin: 0;">Please in this form to create an account.</p>
            <hr style="width: 100%; margin:0;">
            <label for="">Email</label>
            <input type="text" name="" id="" placeholder="  Enter email">
            <label for="">Username</label>
            <input type="text" name="" id="" placeholder="  Username">
            <label for="">First name</label>
            <input type="text" name="" id="" placeholder="  First name">
            <label for="">Last name</label>
            <input type="text" name="" id="" placeholder="   Last name">
            <label for="">Password</label>
            <input type="text" name="" id="" placeholder="  Create your password">

            <p style="font-size: 0.7rem; margin: 0;">By creating an account your agree to our <a href="#"
                    style="text-decoration: none; color:rgb(0, 190, 215)">Term</a>&ensp;&&ensp;<a href="#"
                    style="text-decoration: none; color:rgb(0, 190, 215)">Privacy</a></p>
            <button>Sign up</button>
        </form>
    </div>
</template>

<style>
.form-register {
    width: 130%;
    height: 100%;
    display: flex;
    align-items: center;

}

.form-register form {
    width: 100%;
    border: 1px solid gray;
    height: fit-content;
    padding: 3%;

    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.form-register>form input {
    border: none;
    height: 30px;

    background-color: rgb(241, 241, 241);
}

.form-register form>button {
    border: none;
    height: 30px;
    width: 40%;
    color: white;
    background-color: rgb(16, 203, 88);
}

.form-register form>button:hover {
    background-color: rgb(0, 177, 68);
}

.form-register form>button:active {
    background-color: rgb(0, 93, 36)
}
</style>