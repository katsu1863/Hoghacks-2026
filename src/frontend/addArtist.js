document.getElementById("addBandButton").addEventListener("click", function() {
    var name = document.getElementById("bandName").value;
    var city = document.getElementById("bandCity").value;
    var state = document.getElementById("bandState").value;
    var genre = document.getElementById("bandGenre").value;
    // var image = document.getElementById("bandImage").value;
    var socials = document.getElementById("instagramHandle").value;

    alert(name + " " + city + " " + state + " " + genre + " " + socials);

    fetch("../backend/db-api/add_artist.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            artist_name: name,
            // longitude: getLongitude(city),
            // latitude: getLatitude(city),
            location_city: city,
            location_region: state,
            music_genre: genre,
            // image_src: image,
            insta_handle: socials,

        })
    });

    name.value = "";
    longitude.value = "";
    latitude.value = "";
    city.value = "";
    state.value = "";
    genre.value = "";
    // image.value = "";
    socials.value = "";
});
