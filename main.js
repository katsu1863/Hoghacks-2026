/*
document.addEventListener("DOMContentLoaded", () => {
    
});
*/
let filterone = false;
let filtertwo = false;

// Filter lists
let genreList = [];
let datesList = [];
let sizeList = [];
let prevconvertList = [];
let distanceList = [];

// Functions to add to lists
function addGenre(genre) {
    if (!genreList.includes(genre)) {
        genreList.push(genre);
    }
}

function addDates(date) {
    if (!datesList.includes(date)) {
        datesList.push(date);
    }
}

function addSize(size) {
    if (!sizeList.includes(size)) {
        sizeList.push(size);
    }
}

function addPrevconvert(item) {
    if (!prevconvertList.includes(item)) {
        prevconvertList.push(item);
    }
}

function addDistance(distance) {
    if (!distanceList.includes(distance)) {
        distanceList.push(distance);
    }
}

//event listeners
document.getElementById("filterone").addEventListener("mouseover", mouseoverone);
document.getElementById("filterone").addEventListener("mouseout", mouseoutone);

//changes the display of first filter to block when mouseover and none when mouseout
function mouseoverone() {
    document.getElementById("filtertwo").style.display = "block";
    filterone = true;
}
function mouseoutone() {
    filterone = false;
    if (!filtertwo) {
        document.getElementById("filtertwo").style.display = "none";
    }
}
//entire filter two section
document.getElementById("filtertwo").addEventListener("mouseover", mouseovertwo);
document.getElementById("filtertwo").addEventListener("mouseout", mouseouttwo);
//closes pop up filter two
function mouseovertwo() {
    filtertwo = true;
}
function mouseouttwo() {
    filtertwo = false;
}

document.getElementById("genre").addEventListener("mouseover", genredisplay);
document.getElementById("genre").addEventListener("mouseout", genreleave);
document.getElementById("dates").addEventListener("mouseover", datesdisplay);
document.getElementById("dates").addEventListener("mouseout", datesleave);
//document.getElementById("prevconcert").addEventListener("mouseover", prevconcertdisplay);
//document.getElementById("prevconcert").addEventListener("mouseout", prevconcertleave);
document.getElementById("size").addEventListener("mouseover", sizedisplay);
document.getElementById("size").addEventListener("mouseout", sizeleave);
//document.getElementById("distance").addEventListener("mouseover", distancedisplay);
//document.getElementById("distance").addEventListener("mouseout", distancelеave);

function genredisplay() {
    document.getElementById("genrefilter").style.display = "block";
}
function genreleave() {
    document.getElementById("genrefilter").style.display = "none";
}
function datesdisplay() {
    document.getElementById("datesfilter").style.display = "block";
}
function datesleave() {
    document.getElementById("datesfilter").style.display = "none";
}
function sizedisplay() {
    document.getElementById("sizefilter").style.display = "block";
}
function sizeleave() {
    document.getElementById("sizefilter").style.display = "none";
}
// function prevconcertdisplay() {
//     document.getElementById("prevconcertfilter").style.display = "block";
// }
// function prevconcertleave() {
//     document.getElementById("prevconcertfilter").style.display = "none";
// }
// function distancedisplay() {
//     document.getElementById("distancefilter").style.display = "block";
// }
// function distancelеave() {
//     document.getElementById("distancefilter").style.display = "none";
// }
document.getElementById("search").addEventListener("click", search);
function search() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (!checkbox.checked){
            return;
        }
        //add to list
        if(genreTrue){
        //checkbox.name? or checkbox.value? or checkbox.id?
            addGenre(checkbox.id);
        }
        if(datesTrue){
            addDates(checkbox.id);
        }
        if(sizeTrue){
            addSize(checkbox.id);
        }
        /*if(prevconcertTrue){
            addPrevconvert(checkbox.id);
        }
        else if(distanceTrue){
            addDistance(checkbox.id);
        }*/
    });
    
    let input = document.getElementById("searchinput").value;

    fetch("uk.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            genres: genreList,
            dates: datesList,
            sizes: sizeList,
            input: input
            //prevconcerts: prevconvertList,
            //distances: distanceList
        })
    });
}
