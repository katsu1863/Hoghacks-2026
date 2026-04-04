document.getElementById("addArtist").addEventListener("click", function() {
    var name = document.getElementById("Name").value;
    var location = document.getElementById("Location").value;
    var genre = document.getElementById("Genre").value;
    var description = document.getElementById("Description").value;
    var image = document.getElementById("Image").value;

    fetch("addArtist.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            location: location,
            genre: genre,
            description: description,
            image: image
        })
    });

    name.value = "";
    location.value = "";
    genre.value = "";
    description.value = "";
    image.value = "";
});
