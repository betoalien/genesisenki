document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.getElementById("email-link");

    if (emailLink) {
        const user = "enki";
        const domain = "genesisenki.com";
        const email = user + "@" + domain;

        emailLink.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "mailto:" + email;
        });
    }
});
