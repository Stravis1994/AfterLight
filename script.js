addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signUpForm");

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Here you would typically send the data to your server for processing
        console.log("Username:", username);
        console.log("Email:", email);
        console.log
            ("Password:", password);

        // For demonstration, we'll just reset the form
        signUpForm.reset();
        alert("Account created successfully!");
    });
});

addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Here you would typically send the data to your server for authentication
        console.log("Email:", email);
        console.log("Password:", password);

        // For demonstration, we'll just load the home page
        window.location.href = "user-page.html";
    });
});

addEventListener("DOMContentLoaded", function () {
    const dreamForm = document.getElementById("dreamJournalForm");

    dreamForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const dreamDetails = document.getElementById("dreamDetails").value;

        // Here you would typically send the data to your server for processing
        console.log("Dream Details:", dreamDetails);

        // For demonstration, we'll just reset the form
        dreamForm.reset();
        alert("Dream submitted successfully!");
    });
});