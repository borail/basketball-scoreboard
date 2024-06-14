let homePointsText = document.getElementById("home-points-text");
let guestPointsText = document.getElementById("guest-points-text")
let scoreHome = 0;
let scoreGuest = 0;

function plusOneHome() {
    scoreHome += 1;
    homePointsText.textContent = scoreHome;
}

function plusTwoHome() {
    scoreHome += 2;
    homePointsText.textContent = scoreHome;
}

function plusThreeHome() {
    scoreHome += 3;
    homePointsText.textContent = scoreHome;
}

function plusOneGuest() {
    scoreGuest += 1;
    guestPointsText.textContent = scoreGuest;
}

function plusTwoGuest() {
    scoreGuest += 2;
    guestPointsText.textContent = scoreGuest;
}

function plusThreeGuest() {
    scoreGuest += 3;
    guestPointsText.textContent = scoreGuest;
}
