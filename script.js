// Get the review form, review container, and average rating elements
const reviewForm = document.querySelector('.review-form');
const reviewContainer = document.querySelector('.review-container');
const averageRatingElement = document.querySelector('.average-rating');

// Initialize an empty array to store the reviews
let reviews = [];

// Add an event listener to the form submission
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the game title, rating, and review text from the form
  const gameTitle = document.getElementById('game-title').value;
  const rating = parseInt(document.getElementById('review-rating').value);
  const reviewText = document.getElementById('review-text').value;

  // Create a new review object
  const review = {
    gameTitle,
    rating,
    reviewText,
  };

  // Add the new review to the reviews array
  reviews.push(review);

  // Display the new review
  displayReview(review);

  // Calculate and display the average rating
  calculateAverageRating();

  // Reset the form
  reviewForm.reset();
});

// Function to display a review
function displayReview(review) {
  // Create a new review element
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  // Create the review content
  const reviewContent = `
    <h2>${review.gameTitle}</h2>
    <p class="review-rating">Rating: ${review.rating}/5</p>
    <p>${review.reviewText}</p>
  `;

  // Add the review content to the review element
  reviewElement.innerHTML = reviewContent;

  // Add the review element to the review container
  reviewContainer.appendChild(reviewElement);
}

// Function to calculate and display the average rating
function calculateAverageRating() {
  // Calculate the average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Display the average rating
  averageRatingElement.textContent = averageRating.toFixed(2);
}
