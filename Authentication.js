var username = document.getElementById("username");
var password = document.getElementById("Password");

function usernameChecking() {
    if (username.value == "admin") {
        return true;
    } else {
        return false;
    }
}

function validating(callback) {
    if (usernameChecking() && passwordChecking()) {
        callback();

    } else {
        return false;
    }
}

function listdisplayFn() {
    window.open("listItems.html");
    return true;
}

function passwordChecking() {
    if (password.value == "12345") {
        return true;
    } else {
        return false;
    }

}

