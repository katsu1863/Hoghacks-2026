document.getElementById("addArtist").addEventListener("click", function() {
    var name = document.getElementById("Name").value;
    var location = document.getElementById("Location").value;
    var genre = document.getElementById("Genre").value;
    var description = document.getElementById("Description").value;
    var image = document.getElementById("Image").value;
    var socials = document.getElementById("Socials").value;
    var date = document.getElementById("Dates").value;


    fetch("addArtist.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            longitude: getLongitude(location),
            latitude: getLatitude(location),
            location: location,
            genre: genre,
            description: description,
            image: image,
            socials: socials,
            date: date

        })
    });

    name.value = "";
    longitude.value = "";
    latitude.value = "";
    location.value = "";
    genre.value = "";
    description.value = "";
    image.value = "";
    socials.value = "";
    date.value = "";
});
