async function post_request(message) {
    var url = "https://script.google.com/macros/s/AKfycbzsA9G_fDUyXh8zFjH7159Y3aMyIsJ6KiHLWQxsTfkcYT0Pyba0Z8PhtdxfZ06pvdBwiQ/exec"
    var request = {
        method: "post",
        headers: {
                "Accept": "application/json"
            },
        body: JSON.stringify(message)
    };

    var response = await fetch(url, request);
    var data = await response.json();
    return data;
}
