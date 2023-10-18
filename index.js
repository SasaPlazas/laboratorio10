import movies from "./movies.js";

const bannerDiv = document.getElementById("banner");
const recommendationDiv = document.getElementById("recommendedMovies");
const trendingDiv = document.getElementById("trendingMovies");

function ratingToStars(rating) {
  return "⭐".repeat(rating);
}

const bannerMovie = movies[0].map(
  (movie) => `
  <img src="${movie.imageUrl}" alt="${movie.name}" class="bannerImg"/>
  <div class="bannerContent">
      <div class="bannerDescription">
          <h1>${movie.name}</h1>
          <p>${movie.description}</p>
      </div>
      <div class="bannerButtons">
          <button>Reproducir</button>
          <button>Guardar</button>
      </div>
      <div class="bannerRating">
      <span>Rating: <span class="star">${ratingToStars(
        movie.rating
      )}</span></span>
      </div>
  </div>
`
);

const recommendationMovies = movies[1].map(
  (movie) => `
        <li class="movie">
            <img class="movieImg" src="${movie.imageUrl}" alt="${movie.name}" />
            <div class="movieRating">
                <span>Rating: <span class="star">${ratingToStars(
                  movie.rating
                )}</span></span>
                <button>
                  <img class="buttonImg" src="../icons/bookmark.png" alt="bookmark" />
                </button>
            </div>
        </li>
    `
);
const trendingMovies = movies[2].map(
  (movie) => `
        <li class="movie">
            <img class="movieImg" src="${movie.imageUrl}" alt="${movie.name}" />
            <div class="movieRating">
                <span>Rating: <span class="star">${ratingToStars(
                  movie.rating
                )}</span></span>
                <button>
                  <img class="buttonImg" src="../icons/bookmark.png" alt="bookmark" />
                </button>
            </div>
        </li>
    `
);

bannerDiv.innerHTML = bannerMovie[0];
recommendationDiv.innerHTML = recommendationMovies;
trendingDiv.innerHTML = trendingMovies;
