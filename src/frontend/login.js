document.getElementById("login").addEventListener("click", function() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    let accepted = false;

    fetch("../backend/db-api/verify_user.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => response.json())
      .then(data => {
          accepted = data.accepted;

          //redirect to main page
          //else show error message
          if (accepted) {
              window.location.href = "main.html";
          } else {
              alert("Invalid username or password");
          }
      });
});
