// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
import {Socket} from "phoenix"
import LiveSocket from "phoenix_live_view"

let liveSocket = new LiveSocket("/live", Socket)
liveSocket.connect()

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

function showPassword(showIcon, hideIcon, password) {
    password.setAttribute('type', 'text');
    showIcon.setAttribute('display', 'none');
    hideIcon.setAttribute('display', 'visible');
}

function hidePassword(showIcon, hideIcon, password) {
    password.setAttribute('type', 'password');
    showIcon.setAttribute('display', 'visible');
    hideIcon.setAttribute('display', 'none');
}

document.getElementById("login-show").addEventListener("click", function () {
    var showIcon = document.getElementById('login-show');
    var hideIcon = document.getElementById('login-hide');
    var password = document.getElementById('login-password');
    showPassword(showIcon, hideIcon, password);
}, false);

document.getElementById("login-hide").addEventListener("click", function () {
    var showIcon = document.getElementById('login-show');
    var hideIcon = document.getElementById('login-hide');
    var password = document.getElementById('login-password');
    hidePassword(showIcon, hideIcon, password);
}, false);

document.getElementById("login").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").classList.toggle("form-active");
    document.getElementById("signup-form").classList.toggle("form-active");
    document.getElementById("circle1").classList.remove("scale");
    document.getElementById("circle2").classList.remove("scale");
    document.getElementById("circle3").classList.remove("scale");
    document.getElementById("signup-circle1").classList.add("scale");
    document.getElementById("signup-circle2").classList.add("scale");
    document.getElementById("signup-circle3").classList.add("scale");
    document.getElementById("panel").classList.add("transition2");
    document.getElementById("panel").classList.remove("transition1");
}, false);

document.getElementById("signup").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("signup-form").classList.toggle("form-active");
    document.getElementById("login-form").classList.toggle("form-active");
    document.getElementById("circle1").classList.add("scale");
    document.getElementById("circle2").classList.add("scale");
    document.getElementById("circle3").classList.add("scale");
    document.getElementById("signup-circle1").classList.remove("scale");
    document.getElementById("signup-circle2").classList.remove("scale");
    document.getElementById("signup-circle3").classList.remove("scale");
    document.getElementById("panel").classList.add("transition1");
    document.getElementById("panel").classList.remove("transition2");
}, false);

document.getElementById("confirm-password").addEventListener('input', function (evt) {
    validatePassword();
});

document.getElementById("email").addEventListener('input', function (evt) {
    console.log("Email")
    validateEmail();
});

function validatePassword() {
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password.length > 0 && password == confirmPassword) {
        document.getElementById('confirm-success').setAttribute('display', 'visible');
        document.getElementById('confirm-error').setAttribute('display', 'none');
        return true;
    }
    document.getElementById('confirm-success').setAttribute('display', 'none');
    document.getElementById('confirm-error').setAttribute('display', 'visible');
    return false;
}

function validateEmail() {
    if(document.getElementById("email").value == ""){
        document.getElementById('email-success').setAttribute('display', 'none');
        document.getElementById('email-error').setAttribute('display', 'none');
        return false;
    } else if (document.getElementById("email").validity.valid) {
        document.getElementById('email-success').setAttribute('display', 'visible');
        document.getElementById('email-error').setAttribute('display', 'none');
        return true;
    } else {
        document.getElementById('email-success').setAttribute('display', 'none');
        document.getElementById('email-error').setAttribute('display', 'visible');
        return false;
    }
}