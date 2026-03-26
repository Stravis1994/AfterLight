// Handles sign-up form submission on the sign-up page.
addEventListener("DOMContentLoaded", function () {
    // Selects the sign-up form if present.
    const signUpForm = document.getElementById("signUpForm");

    // Intercepts form submit to process values in the browser.
    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Reads user-entered sign-up data.
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Here you would typically send the data to your server for processing
        console.log("name:", name);
        console.log("Surname:", surname);
        console.log("Email:", email);
        console.log
            ("Password:", password);

        // For demonstration, we'll just load the home page
        // Redirects to user home after a successful sign-up flow.
        window.location.href = "user-page.html";
        // Shows confirmation feedback to the user.
        alert("Sign up successful! Welcome, " + name + " " + surname + "!");
    });
});

// Handles login form submission on the login page.
addEventListener("DOMContentLoaded", function () {
    // Selects the login form if present.
    const loginForm = document.getElementById("loginForm");

    // Intercepts login submit for client-side demo behavior.
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Reads login credentials.
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Here you would typically send the data to your server for authentication
        console.log("Email:", email);
        console.log("Password:", password);

        // For demonstration, we'll just load the home page
        // Redirects to user home after login.
        window.location.href = "user-page.html";
    });
});

// Handles dream journal entry submission.
addEventListener("DOMContentLoaded", function () {
    // Selects the journal form if present.
    const dreamForm = document.getElementById("dreamJournalForm");

    // Adds submitted dreams into the visible list.
    dreamForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Captures text from the dream details field.
        const dreamDetails = document.getElementById("dreamDetails").value;

        // Here you would typically send the data to your server for processing
        console.log("Dream Details:", dreamDetails);

        // For demonstration, we'll just reset the form and add the dream to the list
        // Appends a new list item for the submitted dream.
        dreamList.innerHTML += `<li>${dreamDetails}</li>`;
        // Clears inputs for the next dream entry.
        dreamForm.reset();
        alert("Dream submitted successfully!");

    });
});

// Seeds the journal with sample dream entries on page load.
addEventListener("DOMContentLoaded", function () {
    // Selects the list that displays dreams.
    const dreamList = document.getElementById("dreamList");
    // Demo starter data shown to users.
    const dreams = [
        "I was flying over a beautiful landscape.",
        "I was being chased by a mysterious figure.",
        "I found myself in a magical forest.",
    ];

    // Renders each starter dream as a list item.
    dreams.forEach(function (dream) {
        const listItem = document.createElement("li");
        listItem.textContent = dream;
        dreamList.appendChild(listItem);
    });
});

// Handles the add-image button click in the journal form.
addEventListener("DOMContentLoaded", function () {
    // Selects the add image trigger button.
    const addimage = document.getElementById("addImage");

    // Displays placeholder behavior until image upload is implemented.
    addimage.addEventListener("click", function (event) {
        event.preventDefault();
        // Here you would typically open a file dialog to select an image
        console.log("Add Image button clicked!");
        alert("Add Image functionality is not implemented yet.");
    });
});

