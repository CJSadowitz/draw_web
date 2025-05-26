function check_cookies() {
    document.cookie.split(';').forEach(cookie => {
        var set = cookie.trim();
        var cookie_list = set.split('=');
        if (cookie_list[0] == "username") {
            var player_name = document.getElementById("player_name");
            player_name.innerHTML = cookie_list[1];
        }
    });
}

function make_cookies(uuid) {
    var date = new Date();
    var days = 10;
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var player_name = document.getElementById("player_name");
    document.cookie = `username=${player_name.innerHTML}; expires=${date.toUTCString()}`;
    document.cookie = `uuid=${uuid.uuid}; expires=${date.toUTCString()}`;
}

function delete_cookies() {
    var date = new Date();
    var days = 1;
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000 - 1000));
    document.cookie = `username=; expires=${date.toUTCString()}`
    document.cookie = `uuid=; expires=${date.toUTCString()}`
}
