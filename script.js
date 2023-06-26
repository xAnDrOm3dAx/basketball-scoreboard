// Get the required elements
let homePointsEl = document.getElementById("home-score");
let guestPointsEl = document.getElementById("guest-score")

// Initialize scores
let homeScore = 0
let guestScore = 0

// Function to update the score

function addOnePointHome() {
    homeScore += 1
    homePointsEl.textContent = homeScore
}

function addTwoPointsHome() {
    homeScore += 2
    homePointsEl.textContent = homeScore
}

function addThreePointsHome() {
    homeScore += 3
    homePointsEl.textContent = homeScore
}

function addOnePointGuest() {
    guestScore += 1
    guestPointsEl.textContent = guestScore
}

function addTwoPointsGuest() {
    guestScore += 2
    guestPointsEl.textContent = guestScore
}

function addThreePointsGuest() {
    guestScore += 3
    guestPointsEl.textContent = guestScore
}




// // Initialize points
// const points = [1, 2, 3]

