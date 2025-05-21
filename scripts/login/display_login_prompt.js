function get_login_prompt() {
    // on login set account login style to block
    var login_page = document.getElementById("account_login")
    console.log(login_page.style.display);
    if (login_page.style.display == "none" || login_page.style.display == "") {
        login_page.style.display = "block";
    }
    else if (login_page.style.display == "block") {
        login_page.style.display = "none";
    }
}
