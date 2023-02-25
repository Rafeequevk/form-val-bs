function handleSubmit() {
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message');
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;
    const re_password = document.getElementById('confirm-password').value;
    msg.style.display = "none"
    if (name == '') {
        msg.innerHTML = "Please Enter Your Full Name"
        msg.style.display = "block";
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        msg.innerHTML = "Enter a Valid Email";
        msg.style.display = "block";
        return false;
    }

    if (contact.length != 10) {
        msg.innerHTML = "Please Enter 10 Digit Contact Number";
        msg.style.display = "block";
        return false;
    }

    if (password == "") {
        msg.innerHTML = "Enter a Password";
        msg.style.display = "block";
        return false;
    }

    if (password.length < 5 || password.length > 12) {
        msg.innerHTML = "Password Should 5-12 character";
        msg.style.display = "block";
        return false;

    }
    if (re_password == '') {
        msg.innerHTML = "Retype Your Password";
        msg.style.display = "block";
        return false;

    }

    if (re_password != password) {
        msg.innerHTML = "Password Doesn't match";
        msg.style.display = "block";
        return false;

    }

    return true;

}