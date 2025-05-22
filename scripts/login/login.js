function login(post_request) {
    var username = document.getElementById("l_username");
    var password = document.getElementById("l_password");
    var display_name = document.getElementById("l_display_name");

    var message = {
        username: username,
        password: password,
        display_name: display_name
    };
    var response = post_request(message);

    console.log(response)
}

function create_account() {

}
