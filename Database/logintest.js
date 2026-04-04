const res = await fetch("/api/verify_user.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "mrpepsi", password: "12345" })
});

const data = await res.json();

if (data.verified) {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}