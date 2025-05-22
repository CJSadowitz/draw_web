function toggle_section(document_element) {
    if (document_element.style.display == "none" || document_element.style.display == "") {
        document_element.style.display = "block";
    }
    else if (document_element.style.display == "block") {
        document_element.style.display = "none";
    }
}

function toggle_login_page() {
    var login_page = document.getElementById("account_login");
    toggle_section(login_page);
    toggle_login_section();
}

function toggle_login_section() {
    var login_section = document.getElementById("login_content");
    toggle_section(login_section);
}

function toggle_create_account_section() {
    toggle_login_section();
    var create_account_section = document.getElementById("account_creation_content");
    toggle_section(create_account_section);
}
