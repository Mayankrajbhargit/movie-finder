//1.select elements
const searchform = document.getElementById("searchForm");
const searchinput = document.getElementById("searchinput");
const movieGrid = document.getElementById("movieGrid");
const loader = document.getElementById("loader");
const errormsg = document.getElementById("errormsg");
const API_URL = "https://www.omdbapi.com/?apikey=4a3b711b&s="; // FIX: added // after https:

//2.event listeners
searchform.addEventListener("submit", function (event) {
    event.preventDefault(); //stop page refresh
    const searchTerm = searchinput.value.trim(); // FIX: .value (lowercase v)

    //form validation
    if (searchTerm == "") {
        showError("please enter a movie name.");
        return;
    }

    // call our async fetch function
    fetchMovies(searchTerm);
});

// 3.the async fetch function
async function fetchMovies(query) {
    //reset ui before new search
    movieGrid.innerHTML = "";
    hideError();
    showLoader();

    try {
        //await the network request
        const response = await fetch(API_URL + query); // FIX: API_URL, not API_url

        //manual error check for bad network
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        //await json parsing
        const data = await response.json();

        //omdb returns Response: "False" if movie not found
        if (data.Response == "False") {
            throw new Error(data.Error); //movie not found
        }

        //success: pass the array of movies to our render function
        renderMovies(data.Search);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoader(); // FIX: hideLoader, not hideloader
    }
}

//4.render the data to the dom
function renderMovies(moviesArray) {
    let finalHTML = "";

    for (const movie of moviesArray) {
        // FIX: movie.Poster (capital P) and 300x450 (x, not *)
        const posterImage =
            movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Poster";

        finalHTML += `
        <div class="movie-card">
            <img src="${posterImage}" alt="${movie.Title}">
            <div class="movie-info">
                <div class="movie-title">${movie.Title}</div>
                <div class="movie-year">${movie.Year}</div>
            </div>
        </div>
        `;
    }

    movieGrid.innerHTML = finalHTML;
}

//ui helper functions
function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}

function showError(message) {
    errormsg.textContent = message;
    errormsg.classList.remove("hidden"); // FIX: was "hideLoader", must be "hidden"
}

function hideError() {
    errormsg.classList.add("hidden");
}