
document.getElementById("viewSimilar").addEventListener("click", function() {
    let genre = "rock";

    fetch("unkown.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            genre: genre
        })
    })
});