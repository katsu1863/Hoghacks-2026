document.getElementById("login").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //if api call is true
    let accepted = true; //replace with api call result

    //redirect to main page
    //else show error message
    if (accepted) {
        window.location.href = "main.html";
    } else {
        alert("Invalid username or password");
    }
});
