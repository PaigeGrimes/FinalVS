// Code from the Original vibe-widget.js
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("vibeHeaderButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// My Code
// Create a dictionary of the button names for each 'page' of the modal
let options = {
    0: ['Local', 'Tourist', 'New Resident'],
    1: ['Date', 'Solo', 'Family', 'Friends'],
    2: ['Upscale', 'Casual', 'Trendy', 'Hidden'],
};
// Create a dictionary of titles for each 'page' of the modal - corresponds to options
let titles = {
    0: "I'm a",
    1: "Who’s joining me?",
    2: "Atmosphere "
};
// Create an array to hold the users choices
let choices = [];
// This function is called after the first option is chosen
function vibeFormChoice(option) {

    const container = document.querySelector(".button-options");
    const title = document.querySelector("#vibe-header");
    const buttons = document.querySelectorAll(".vibe-modal-button");

    let choice = buttons[option].innerText;
    choices.push(choice); // Add the text of the option button to the choices array

    // alert(choice);
    // alert(option);
    container.innerHTML = ""; // Clear the container

    // Which page are we on?
    let step = choices.length - 1;


    // If we haven't reached the end of the dictionary
    if (options[step]) {
        // Set the title
        title.innerText = titles[step];

        // Loop through the dictionary and add buttons to the modal
        options[step].forEach((label, i) => {
            const newButton = document.createElement("button");
            newButton.classList.add("vibe-modal-button");
            newButton.innerText = label;
            newButton.onclick = () => vibeFormChoice(i); // attach click handler
            container.appendChild(newButton);
        });
    } else { // Else, the user has selected all options
        title.innerText = " "; // Clear the modal
        const results = document.createElement("div");
        results.classList.add("categories"); // add a class to the div

        // Show the users choices
        results.innerHTML = `
        <b>${choices[0]}</b> 
     
        <b><u>${titles[0]}</u></b> ${choices[1]}
        <b><u>${titles[1]}</u></b> ${choices[2]}
        <b><u>${titles[2]}</u></b> ${choices[3]} <br/>
        <b><u>Comments:</u></b>
        `;
        container.innerHTML = ""; // clear buttons
        container.appendChild(results); // Add the results to the modal
        console.log("All choices made:", choices);

        // Add a text area so the user can add a comment to their vibe
        // TODO: Limit the character count
        const description = document.createElement("textarea");
        description.classList.add("vibe-comment");
        description.cols = 40;
        description.row= 5;

        container.appendChild(description);

        // Add the submit button // TODO: Add submit form logic
        const submitButton = document.createElement("button");
        submitButton.classList.add("vibe-modal-button");
        submitButton.innerText = "Submit";
        submitButton.onclick = () => submitForm();
        container.appendChild(submitButton);


    }
}