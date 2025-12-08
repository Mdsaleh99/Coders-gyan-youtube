const starContainer = document.getElementById('star-container');
const ratingValue = document.getElementById("rating-value");
const TOTAL_STARS = 5;
let rating = 0;
function renderStars(totalStars) {
    starContainer.innerHTML = '';
    for (let i = 0; i < totalStars; i++) { 
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = "★";

        // hover effect
        star.addEventListener('mouseover', () => {
            highlightStars(i + 1);
        })
        star.addEventListener('mouseout', () => {
            highlightStars(rating);
        })

        // select star
        star.addEventListener('click', () => {
            rating = i + 1;
            ratingValue.innerText = rating

            // todo: call backend api and submit rating
        })

        starContainer.appendChild(star);
    }
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    })
}

renderStars(TOTAL_STARS);