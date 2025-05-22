async function login(post_request) {
    var username = document.getElementById("l_username").value;
    var password = document.getElementById("l_password").value;
    var display_name = document.getElementById("l_display_name").value;

    var message = {
        type: "login",
        username: username,
        password: password,
        display_name: display_name
    };
    var response = await post_request(message);

    console.log(response)
}

function create_account() {

}
