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

async function create_account(post_request) {
    var username = document.getElementById("ca_username").value;
    var password = document.getElementById("ca_password").value;
    var display_name = document.getElementById("ca_display_name").value;

    var message = {
        type: "create_account",
        username: username,
        password: password,
        display_name: display_name
    };
    var response = await post_request(message);

    console.log(response)
}
