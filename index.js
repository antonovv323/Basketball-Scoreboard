// ⬇ HOME VARIABLES ⬇ //

let leadingHomeParagraph = document.getElementById("score-leader-home")
let homePointsEl = document.getElementById("home-points")
let homeFoulsEl = document.getElementById("home-fouls")
let homePoints = 0
let homeFouls = 0

// ⬇ GUEST VARIABLES ⬇ //

let leadingGuestParagraph = document.getElementById("score-leader-guest")
let guestPointsEl = document.getElementById("guest-points")
let guestFoulsEl = document.getElementById("guest-fouls")
let guestPoints = 0
let guestFouls = 0

// --------------------------------------------------------------------------------- //


// ⬇ LEADING TEAM FUNCTION ⬇ //

function leadingTeam() {
    if (homePoints > guestPoints) {
        leadingHomeParagraph.textContent= "👑"
        leadingGuestParagraph.textContent= "😭"
    } else if (guestPoints > homePoints) {
        leadingGuestParagraph.textContent= "👑"
        leadingHomeParagraph.textContent= "😭"
    } else {
        leadingHomeParagraph.textContent= "🤝"
        leadingGuestParagraph.textContent= "🤝"
    }
}

leadingTeam()

// --------------------------------------------------------------------------------- //


// ⬇ DISABLE BUTTONS (variable, function)⬇ //

let buttonsToDisable = document.querySelectorAll(".buttons-to-disable") 

function disableButtons() {
    buttonsToDisable.forEach(button => {
    button.classList.add('disabled-btn');
    });
}

// --------------------------------------------------------------------------------- //


// ⬇ HOME FUNCTIONS ⬇ //

function homePlusOneBtn() {
    homePoints += 1
    homePointsEl.textContent = homePoints
    leadingTeam()
}

function homePlusTwoBtn() {
    homePoints += 2
    homePointsEl.textContent = homePoints
    leadingTeam()
}

function homePlusThreeBtn() {
    homePoints += 3
    homePointsEl.textContent = homePoints
    leadingTeam()
}

function addHomeFoulBtn() {
    if (homeFouls >= 4) {
        alert("GAME OVER!✋ GUEST TEAM WINS!🏆 HOME TEAM REACHED THE MAX FOULS!❌ START A NEW GAME!⏱️");
        disableButtons();
        leadingGuestParagraph.textContent= "👑"
        leadingHomeParagraph.textContent= "😭"
        return;
    } else {
        homeFouls += 1
        homeFoulsEl.textContent = homeFouls
    }
}

// --------------------------------------------------------------------------------- //


// ⬇ GUEST FUNCTIONS ⬇ //

function guestPlusOneBtn() {
    guestPoints += 1
    guestPointsEl.textContent = guestPoints
    leadingTeam()
}

function guestPlusTwoBtn() {
    guestPoints += 2
    guestPointsEl.textContent = guestPoints
    leadingTeam()
}

function guestPlusThreeBtn() {
    guestPoints += 3
    guestPointsEl.textContent = guestPoints
    leadingTeam()
}

function addGuestFoulBtn() {
    if (guestFouls >= 4) {
        alert("GAME OVER!✋ HOME TEAM WINS!🏆 GUEST TEAM REACHED THE MAX FOULS!❌ START A NEW GAME!⏱️");
        disableButtons()
        leadingHomeParagraph.textContent= "👑"
        leadingGuestParagraph.textContent= "😭"
        return;
    } else {
        guestFouls += 1
        guestFoulsEl.textContent = guestFouls
    }
}

// --------------------------------------------------------------------------------- //


// ⬇ NEW GAME FUNCTION ⬇ //

function newGameBtn() {
    homePoints = 0
    homeFouls = 0
    homePointsEl.textContent = 0
    homeFoulsEl.textContent = 0
    
    guestPoints = 0
    guestFouls = 0
    guestPointsEl.textContent = 0
    guestFoulsEl.textContent = 0
    
    leadingTeam()
    
    buttonsToDisable.forEach(button => {
    button.classList.remove('disabled-btn');
    });
}
