// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const iceCreamImage = document.getElementById("iceCreamImage");
    const header = document.getElementById("header");
    const eatButton = document.getElementById("eatButton");

    // Eat function
    function eat() {
        if (!iceCreamImage || !header || !eatButton) {
            console.error("One or more elements not found.");
            return;
        }

        iceCreamImage.setAttribute("src", "EmptyCone.png");
        header.textContent = "Hope You Liked It!";
        document.body.style.backgroundColor = "#4ebe58";
        eatButton.textContent = "Click to Refill!";
        eatButton.onclick = refill; // Assign function reference
        eatButton.removeAttribute("onclick"); // Remove inline event
    }

    // Refill function
    function refill() {
        if (!iceCreamImage || !header || !eatButton) {
            console.error("One or more elements not found.");
            return;
        }

        iceCreamImage.setAttribute("src", "FilledCone.png");
        header.textContent = "Here's a Refilled Cone!";
        document.body.style.backgroundColor = "lightblue";
        eatButton.textContent = "Enjoy Yourself!";
        eatButton.onclick = eat; // Reassign to eat function
        eatButton.removeAttribute("onclick"); // Remove inline event
    }

    // Initial event listener setup
    eatButton.addEventListener("click", eat);
});