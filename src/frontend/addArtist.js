document.getElementById("addArtist").addEventListener("click", function() {
    var name = document.getElementById("Name").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var genre = document.getElementById("Genre").value;
    var image = document.getElementById("Image").value;
    var socials = document.getElementById("Socials").value;


    fetch("addArtist.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            artist_name: name,
            longitude: getLongitude(city),
            latitude: getLatitude(city),
            location_city: city,
            location_region: state,
            music_genre: genre,
            image_src: image,
            insta_handle: socials,

        })
    });

    name.value = "";
    longitude.value = "";
    latitude.value = "";
    city.value = "";
    state.value = "";
    genre.value = "";
    image.value = "";
    socials.value = "";
});
