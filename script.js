addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signUpForm");

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
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
        window.location.href = "user-page.html";
        alert("Sign up successful! Welcome, " + name + " " + surname + "!");
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

        // For demonstration, we'll just reset the form and add the dream to the list
        dreamList.innerHTML += `<li>${dreamDetails}</li>`;
        dreamForm.reset();
        alert("Dream submitted successfully!");

    });
});

addEventListener("DOMContentLoaded", function () {
    const dreamList = document.getElementById("dreamList");
    const dreams = [
        "I was flying over a beautiful landscape.",
        "I was being chased by a mysterious figure.",
        "I found myself in a magical forest.",
    ];

    dreams.forEach(function (dream) {
        const listItem = document.createElement("li");
        listItem.textContent = dream;
        dreamList.appendChild(listItem);
    });
});

addEventListener("DOMContentLoaded", function () {
    const addimage = document.getElementById("addImage");

    addimage.addEventListener("click", function (event) {
        event.preventDefault();
        // Here you would typically open a file dialog to select an image
        console.log("Add Image button clicked!");
        alert("Add Image functionality is not implemented yet.");
    });
});

