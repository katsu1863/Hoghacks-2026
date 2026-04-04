//--------------------------------------------
// LocationIQ API Call Functions
// These functions call the LocationIQ API to get the autocomplete suggestions, longitude, and latitude for a given city
// Author: Braden Lemna
//--------------------------------------------

const apiKey = 'null' // Input server side to prevent unwanted use

async function autoCompleteCity(input) // Calls LocationIQ api to get the autocomplete suggestions for the given input
{
    const url = 'https://us1.locationiq.com/v1/autocomplete.php?key='+ apiKey + '&format=json&q=' + encodeURIComponent(input) + '&limit=3&dedupe=1&'

    const response = await fetch(url)
    const data = await response.json()

    const suggestions = data.map(item => item.display_name)
    console.log('Autocomplete suggestions for', input, ':', suggestions)

    return suggestions[0] // Return the first suggestion
}

async function getLongitude(city) // Calls LocationIQ api to get the longitude of the given city
{
    const url = 'https://us1.locationiq.com/v1/search.php?key='+ apiKey + '&format=json&q=' + encodeURIComponent(city)

    const response = await fetch(url)
    const data = await response.json()

    const longitude = data[0].lon
    console.log('Longitude for', city, ':', longitude)

    return longitude
}

async function getLatitude(city) // Calls LocationIQ api to get the latitude of the given city
{
    const url = 'https://us1.locationiq.com/v1/search.php?key='+ apiKey + '&format=json&q=' + encodeURIComponent(city)

    const response = await fetch(url)
    const data = await response.json()

    const latitude = data[0].lat
    console.log('Latitude for', city, ':', latitude)

    return latitude
}